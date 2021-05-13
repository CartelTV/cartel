import React from 'react';

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
      sourceUrl: 'https://picsum.photos/1060/442',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Race Day is Still Sacred',
      sourceUrl: 'https://picsum.photos/1060/442',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Race Day is Still Sacred',
      sourceUrl: 'https://picsum.photos/1060/442',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Race Day is Still Sacred',
      sourceUrl: 'https://picsum.photos/1060/442',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Race Day is Still Sacred',
      sourceUrl: 'https://picsum.photos/1060/442',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Race Day is Still Sacred',
      sourceUrl: 'https://picsum.photos/1060/442',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Race Day is Still Sacred',
      sourceUrl: 'https://picsum.photos/1060/442',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Race Day is Still Sacred',
      sourceUrl: 'https://picsum.photos/1060/442',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Race Day is Still Sacred',
      sourceUrl: 'https://picsum.photos/1060/442',
    },
    pagePath: '/video-detail',
  },
];

const VideoDetailPage = () => (
  <Layout>
    <SEO title="Video Detail" />
    <VideoDetail />
    <div className="container">
      <ThreeColGrid list={videosList} />
    </div>
  </Layout>
);

export default VideoDetailPage;
