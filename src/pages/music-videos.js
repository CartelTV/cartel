import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';

import { NineGridVideos } from '../components/patterns/nineGridVideos';

const MusicVideosPage = ({ data, location }) => {
  const musicVideos = data.allWpPage.edges[0].node.musicVideos.videos;

  return (
    <Layout location={location}>
      <SEO title="Music Videos" />
      <h1 className="visuallyhidden">Work</h1>
      <div className="container">
        <NineGridVideos videosList={musicVideos} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpPage(filter: { databaseId: { eq: 52 } }) {
      edges {
        node {
          musicVideos {
            videos {
              agency
              artist
              director
              duration
              editor
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

MusicVideosPage.propTypes = {
  data: PropTypes.shape({
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            musicVideos: PropTypes.shape({
              videos: PropTypes.arrayOf(
                PropTypes.shape({
                  artist: PropTypes.string,
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

export default MusicVideosPage;
