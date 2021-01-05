import React from 'react';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { EditorGridVideos } from '../components/patterns/editorGridVideos';
import { LinkCallout } from '../components/patterns/linkCallout';

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

const EditorDetailPage = () => (
  <Layout>
    <SEO title="Video Detail" />
    <EditorGridVideos videosList={videosList} />
    <LinkCallout linkPath="/work" linkText="Work" />
  </Layout>
);

export default EditorDetailPage;
