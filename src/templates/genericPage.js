/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';

const EditorDetailPage = ({ data, location }) => {
  const { content, title } = data.allWpPage.edges[0].node;

  return (
    <Layout location={location}>
      <SEO title={title} />
      <div className="container">
        <article className="generic-page__content">
          <h1>{title}</h1>

          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    allWpPage(filter: { id: { eq: $id } }) {
      edges {
        node {
          content
          title
        }
      }
    }
  }
`;

EditorDetailPage.propTypes = {
  data: PropTypes.shape({
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            content: PropTypes.string,
            title: PropTypes.string,
          }),
        })
      ),
    }),
  }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default EditorDetailPage;
