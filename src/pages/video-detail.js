import React from 'react';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { VideoDetail } from '../components/patterns/videoDetail';

const VideoDetailPage = () => (
  <Layout>
    <SEO title="Video Detail" />
    <VideoDetail />
  </Layout>
);

export default VideoDetailPage;
