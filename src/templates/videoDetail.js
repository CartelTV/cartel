import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { VideoDetail } from '../components/patterns/videoDetail';
import ThreeColGrid from '../components/patterns/threeColGrid';

const videosList = [
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Race Day is Still Sacred',
      sourceUrl: 'https://picsum.photos/1600/900',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Race Day is Still Sacred',
      sourceUrl: 'https://picsum.photos/1600/900',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Race Day is Still Sacred',
      sourceUrl: 'https://picsum.photos/1600/900',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Race Day is Still Sacred',
      sourceUrl: 'https://picsum.photos/1600/900',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Race Day is Still Sacred',
      sourceUrl: 'https://picsum.photos/1600/900',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Race Day is Still Sacred',
      sourceUrl: 'https://picsum.photos/1600/900',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Race Day is Still Sacred',
      sourceUrl: 'https://picsum.photos/1600/900',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Race Day is Still Sacred',
      sourceUrl: 'https://picsum.photos/1600/900',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Race Day is Still Sacred',
      sourceUrl: 'https://picsum.photos/1600/900',
    },
    pagePath: '/video-detail',
  },
];

const VideoDetailPage = ({ data }) => {
  const videoDetails = data.cartel.videoDetailPage.videoDetail;

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
  query($id: ID!) {
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
          productionCompany: PropTypes.string,
          title: PropTypes.string,
          videoStill: PropTypes.shape({
            altText: PropTypes.string,
            sourceUrl: PropTypes.string,
          }),
          videoUrl: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export default VideoDetailPage;
