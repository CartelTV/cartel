import React from 'react';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import ThreeColGrid from '../components/patterns/threeColGrid';

const editorsList = [
  {
    image: {
      altText: 'Andy McGraw',
      sourceUrl: 'https://picsum.photos/1060/442',
    },
    name: 'Andy McGraw',
    pathPath: '/editor-detail',
  },
  {
    image: {
      altText: 'Andy McGraw',
      sourceUrl: 'https://picsum.photos/1060/442',
    },
    name: 'Andy McGraw',
    pathPath: '/editor-detail',
  },
  {
    image: {
      altText: 'Andy McGraw',
      sourceUrl: 'https://picsum.photos/1060/442',
    },
    name: 'Andy McGraw',
    pathPath: '/editor-detail',
  },
  {
    image: {
      altText: 'Andy McGraw',
      sourceUrl: 'https://picsum.photos/1060/442',
    },
    name: 'Andy McGraw',
    pathPath: '/editor-detail',
  },
  {
    image: {
      altText: 'Andy McGraw',
      sourceUrl: 'https://picsum.photos/1060/442',
    },
    name: 'Andy McGraw',
    pathPath: '/editor-detail',
  },
  {
    image: {
      altText: 'Andy McGraw',
      sourceUrl: 'https://picsum.photos/1060/442',
    },
    name: 'Andy McGraw',
    pathPath: '/editor-detail',
  },
  {
    image: {
      altText: 'Andy McGraw',
      sourceUrl: 'https://picsum.photos/1060/442',
    },
    name: 'Andy McGraw',
    pathPath: '/editor-detail',
  },
  {
    image: {
      altText: 'Andy McGraw',
      sourceUrl: 'https://picsum.photos/1060/442',
    },
    name: 'Andy McGraw',
    pathPath: '/editor-detail',
  },
  {
    image: {
      altText: 'Andy McGraw',
      sourceUrl: 'https://picsum.photos/1060/442',
    },
    name: 'Andy McGraw',
    pathPath: '/editor-detail',
  },
];

const TheLookoutPage = () => (
  <Layout>
    <SEO title="The Lookout" />
    <article className="editors">
      <h1 className="visuallyhidden">Editors</h1>
      <div className="container">
        <ThreeColGrid list={editorsList} aspectRatio="3500:1460" />
      </div>
    </article>
  </Layout>
);

export default TheLookoutPage;
