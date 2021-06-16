import React from 'react';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { VideoDetail } from '../components/patterns/videoDetail';
import ThreeColGrid from '../components/patterns/threeColGrid';

const videoDetail = {
  editor: 'Andy McKay',
  videoStill: {
    altText: 'The alternative text.',
    sourceUrl: 'https://placeimg.com/750/422/any',
  },
  videoUrl:
    'https://cartel.wiredrive.com/?routekey=iframe-embed&token=d98f93883fd6f20f8fc38fa44d76e06b&autoplay=1&loop=0&controls=1&color=4EB7D4',
  title: 'The Title',
  director: 'Homer Simpson',
  agency: 'CPB',
  productionCompany: 'HBO',
  duration: '01:00',
};

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

const VideoDetailPage = () => (
  <Layout>
    <SEO title="Video Detail" />
    <VideoDetail data={videoDetail} />
    <div className="container">
      <ThreeColGrid list={videosList} />
    </div>
  </Layout>
);

export default VideoDetailPage;
