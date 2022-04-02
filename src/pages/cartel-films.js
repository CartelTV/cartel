import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';

const CartelFilms = ({ data, location }) => {
  const { films } = data.allWpPage.edges[0].node.cartelFilms;

  return (
    <Layout location={location}>
      <SEO title="Cartel Films" />
      <h1 className="visuallyhidden">Work</h1>
      <div className="container">
        <h1>Cartel Films</h1>
        {films.map(film => (
          <div className="film">
            <div className="film__content-wrapper">
              <h2 className="film__title">{film.title}</h2>
              <div
                className="film__description"
                dangerouslySetInnerHTML={{ __html: film.description }}
              />
            </div>
            <div className="film__image-wrapper">
              <img src={film.image.sourceUrl} alt={film.image.altText} />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpPage(filter: { databaseId: { eq: 767 } }) {
      edges {
        node {
          cartelFilms {
            films {
              title
              description
              image {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;

CartelFilms.propTypes = {
  data: PropTypes.shape({
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            cartelFilms: PropTypes.shape({
              films: {
                title: PropTypes.string,
                description: PropTypes.string,
                image: PropTypes.shape({}),
              },
            }),
          }),
        })
      ),
    }),
  }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default CartelFilms;
