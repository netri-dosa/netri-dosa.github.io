import React from 'react';
import { Accordion, Card} from 'react-bootstrap';

const ProductCards = ({products}) => {
    return (
        products.map((product) => {
            return (
                <Card.Body>
                    <div class="blog__item">
                        <div class="blog__item-thumb">
                            <img src="https://secure.gravatar.com/blavatar/95bfcd76fb14345eceb7558f268e124e?s=200&ts=1605961122" alt="blog-1"/>
                        </div>
                        <div class="blog__item-content">
                            {/* <span>Jan 20, 2020</span> */}
                            <a href="single-blog.html">{product.platform.name}</a>
                        </div>
                    </div>
                </Card.Body>
            )
        })
    )
}

export default function ProductsAccordion({ productGroups }) {
    return (
        <div class="col-lg-6">
            <Accordion defaultActiveKey="0">
                {
                    productGroups.map((productGroup) => {
                        return (
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey={productGroup.fieldValue}>
                                    {productGroup.fieldValue}</Accordion.Toggle>
                                <Accordion.Collapse eventKey={productGroup.fieldValue}>
                                    <ProductCards products={productGroup.nodes}/></Accordion.Collapse>
                            </Card>
                        )
                    })
                }
            </Accordion>
        </div>
    );
}