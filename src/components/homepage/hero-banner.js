import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default function HeroBanner() {
    return (
        <section class="hero">
            <Container>
                <Row className="row align-items-center">
                    <div class="col-lg-12">
                        <div class="hero-content">
                            <span class="hero-content-subtitle">Netri Dosa</span>
                            <h1>Healthy, testy and dry</h1>
                            <p>
                                Enjoy team diversity and increase their networks among others people
                                in various fields by providing an exceptional facilities and
                                coworking.
                            </p>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
}
