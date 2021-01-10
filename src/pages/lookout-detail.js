import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { LookoutGridVideos } from '../components/patterns/lookoutGridVideos';
import { Image } from '../components/patterns/image';

import bioCard692 from '../images/lookout-editor-bio-card-mobile.jpg';
import bioCard1088 from '../images/lookout-editor-bio-card.jpg';
import bioCard2176 from '../images/lookout-editor-bio-card@2x.jpg';

const videosList = [
  {
    client: 'Uber Eats',
    title: 'Stand Off',
    url: 'https://picsum.photos/id/1016/1920/1080',
  },
  {
    client: 'WeTransfer',
    title: 'Doubt, Create, Repeat',
    url: 'https://picsum.photos/id/1018/1920/1080',
  },
  {
    client: 'Track Smith',
    title: 'Race Day is Still Sacred',
    url: 'https://picsum.photos/id/1020/1920/1080',
  },
  {
    client: 'Uber Eats',
    title: 'Stand Off',
    url: 'https://picsum.photos/id/1022/1920/1080',
  },
  {
    client: 'WeTransfer',
    title: 'Doubt, Create, Repeat',
    url: 'https://picsum.photos/id/1024/1920/1080',
  },
  {
    client: 'Track Smith',
    title: 'Race Day is Still Sacred',
    url: 'https://picsum.photos/id/1026/1920/1080',
  },
  {
    client: 'Uber Eats',
    title: 'Stand Off',
    url: 'https://picsum.photos/id/1028/1920/1080',
  },
  {
    client: 'WeTransfer',
    title: 'Doubt, Create, Repeat',
    url: 'https://picsum.photos/id/7/1920/1080',
  },
  {
    client: 'Track Smith',
    title: 'Race Day is Still Sacred',
    url: 'https://picsum.photos/id/9/1920/1080',
  },
];

const LookoutDetailPage = () => (
  <Layout>
    <SEO title="Adam Robinson" />
    <article className="editor-detail__header editor-detail__header--lookout">
      <h2 className="editor-detail__name editor-detail__name--lookout">
        Adam Robinson
      </h2>
      <ul className="editor-detail__list">
        <li className="editor-detail__item">
          <Link
            className="editor-detail__link editor-detail__link--lookout active"
            to="/"
          >
            Main
          </Link>
        </li>
        <li className="editor-detail__item">
          <Link
            className="editor-detail__link editor-detail__link--lookout"
            to="/"
          >
            Comedy
          </Link>
        </li>
        <li className="editor-detail__item">
          <Link
            className="editor-detail__link editor-detail__link--lookout"
            to="/"
          >
            Other
          </Link>
        </li>
      </ul>
    </article>
    <LookoutGridVideos videosList={videosList} />

    <article className="lookout__bio-card-wrapper">
      <Image
        className="lookout__bio-card"
        srcSmall={bioCard692}
        srcMed={bioCard1088}
        srcLarge={bioCard2176}
        alt="bio card for Adam Robinson"
        lazyLoad
      />
    </article>
  </Layout>
);

export default LookoutDetailPage;
