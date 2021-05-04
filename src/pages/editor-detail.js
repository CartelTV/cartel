import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { EditorGridVideos } from '../components/patterns/editorGridVideos';

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

const EditorDetailPage = () => (
  <Layout>
    <SEO title="Editor Detail" />
    <div className="container">
      <article className="editor-detail__header">
        <h1 className="editor-detail__name">Adam Robinson</h1>
        <ul className="editor-detail__list">
          <li className="editor-detail__item">
            <Link className="editor-detail__link active" to="/editor-detail">
              Main
            </Link>
          </li>
          <li className="editor-detail__item">
            <Link className="editor-detail__link" to="/editor-detail">
              Other Work
            </Link>
          </li>
        </ul>
      </article>
    </div>
    <EditorGridVideos videosList={videosList} />
  </Layout>
);

export default EditorDetailPage;
