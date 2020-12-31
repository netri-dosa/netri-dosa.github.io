import React from "react";

import Layout from "../components/layout";
import HeroBanner from "../components/homepage/hero-banner";
import OurProductsSection from "../components/homepage/our-products";
import AboutSection from "../components/about-section";

const IndexPage = () => (
    <Layout>
        <HeroBanner />
        {/* <AboutSection /> */}
        <OurProductsSection />
    </Layout>
);

export default IndexPage;
