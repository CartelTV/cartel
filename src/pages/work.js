import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';

import { NineGridVideos } from '../components/patterns/nineGridVideos';

const WorkPage = ({ data }) => {
  const workVideos = data.cartel.page.work.videos;

  return (
    <Layout>
      <SEO title="Work" />
      <h1 className="visuallyhidden">Work</h1>
      <div className="container">
        <NineGridVideos videosList={workVideos} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    cartel {
      page(id: "40", idType: DATABASE_ID) {
        work {
          videos {
            client
            title
            pagePath
            image {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

WorkPage.propTypes = {
  data: PropTypes.shape({
    cartel: PropTypes.shape({
      page: PropTypes.shape({
        work: PropTypes.shape({
          videos: PropTypes.arrayOf(
            PropTypes.shape({
              client: PropTypes.string,
              image: PropTypes.shape({
                altText: PropTypes.string,
                sourceUrl: PropTypes.string,
              }),
              pagePath: PropTypes.string,
              title: PropTypes.string,
            })
          ),
        }),
      }),
    }),
  }).isRequired,
};

export default WorkPage;
