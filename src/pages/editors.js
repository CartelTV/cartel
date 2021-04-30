import React from 'react';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import EditorsGrid from '../components/patterns/editorsGrid';

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

const VideoDetailPage = () => (
  <Layout>
    <SEO title="Editors" />
    <article className="editors">
      <h2 className="visuallyhidden">Editors</h2>
      <EditorsGrid editorsList={editorsList} />
    </article>
  </Layout>
);

export default VideoDetailPage;
