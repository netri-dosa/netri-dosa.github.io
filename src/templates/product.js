import React from 'react'
import { Row, Col, Container, Badge, Image } from 'react-bootstrap'

import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'

import PlaceholdeerImage from '../../content/images/general/logo.png';

const Product = ({ data }) => {
    const product = data.allProductsYaml.nodes[0].product;
    return (
        <Layout>
            {/* <div className="product-details">
                <Container>
                    <Row className="text-center">
                        <Col className="product-header">
                            <div className="title">{product.name}</div>
                            <div className="tag-line">A {product.category} product!</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="m-auto">
                            <div className="product-image">
                                <Image src={product.image.publicURL} />
                            </div>
                        </Col>
                        <Col md={6} className="m-auto">
                            <div className="product-name">Name: {product.name}</div>
                            <div className="product-sku">Sku: {product.sku}</div>
                            <Badge className="product-category">{product.category}</Badge>
                        </Col>
                    </Row>
                </Container>
            </div> */}
            <section class="section" id="product">
                <Container>
                    <Row class="text-center">
                        <Col lg={6} md={12} sm={12} xs={12}>
                            <div class="header">
                                <span>{product.name}</span>
                                <div className="tag-line">{product.short_description}</div>
                                <div className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula felis nec leo laoreet, in vulputate lacus vulputate. Mauris a erat finibus, varius purus ac, lobortis mi.
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12} xs={12}>
                            <div className="product-image">
                                <Image className="img-fluid center-block img-responsive" src={product.image.publicURL} />
                            </div>
                        </Col>
                    </Row>
                    {/* <Row>
                    <Col lg={6} md={12} sm={12} xs={12}>
                            <div class="header">
                                <span>{product.name}</span>
                                <div className="tag-line">A {product.short_description}</div>
                            </div>
                        </Col>
                    </Row> */}
                </Container>
            </section>
            <section class="section" id="related">
                <Container>
                    <Row class="text-center">
                        <Col className="text-center header">
                            Also have a look at similar <Link to={`/${product.type}`} title={product.category}>{product.category} </Link> products
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout >
    );
}

export const productQuery = graphql`
  query($sku: String!) {
    allProductsYaml(filter: { product: { sku: { eq: $sku } } }) {
      nodes {
        product {
            description
            name
            path
            short_description
            sku
            sort_order
            type
            category
            image {
                publicURL
            }
        }
      }
    }
  }
`;

export default Product