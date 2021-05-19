import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import ThreeColGrid from '../components/patterns/threeColGrid';

const EditorDetailPage = ({ data }) => {
  const { slug, title } = data.cartel.editorDetailPage;
  const videos = data.cartel.editorDetailPage.editorDetail.editorVideos;

  return (
    <Layout>
      <SEO title="Editor Detail" />
      <div className="container">
        <article className="editor-detail__header">
          <h1 className="editor-detail__name">{title.replace('Other', '')}</h1>
          <ul className="editor-detail__list">
            <li className="editor-detail__item">
              <Link
                className="editor-detail__link"
                activeClassName="active"
                to={
                  !slug.includes('other')
                    ? `/${slug}`
                    : `/${slug.replace('-other', '')}`
                }
              >
                Main
              </Link>
            </li>
            <li className="editor-detail__item">
              <Link
                className="editor-detail__link"
                activeClassName={slug.includes('other') ? 'active' : null}
                to={slug.includes('other') ? `/${slug}` : `/${slug}-other`}
              >
                Other Work
              </Link>
            </li>
          </ul>
        </article>
        <ThreeColGrid list={videos} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: ID!) {
    cartel {
      editorDetailPage(id: $id) {
        slug
        title
        editorDetail {
          editorVideos {
            pagePath
            client
            title
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

EditorDetailPage.propTypes = {
  data: PropTypes.shape({
    cartel: PropTypes.shape({
      editorDetailPage: PropTypes.shape({
        slug: PropTypes.string,
        title: PropTypes.string,
        editorDetail: PropTypes.shape({
          editorVideos: PropTypes.arrayOf(
            PropTypes.shape({
              videoThumbnail: PropTypes.shape({
                altText: PropTypes.string,
                sourceUrl: PropTypes.string,
              }),
              videoClient: PropTypes.string,
              videoTitle: PropTypes.string,
              videoDetailPageUrl: PropTypes.string,
            })
          ),
        }),
      }),
    }),
  }).isRequired,
};

export default EditorDetailPage;
