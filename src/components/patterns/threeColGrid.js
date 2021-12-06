import React from 'react';
import PropTypes from 'prop-types';

import GridImage from './gridImage';

const ThreeColGrid = ({ aspectRatio, editorSlug, list }) => (
  <section className="three-col-grid">
    <ul className="three-col-grid__list">
      {list.map(item => {
        const linkUrl = editorSlug
          ? `/${editorSlug.replace(/é/g, 'e')}/${item.colorImage.title
              .replace(/ – /g, '-')
              .replace(/\s\/\s/g, '-')
              .replace(/\//g, '-')
              .replace(/\./g, '')
              .replace(/\u2026/g, '')
              .replace(/’/g, '')
              .replace(/‘/g, '')
              .replace(/:/g, '')
              .replace(/•/g, '-')
              .replace(/\|/g, '')
              .replace(/&/g, '')
              .replace(/\(/g, '')
              .replace(/\)/g, '')
              .replace(/#/g, '')
              .replace(/\s+/g, '-')
              .replace(/ø/g, 'o')
              .replace(/\$/g, 's')
              .replace(/é/g, 'e')
              .replace(/ŏ/g, 'o')
              .toLowerCase()}`
          : item.pagePath;

        return (
          <li className="three-col-grid__item" key={item.colorImage.sourceUrl}>
            <GridImage
              altText={item.colorImage.altText}
              copy={item.colorImage.title || item.title || item.name}
              imgSrc={item.colorImage.sourceUrl}
              imgSrcBW={item.bwImage && item.bwImage.sourceUrl}
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
      colorImage: PropTypes.shape({
        altText: PropTypes.string,
        sourceUrl: PropTypes.string,
        title: PropTypes.string,
      }),
      bwImage: PropTypes.shape({
        sourceUrl: PropTypes.string,
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
