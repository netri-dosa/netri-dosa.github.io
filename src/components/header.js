import React from 'react';
import { Image } from 'react-bootstrap';
import HamburgerMenu from "../components/menu";

import Logo from "../../content/images/general/logo.png"

export default function Header({ siteInfo }) {
    return (
        <>
            <HamburgerMenu />
            <nav class="main-nav navbar navbar-expand-lg headroom headroom--pinned headroom--top">
                <a class="navbar-brand" href="/">
                    <Image className="center-block img-responsive" src={Logo} title={siteInfo.name} alt={siteInfo.name} />
                </a>
            </nav>
        </>
    );
}
