import React from 'react';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { LinkCallout } from '../components/patterns/linkCallout';
import { VideoDetail } from '../components/patterns/videoDetail';

const VideoDetailPage = () => (
  <Layout>
    <SEO title="Video Detail" />
    <VideoDetail />
    <LinkCallout linkPath="/work" linkText="Work" />
  </Layout>
);

export default VideoDetailPage;
