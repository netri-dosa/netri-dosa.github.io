import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Col, Container, Row } from "react-bootstrap";

//import ProductsAccordion from "../../templates/products-accordion";
//import ProductTabs from "../../templates/products-tab";
import ProductSlider from "../../templates/product-slider";

const OurProducts = () => (
    <StaticQuery
        query={
            graphql`
            {
                allProductsYaml {
                    nodes {
                        product {
                            name
                            path
                            short_description
                            category
                            image {
                                publicURL
                            }
                        }
                    }
                }
            }
        `}
        render={data => (

            <section class="section service" id="service">
                <Container>
                    <Row class="text-center">
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <div class="service__header">
                                <span>Our Products</span>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <Col>
                            {/* <ProductsAccordion productGroups={data.allTechnologiesYaml.group} /> */}
                            {/* <ProductTabs productGroups={data.allProductsYaml.group} /> */}
                            <div class="gb-slider">
                                <ProductSlider products={data.allProductsYaml.nodes} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )}
    ></StaticQuery>
);

export default OurProducts