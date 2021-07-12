import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import '../styles/main.scss';

import { Header } from './header';
import { Footer } from './footer';

export const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <a className="skip-link" href="#main">
          skip to main content
        </a>
        <Header siteTitle={data.site.siteMetadata.title} location={location} />
        <main className="main" id="main" role="main">
          {children}
        </main>
        <Footer />
      </React.Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({}),
};

Layout.defaultProps = {
  location: {},
};
