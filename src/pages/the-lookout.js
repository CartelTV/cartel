import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import ThreeColGrid from '../components/patterns/threeColGrid';

const TheLookoutPage = ({ data }) => {
  const { lookoutEditors } = data.cartel.page.lookoutPage;
  return (
    <Layout>
      <SEO title="The Lookout" />
      <article className="editors">
        <h1 className="visuallyhidden">Editors</h1>
        <div className="container">
          <ThreeColGrid list={lookoutEditors} aspectRatio="3500:1460" />
        </div>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query {
    cartel {
      page(id: "114", idType: DATABASE_ID) {
        lookoutPage {
          lookoutEditors {
            name
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

TheLookoutPage.propTypes = {
  data: PropTypes.shape({
    cartel: PropTypes.shape({
      page: PropTypes.shape({
        lookoutPage: PropTypes.shape({
          lookoutEditors: PropTypes.arrayOf(
            PropTypes.shape({
              image: PropTypes.shape({
                altText: PropTypes.string,
                sourceUrl: PropTypes.string,
              }),
              name: PropTypes.string,
              pagePath: PropTypes.string,
            })
          ),
        }),
      }),
    }),
  }).isRequired,
};

export default TheLookoutPage;
