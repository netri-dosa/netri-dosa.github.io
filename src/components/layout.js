import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/css/greenbird-digital.css';

import Header from './header';
import Footer from './footer';

import Logo from '../../content/images/general/logo.png';

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={
          graphql`{
                site {
                    siteMetadata {
                        title
                        description
                        keywords
                        author
                        url
                    }
                }
            }
            `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: `${data.site.siteMetadata.description}` },
                { name: 'keywords', content: `${data.site.siteMetadata.keywords}` },
              ]}
            >
              <html />
            </Helmet>
            <div className="page-wrapper">
              <Header siteInfo={data.site.siteMetadata} logo={Logo} />
              {children}
              <Footer siteInfo={data.site.siteMetadata} logo={Logo} />
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
