/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import ThreeColGrid from '../components/patterns/threeColGrid';

const TheLookoutPage = ({ data }) => {
  const {
    lookoutHeroHeaderVideo,
    lookoutHeroHeaderVideoFallback,
    lookoutEditors,
  } = data.cartel.page.lookoutPage;

  return (
    <Layout>
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
    cartel {
      page(id: "114", idType: DATABASE_ID) {
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
`;

TheLookoutPage.propTypes = {
  data: PropTypes.shape({
    cartel: PropTypes.shape({
      page: PropTypes.shape({
        lookoutPage: PropTypes.shape({
          lookoutHeroHeaderVideo: PropTypes.shape({
            mediaItemUrl: PropTypes.string,
          }),
          lookoutHeroHeaderVideoFallback: PropTypes.string,
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
    }),
  }).isRequired,
};

export default TheLookoutPage;
