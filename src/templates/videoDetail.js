import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { VideoDetail } from '../components/patterns/videoDetail';
import ThreeColGrid from '../components/patterns/threeColGrid';

const VideoDetailPage = ({ data }) => {
  const videoDetails = data.allWpVideoDetailPage.nodes[0].videoDetail;
  const videosList =
    data.allWpEditorDetailPage.nodes[0].editorDetail.editorVideos;
  const editorSlug = data.allWpEditorDetailPage.nodes[0].slug;

  return (
    <Layout>
      <SEO
        title={`${videoDetails.client} ${
          videoDetails.title ? `- ${videoDetails.title}` : ''
        } - ${videoDetails.editor}`}
      />
      <VideoDetail data={videoDetails} />
      <div className="container">
        <ThreeColGrid list={videosList} editorSlug={editorSlug} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!, $editorId: Int!) {
    allWpVideoDetailPage(filter: { id: { eq: $id } }) {
      nodes {
        videoDetail {
          agency
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
    allWpEditorDetailPage(filter: { databaseId: { eq: $editorId } }) {
      nodes {
        slug
        editorDetail {
          editorVideos {
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
`;

VideoDetailPage.propTypes = {
  data: PropTypes.shape({
    allWpVideoDetailPage: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
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
        })
      ),
    }),
    allWpEditorDetailPage: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          editorDetail: PropTypes.shape({
            editorVideos: PropTypes.arrayOf(PropTypes.shape({})),
          }),
          slug: PropTypes.string,
        })
      ),
    }),
  }).isRequired,
};

export default VideoDetailPage;
