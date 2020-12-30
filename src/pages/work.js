import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { Image } from '../components/patterns/image';
import { NineGridVideos } from '../components/patterns/nineGridVideos';

import { LinkCalloutArrow } from '../components/icons/linkCalloutArrow';

const videosList = [
  {
    client: 'Uber Eats',
    title: 'Stand Off',
    url: 'https://picsum.photos/id/1016/1200/675',
  },
  {
    client: 'WeTransfer',
    title: 'Doubt, Create, Repeat',
    url: 'https://picsum.photos/id/1018/1200/675',
  },
  {
    client: 'Track Smith',
    title: 'Race Day is Still Sacred',
    url: 'https://picsum.photos/id/1020/1200/675',
  },
  {
    client: 'Uber Eats',
    title: 'Stand Off',
    url: 'https://picsum.photos/id/1022/1200/675',
  },
  {
    client: 'WeTransfer',
    title: 'Doubt, Create, Repeat',
    url: 'https://picsum.photos/id/1024/1200/675',
  },
  {
    client: 'Track Smith',
    title: 'Race Day is Still Sacred',
    url: 'https://picsum.photos/id/1026/1200/675',
  },
  {
    client: 'Uber Eats',
    title: 'Stand Off',
    url: 'https://picsum.photos/id/1028/1200/675',
  },
  {
    client: 'WeTransfer',
    title: 'Doubt, Create, Repeat',
    url: 'https://picsum.photos/id/7/1200/675',
  },
  {
    client: 'Track Smith',
    title: 'Race Day is Still Sacred',
    url: 'https://picsum.photos/id/9/1200/675',
  },
];

const SecondPage = () => (
  <Layout>
    <SEO title="Work" />
    <article className="container container--white">
      <h1 className="h2 page-heading">Work</h1>
      <NineGridVideos videosList={videosList} />
    </article>

    <div className="link-callout">
      <Link className="link-callout__link" to="/work">
        <span>Music Videos</span>
        <LinkCalloutArrow />
      </Link>
    </div>
  </Layout>
);

export default SecondPage;
