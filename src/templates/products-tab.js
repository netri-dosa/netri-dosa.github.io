import React from 'react';
import { Card, Col, Image, Nav, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap';

import ProductSlider from "../templates/product-slider";

const ProductCards = ({ products }) => {
    return (
        products.map((product) => {
            return (
                <Col sm={4}>
                    <Card.Body>
                        <div class="blog__item">
                            <div class="blog__item-thumb">
                                <Image src={product.platform.logo.publicURL} alt={product.platform.name} />
                            </div>
                            <div class="blog__item-content">
                                {/* <span>Jan 20, 2020</span> */}
                                <a href={product.platform.path}>{product.platform.name}</a>
                            </div>
                        </div>
                    </Card.Body>
                </Col>
            )
        })
    )
}

export default function ProductTabs({ productGroups }) {
    return (
        <TabContainer defaultActiveKey={productGroups[0].fieldValue}>
            <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    {
                        productGroups.map((productGroup) => {
                            return (
                                <Nav.Item>
                                    <Nav.Link eventKey={productGroup.fieldValue}>{productGroup.fieldValue}</Nav.Link>
                                </Nav.Item>
                            )
                        })
                    }
                </Nav>
            </Col>
            <Col sm={9}>
                <TabContent>
                    {
                        productGroups.map((productGroup) => {
                            return (
                                <TabPane eventKey={productGroup.fieldValue}>
                                    {/* <Row> */}
                                    {/* <ProductCards products={productGroup.nodes}/> */}
                                    {/* <ProductSlider products={productGroup.nodes} /> */}
                                    {/* </Row> */}
                                </TabPane>
                            )
                        })
                    }
                </TabContent>
            </Col>
        </TabContainer>
    );
}