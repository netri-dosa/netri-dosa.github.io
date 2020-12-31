import { Link } from 'gatsby';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import SocialMediaLinks from "../components/social-media-links";

export default function Footer({ siteInfo, logo }) {
    return (
        <section className="footer" id="footer">
            <Container>
                <Row className="footer-logo">
                    <Col>
                        <Image className="center-block img-responsive" src={logo} title={siteInfo.name} alt={siteInfo.name} />
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <Row>
                            <Col><SocialMediaLinks /></Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="developer-footprints">
                    <Col>
                        <div className="copyright-text text-center">
                            Developed by <Link to={siteInfo.url} title={siteInfo.author}>{siteInfo.author}</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
