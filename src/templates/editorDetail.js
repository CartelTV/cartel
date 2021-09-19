import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import ThreeColGrid from '../components/patterns/threeColGrid';

const EditorDetailPage = ({ data }) => {
  const { title } = data.allWpEditorDetailPage.nodes[0];
  const links = data.allWpEditorDetailPage.nodes[0].editorDetail.editorLinks;
  const videos = data.allWpEditorDetailPage.nodes[0].editorDetail.editorVideos;
  const editorSlug = title
    .replace(/ Main/, '')
    .replace(/\s+/g, '-')
    .replace(/’/g, '')
    .toLowerCase();

  return (
    <Layout>
      <SEO title={title.replace(/Main|Other|Comedy|Music|VR/, '')} />
      <div className="container">
        <article className="editor-detail__header">
          <h1 className="editor-detail__name">
            {title.replace(/Main|Other|Comedy|Music|VR/, '')}
          </h1>
          <ul className="editor-detail__list">
            {links.map(link => (
              <li className="editor-detail__item" key={link.linkTitle}>
                <Link
                  className="editor-detail__link"
                  activeClassName="active"
                  to={link.linkPath}
                >
                  {link.linkTitle}
                </Link>
              </li>
            ))}
          </ul>
        </article>
        <ThreeColGrid list={videos} editorSlug={editorSlug} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    allWpEditorDetailPage(filter: { id: { eq: $id } }) {
      nodes {
        title
        editorDetail {
          editorLinks {
            linkTitle
            linkPath
          }
          editorVideos {
            image {
              altText
              sourceUrl
              title
            }
          }
        }
      }
    }
  }
`;

EditorDetailPage.propTypes = {
  data: PropTypes.shape({
    allWpEditorDetailPage: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          editorDetail: PropTypes.shape({
            editorLinks: PropTypes.arrayOf(
              PropTypes.shape({
                linkPath: PropTypes.string,
                linkTitle: PropTypes.string,
              })
            ),
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
        })
      ),
    }),
  }).isRequired,
};

export default EditorDetailPage;
