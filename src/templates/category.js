import React from 'react'
import { graphql, Link } from 'gatsby'
import { Row, Col, Container } from 'react-bootstrap';

import Layout from '../components/layout';
import ProductSlider from "../templates/product-slider";

const RelatedCategories = ({ items }) => {
    return (
        <section class="section" id="related">
            <Container>
                <Row class="text-center"><Col className="text-center header">Also have a look</Col></Row>
                <Row class="text-center">
                    {
                        items.title.map((item, index) => {
                            return (
                                <Col className="text-center">
                                    <div class="gb-card text-center">
                                        <Link to={`/${items.link[index].fieldValue}`} title={item.fieldValue}>
                                            <div className="product-name">{item.fieldValue}</div>
                                        </Link>
                                    </div>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

const CategoryPage = ({ data }) => {
    const products = data.allProductsYaml.nodes;
    const otherCategories = data.other;
    return (
        <Layout>
            <section class="section" id="category">
                <Container>
                    <Row class="text-center">
                        <div class="col-lg-6 col-md-12 col-sm-12 title">
                            <div class="header">
                                <span>{products[0].product.category}</span>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <Col>
                            <div class="gb-slider">
                                <ProductSlider products={products} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {otherCategories.title.length > 0 && <RelatedCategories items={otherCategories} />}
        </Layout>
    );
}

export const query = graphql`
  query($category: String!){
    allProductsYaml(filter: {product: {category: {eq: $category}}}, sort: {fields: product___sort_order}) {
      nodes {
        product {
          image {
            publicURL
          }
          name
          path
          short_description
          sku
          sort_order
          type
          description
          category
        }
      }
    }
    other: allProductsYaml(filter: {product: {category: {ne: $category}}}) {
        title: group(field: product___category) {
            fieldValue
        }
        link: group(field: product___type) {
            fieldValue
        }
    }
  }
`


export default CategoryPage;