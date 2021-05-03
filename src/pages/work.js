import React from 'react';

import { Layout } from '../components/layout';
import SEO from '../components/seo';

import { NineGridVideos } from '../components/patterns/nineGridVideos';

const recentWorkVideos = [
  {
    videoSrc:
      'https://cartel.wiredrive.com/?routekey=iframe-embed&token=300e1776e61b6928228e78cd005577ac&loop=0&controls=1&color=4EB7D4',
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    imageSrc: 'https://picsum.photos/1030/596',
  },
  {
    videoSrc:
      'https://cartel.wiredrive.com/?routekey=iframe-embed&token=234f2dda2110b43e094f19fcde9ad4b0&loop=0&controls=1&color=4EB7D4',
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    imageSrc: 'https://picsum.photos/1030/596',
  },
  {
    videoSrc:
      'https://cartel.wiredrive.com/?routekey=iframe-embed&token=3e2f6c9d1ebdf0816c75a7a52c5fda1c&loop=0&controls=1&color=4EB7D4',
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    imageSrc: 'https://picsum.photos/1030/596',
  },
  {
    videoSrc:
      'https://cartel.wiredrive.com/?routekey=iframe-embed&token=300e1776e61b6928228e78cd005577ac&loop=0&controls=1&color=4EB7D4',
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    imageSrc: 'https://picsum.photos/1030/596',
  },
  {
    videoSrc:
      'https://cartel.wiredrive.com/?routekey=iframe-embed&token=234f2dda2110b43e094f19fcde9ad4b0&loop=0&controls=1&color=4EB7D4',
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    imageSrc: 'https://picsum.photos/1030/596',
  },
  {
    videoSrc:
      'https://cartel.wiredrive.com/?routekey=iframe-embed&token=3e2f6c9d1ebdf0816c75a7a52c5fda1c&loop=0&controls=1&color=4EB7D4',
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    imageSrc: 'https://picsum.photos/1030/596',
  },
  {
    videoSrc:
      'https://cartel.wiredrive.com/?routekey=iframe-embed&token=300e1776e61b6928228e78cd005577ac&loop=0&controls=1&color=4EB7D4',
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    imageSrc: 'https://picsum.photos/1030/596',
  },
  {
    videoSrc:
      'https://cartel.wiredrive.com/?routekey=iframe-embed&token=234f2dda2110b43e094f19fcde9ad4b0&loop=0&controls=1&color=4EB7D4',
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    imageSrc: 'https://picsum.photos/1030/596',
  },
  {
    videoSrc:
      'https://cartel.wiredrive.com/?routekey=iframe-embed&token=3e2f6c9d1ebdf0816c75a7a52c5fda1c&loop=0&controls=1&color=4EB7D4',
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    imageSrc: 'https://picsum.photos/1030/596',
  },
];

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Work" />
      <h1 className="visuallyhidden">Work</h1>
      <div className="container">
        <NineGridVideos videosList={recentWorkVideos} />
      </div>
    </Layout>
  );
};

export default IndexPage;
