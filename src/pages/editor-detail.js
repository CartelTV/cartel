import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import ThreeColGrid from '../components/patterns/threeColGrid';

const videosList = [
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Andy McGraw',
      sourceUrl: 'https://picsum.photos/1600/900',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Andy McGraw',
      sourceUrl: 'https://picsum.photos/1600/900',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Andy McGraw',
      sourceUrl: 'https://picsum.photos/1600/900',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Andy McGraw',
      sourceUrl: 'https://picsum.photos/1600/900',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Andy McGraw',
      sourceUrl: 'https://picsum.photos/1600/900',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Andy McGraw',
      sourceUrl: 'https://picsum.photos/1600/900',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Andy McGraw',
      sourceUrl: 'https://picsum.photos/1600/900',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Andy McGraw',
      sourceUrl: 'https://picsum.photos/1600/900',
    },
    pagePath: '/video-detail',
  },
  {
    title: 'Race Day is Still Sacred',
    client: 'Track Smith',
    image: {
      altText: 'Andy McGraw',
      sourceUrl: 'https://picsum.photos/1600/900',
    },
    pagePath: '/video-detail',
  },
];

const EditorDetailPage = () => (
  <Layout>
    <SEO title="Editor Detail" />
    <div className="container">
      <article className="editor-detail__header">
        <h1 className="editor-detail__name">Adam Robinson</h1>
        <ul className="editor-detail__list">
          <li className="editor-detail__item">
            <Link
              className="editor-detail__link"
              activeClassName="active"
              to="/editor-detail"
            >
              Main
            </Link>
          </li>
          <li className="editor-detail__item">
            <Link
              className="editor-detail__link"
              activeClassName="active"
              to="/editor-detail-other"
            >
              Other Work
            </Link>
          </li>
        </ul>
      </article>
      <ThreeColGrid list={videosList} />
    </div>
  </Layout>
);

export default EditorDetailPage;
