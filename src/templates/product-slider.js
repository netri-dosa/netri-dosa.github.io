import React, { Component } from "react";
import { Col, Image } from "react-bootstrap";
import Slider from "react-slick";

import PlaceHolderImage from "../../content/images/general/logo.png";

export default class Responsive extends Component {
    render() {
        var settings = {
            infinite: false,
            slidesToScroll: 1,
            slidesToShow: 2,
            dots: true,
            fade: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                    }
                },
                {
                    breakpoint: 420,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        fade: false,
                        infinite: true,
                        dots: false,
                    }
                },
            ]
        };
        let products = this.props.products
        return (
            <Slider {...settings}>
                {
                    products.map((product) => {
                        return (
                            <Col className="text-center">
                                <div class="gb-card text-center">
                                    <Image className="center-block img-fluid img-responsive" src={product.product.image.publicURL} title={product.product.name} />
                                    <a href={product.product.path} title={product.product.name}>
                                        <div className="product-name">{product.product.name}</div>
                                    </a>
                                    <p>{product.product.short_description}</p>
                                </div>
                            </Col>
                        )
                    })
                }
            </Slider>
        );
    }
}