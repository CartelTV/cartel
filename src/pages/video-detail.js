import React from 'react';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { VideoDetail } from '../components/patterns/videoDetail';
import ThreeColGrid from '../components/patterns/threeColGrid';

const videosList = [
  {
    videoSrc:
      'https://cartel.wiredrive.com/?routekey=iframe-embed&token=300e1776e61b6928228e78cd005577ac&loop=0&controls=1&color=4EB7D4',
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    imageSrc: 'https://picsum.photos/1030/596',
    url: '/video-detail',
  },
  {
    videoSrc:
      'https://cartel.wiredrive.com/?routekey=iframe-embed&token=234f2dda2110b43e094f19fcde9ad4b0&loop=0&controls=1&color=4EB7D4',
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    imageSrc: 'https://picsum.photos/1030/596',
    url: '/video-detail',
  },
  {
    videoSrc:
      'https://cartel.wiredrive.com/?routekey=iframe-embed&token=3e2f6c9d1ebdf0816c75a7a52c5fda1c&loop=0&controls=1&color=4EB7D4',
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    imageSrc: 'https://picsum.photos/1030/596',
    url: '/video-detail',
  },
  {
    videoSrc:
      'https://cartel.wiredrive.com/?routekey=iframe-embed&token=300e1776e61b6928228e78cd005577ac&loop=0&controls=1&color=4EB7D4',
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    imageSrc: 'https://picsum.photos/1030/596',
    url: '/video-detail',
  },
  {
    videoSrc:
      'https://cartel.wiredrive.com/?routekey=iframe-embed&token=234f2dda2110b43e094f19fcde9ad4b0&loop=0&controls=1&color=4EB7D4',
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    imageSrc: 'https://picsum.photos/1030/596',
    url: '/video-detail',
  },
  {
    videoSrc:
      'https://cartel.wiredrive.com/?routekey=iframe-embed&token=3e2f6c9d1ebdf0816c75a7a52c5fda1c&loop=0&controls=1&color=4EB7D4',
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    imageSrc: 'https://picsum.photos/1030/596',
    url: '/video-detail',
  },
  {
    videoSrc:
      'https://cartel.wiredrive.com/?routekey=iframe-embed&token=300e1776e61b6928228e78cd005577ac&loop=0&controls=1&color=4EB7D4',
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    imageSrc: 'https://picsum.photos/1030/596',
    url: '/video-detail',
  },
  {
    videoSrc:
      'https://cartel.wiredrive.com/?routekey=iframe-embed&token=234f2dda2110b43e094f19fcde9ad4b0&loop=0&controls=1&color=4EB7D4',
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    imageSrc: 'https://picsum.photos/1030/596',
    url: '/video-detail',
  },
  {
    videoSrc:
      'https://cartel.wiredrive.com/?routekey=iframe-embed&token=3e2f6c9d1ebdf0816c75a7a52c5fda1c&loop=0&controls=1&color=4EB7D4',
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    imageSrc: 'https://picsum.photos/1030/596',
    url: '/video-detail',
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
