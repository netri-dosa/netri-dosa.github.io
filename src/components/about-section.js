import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function Footer({ siteInfo }) {
  return (
    <section class="section about" id="about">
        <div class="container">
            <div class="row text-center">
                <div class="col-lg-6 offset-lg-3">
                    <div class="about_header">
                        <span>About</span>
                        <h1>About me</h1>
                        <p>Enjoy team diversity and increase their networks among others people in various fields by
                            provided.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="about_content">
                        <div class="about_content-inner">
                            <h3>I design and build ultimate things.</h3>
                            <p>I love to work in User Experience &amp; User Interface designing. Because I love to solve the
                                design problem and find easy and better solutions to solve it. I always try my best to make
                                good user interface with the best user experience. I have been working as a Visual designer
                                from.
                            </p>
                            <ul>
                                <li><a class="active" href="#">Hire me</a></li>
                                <li><a href="#">Download CV</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}


