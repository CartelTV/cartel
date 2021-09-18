import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import ThreeColGrid from '../components/patterns/threeColGrid';

const EditorsPage = ({ data, location }) => {
  const { editors } = data.cartel.page.editors;

  return (
    <Layout location={location}>
      <SEO title="Editors" />
      <article className="editors">
        <h1 className="visuallyhidden">Editors</h1>
        <div className="container">
          <ThreeColGrid list={editors} aspectRatio="3500:1460" />
        </div>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpPage(filter: { databaseId: { eq: 64 } }) {
      edges {
        node {
          id
          editors {
            editors {
              name
              pagePath
            }
          }
        }
      }
    }
  }
`;

EditorsPage.propTypes = {
  data: PropTypes.shape({
    cartel: PropTypes.shape({
      page: PropTypes.shape({
        editors: PropTypes.shape({
          editors: PropTypes.arrayOf(
            PropTypes.shape({
              image: PropTypes.shape({
                altText: PropTypes.string,
                sourceUrl: PropTypes.string,
              }),
              name: PropTypes.string,
              pagePath: PropTypes.string,
            })
          ),
        }),
      }),
    }),
  }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default EditorsPage;
