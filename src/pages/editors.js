import React from 'react';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import ThreeColGrid from '../components/patterns/threeColGrid';

const editorsList = [
  {
    imageSrc: 'https://picsum.photos/1060/442',
    name: 'Andy McGraw',
    url: '/editor-detail',
  },
  {
    imageSrc: 'https://picsum.photos/1060/442',
    name: 'Andy McGraw',
    url: '/editor-detail',
  },
  {
    imageSrc: 'https://picsum.photos/1060/442',
    name: 'Andy McGraw',
    url: '/editor-detail',
  },
  {
    imageSrc: 'https://picsum.photos/1060/442',
    name: 'Andy McGraw',
    url: '/editor-detail',
  },
  {
    imageSrc: 'https://picsum.photos/1060/442',
    name: 'Andy McGraw',
    url: '/editor-detail',
  },
  {
    imageSrc: 'https://picsum.photos/1060/442',
    name: 'Andy McGraw',
    url: '/editor-detail',
  },
  {
    imageSrc: 'https://picsum.photos/1060/442',
    name: 'Andy McGraw',
    url: '/editor-detail',
  },
  {
    imageSrc: 'https://picsum.photos/1060/442',
    name: 'Andy McGraw',
    url: '/editor-detail',
  },
  {
    imageSrc: 'https://picsum.photos/1060/442',
    name: 'Andy McGraw',
    url: '/editor-detail',
  },
];

const EditorsPage = () => (
  <Layout>
    <SEO title="Editors" />
    <article className="editors">
      <h1 className="visuallyhidden">Editors</h1>
      <div className="container">
        <ThreeColGrid list={editorsList} aspectRatio="3500:1460" />
      </div>
    </article>
  </Layout>
);

export default EditorsPage;
