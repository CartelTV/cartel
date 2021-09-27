import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import ThreeColGrid from '../components/patterns/threeColGrid';

const EditorsPage = ({ data, location }) => {
  const { editors } = data.allWpPage.edges[0].node.editors;

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
              colorImage {
                altText
                sourceUrl
              }
              bwImage {
                sourceUrl
              }
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
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            editors: PropTypes.shape({
              editors: PropTypes.arrayOf(
                PropTypes.shape({
                  colorImage: PropTypes.shape({
                    altText: PropTypes.string,
                    sourceUrl: PropTypes.string,
                  }),
                  bwImage: PropTypes.shape({
                    sourceUrl: PropTypes.string,
                  }),
                  name: PropTypes.string,
                  pagePath: PropTypes.string,
                })
              ),
            }),
          }),
        })
      ),
    }),
  }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default EditorsPage;
