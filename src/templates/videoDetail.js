import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { VideoDetail } from '../components/patterns/videoDetail';
import ThreeColGrid from '../components/patterns/threeColGrid';

const VideoDetailPage = ({ data }) => {
  const videoDetails = data.cartel.videoDetailPage.videoDetail;
  const videosList =
    data.cartel.editorDetailPages.nodes[0].editorDetail.editorVideos;

  return (
    <Layout>
      <SEO title="Video Detail" />
      <VideoDetail data={videoDetails} />
      <div className="container">
        <ThreeColGrid list={videosList} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: ID!, $editorId: Int!) {
    cartel {
      videoDetailPage(id: $id) {
        videoDetail {
          client
          director
          duration
          editor
          productionCompany
          videoStill {
            altText
            sourceUrl
          }
          videoUrl
          title
        }
      }
    }
    cartel {
      editorDetailPages(where: { id: $editorId }) {
        nodes {
          editorDetail {
            editorVideos {
              pagePath
              image {
                altText
                sourceUrl
                title
              }
            }
          }
        }
      }
    }
  }
`;

VideoDetailPage.propTypes = {
  data: PropTypes.shape({
    cartel: PropTypes.shape({
      videoDetailPage: PropTypes.shape({
        videoDetail: PropTypes.shape({
          agency: PropTypes.string,
          client: PropTypes.string,
          director: PropTypes.string,
          duration: PropTypes.string,
          editor: PropTypes.string,
          editorId: PropTypes.string,
          productionCompany: PropTypes.string,
          title: PropTypes.string,
          videoStill: PropTypes.shape({
            altText: PropTypes.string,
            sourceUrl: PropTypes.string,
          }),
          videoUrl: PropTypes.string,
        }),
      }),
      editorDetailPages: PropTypes.shape({
        nodes: PropTypes.arrayOf(
          PropTypes.shape({
            editorDetail: PropTypes.shape({
              editorVideos: PropTypes.arrayOf(PropTypes.shape({})),
            }),
          })
        ),
      }),
    }),
  }).isRequired,
};

export default VideoDetailPage;