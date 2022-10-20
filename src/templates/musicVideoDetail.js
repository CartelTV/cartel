import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { VideoDetail } from '../components/patterns/videoDetail';
import ThreeColGrid from '../components/patterns/threeColGrid';

const MusicVideoDetailPage = ({ data, location }) => {
  const { videos } = data.allWpPage.edges[0].node.musicVideos;
  const videoDetails = videos.filter(
    video => video.pagePath.split('/')[2] === location.pathname.split('/')[2]
  )[0];

  return (
    <Layout>
      <SEO
        title={`${videoDetails.title ? `${videoDetails.title}` : ''} - ${
          videoDetails.editor
        }`}
      />
      <VideoDetail data={videoDetails} />
      <div className="container">
        <ThreeColGrid list={videos} editorSlug="music-videos" />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: Int!) {
    allWpPage(filter: { databaseId: { eq: $id } }) {
      edges {
        node {
          musicVideos {
            videos {
              agency
              artist
              bwImage {
                sourceUrl
              }
              colorImage {
                altText
                sourceUrl
                title
              }
              director
              duration
              editor
              pagePath
              productionCompany
              title
              videoUrl
            }
          }
        }
      }
    }
  }
`;

MusicVideoDetailPage.propTypes = {
  data: PropTypes.shape({
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            musicVideos: PropTypes.shape({
              videos: PropTypes.arrayOf(
                PropTypes.shape({
                  agency: PropTypes.string,
                  client: PropTypes.string,
                  director: PropTypes.string,
                  duration: PropTypes.string,
                  editor: PropTypes.string,
                  pagePath: PropTypes.string,
                  productionCompany: PropTypes.string,
                  title: PropTypes.string,
                  colorImages: PropTypes.shape({
                    altText: PropTypes.string,
                    sourceUrl: PropTypes.string,
                    title: PropTypes.string,
                  }),
                  videoUrl: PropTypes.string,
                })
              ),
            }),
          }),
        })
      ),
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default MusicVideoDetailPage;
