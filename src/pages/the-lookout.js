/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import ThreeColGrid from '../components/patterns/threeColGrid';

const TheLookoutPage = ({ data, location }) => {
  const {
    lookoutHeroHeaderVideo,
    lookoutHeroHeaderVideoFallback,
    lookoutEditors,
  } = data.allWpPage.edges[0].node.lookoutPage;

  return (
    <Layout location={location}>
      <SEO title="The Lookout" />
      <article className="editors">
        <h1 className="visuallyhidden">Editors</h1>
        <div className="container">
          <video muted autoPlay loop height="585" width="1140">
            <source
              src={lookoutHeroHeaderVideo.mediaItemUrl}
              type="video/webm"
            />
            <source
              src={lookoutHeroHeaderVideoFallback.mediaItemUrl}
              type="video/mp4"
            />
          </video>
          <ThreeColGrid list={lookoutEditors} aspectRatio="3500:1460" />
        </div>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpPage(filter: { databaseId: { eq: 114 } }) {
      edges {
        node {
          lookoutPage {
            lookoutHeroHeaderVideo {
              mediaItemUrl
            }
            lookoutHeroHeaderVideoFallback {
              mediaItemUrl
            }
            lookoutEditors {
              name
              pagePath
              image {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;

TheLookoutPage.propTypes = {
  data: PropTypes.shape({
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            lookoutPage: PropTypes.shape({
              lookoutHeroHeaderVideo: PropTypes.shape({
                mediaItemUrl: PropTypes.string,
              }),
              lookoutHeroHeaderVideoFallback: PropTypes.shape({
                mediaItemUrl: PropTypes.string,
              }),
              lookoutEditors: PropTypes.arrayOf(
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
        })
      ),
    }),
  }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default TheLookoutPage;
