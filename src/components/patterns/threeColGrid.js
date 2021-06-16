import React from 'react';
import PropTypes from 'prop-types';

import GridImage from './gridImage';

const ThreeColGrid = ({ aspectRatio, editorSlug, list }) => (
  <section className="three-col-grid">
    <ul className="three-col-grid__list">
      {list.map(item => {
        const linkUrl = editorSlug
          ? `/${editorSlug}/${item.image.title
              .replace(/ – /g, '-')
              .replace(/\//g, '-')
              .replace(/./g, '')
              .replace(/’/g, '')
              .replace(/\s+/g, '-')
              .replace(/ø/g, 'o')
              .toLowerCase()}`
          : item.pagePath;

        return (
          <li className="three-col-grid__item" key={item.image.sourceUrl}>
            <GridImage
              altText={item.image.altText}
              copy={item.image.title || item.title || item.name}
              imgSrc={item.image.sourceUrl}
              linkUrl={linkUrl}
              aspectRatio={aspectRatio}
            />
          </li>
        );
      })}
    </ul>
  </section>
);

ThreeColGrid.propTypes = {
  aspectRatio: PropTypes.string,
  editorSlug: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        altText: PropTypes.string,
        sourceUrl: PropTypes.string,
        title: PropTypes.string,
      }),
      pagePath: PropTypes.string,
    })
  ).isRequired,
};

ThreeColGrid.defaultProps = {
  aspectRatio: '1600:900',
  editorSlug: '',
};

export default ThreeColGrid;
