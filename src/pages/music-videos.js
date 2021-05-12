import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';

import { NineGridVideos } from '../components/patterns/nineGridVideos';

const MusicVideosPage = ({ data }) => {
  const musicVideos = data.cartel.page.musicVideos.videos;

  return (
    <Layout>
      <SEO title="Work" />
      <h1 className="visuallyhidden">Work</h1>
      <div className="container">
        <NineGridVideos videosList={musicVideos} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    cartel {
      page(id: "52", idType: DATABASE_ID) {
        musicVideos {
          videos {
            artist
            pagePath
            title
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

MusicVideosPage.propTypes = {
  data: PropTypes.shape({
    cartel: PropTypes.shape({
      page: PropTypes.shape({
        musicVideos: PropTypes.shape({
          videos: PropTypes.arrayOf(
            PropTypes.shape({
              artist: PropTypes.string,
              image: PropTypes.shape({
                altText: PropTypes.string,
                sourceUrl: PropTypes.string,
              }),
              pagePath: PropTypes.string,
              title: PropTypes.string,
            })
          ),
        }),
      }),
    }),
  }).isRequired,
};

export default MusicVideosPage;
