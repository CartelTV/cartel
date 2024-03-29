import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';

import { NineGridVideos } from '../components/patterns/nineGridVideos';

const WorkPage = ({ data, location }) => {
  const { workVideos } = data.allWpPage.edges[0].node.work;

  return (
    <Layout location={location}>
      <SEO title="Work" />
      <h1 className="visuallyhidden">Work</h1>
      <div className="container">
        <NineGridVideos videosList={workVideos} location={location} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpPage(filter: { databaseId: { eq: 40 } }) {
      edges {
        node {
          work {
            workVideos {
              agency
              client
              director
              duration
              editor
              pagePath
              productionCompany
              title
              videoUrl
              colorImage {
                altText
                sourceUrl
              }
              bwImage {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;

WorkPage.propTypes = {
  data: PropTypes.shape({
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            work: PropTypes.shape({
              workVideos: PropTypes.arrayOf(
                PropTypes.shape({
                  client: PropTypes.string,
                  colorImage: PropTypes.shape({
                    altText: PropTypes.string,
                    sourceUrl: PropTypes.string,
                  }),
                  bwImage: PropTypes.shape({
                    sourceUrl: PropTypes.string,
                  }),
                  pagePath: PropTypes.string,
                  title: PropTypes.string,
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

export default WorkPage;
