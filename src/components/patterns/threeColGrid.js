import React from 'react';
import PropTypes from 'prop-types';

import GridImage from './gridImage';

const ThreeColGrid = ({ aspectRatio, editorSlug, list }) => (
  <section className="three-col-grid">
    <ul className="three-col-grid__list">
      {list.map(item => {
        const linkUrl = editorSlug
          ? `/${editorSlug.replace(/é/g, 'e')}/${item.colorImage.title
              .replace(/ – /g, '-') // space-space ( - )
              .replace(/\s\/\s/g, '-') // space/space ( / )
              .replace(/\//g, '-') // forward slash (/)
              .replace(/\./g, '') // period (.)
              .replace(/,/g, '') // comma (,)
              .replace(/\*/g, '') // asterisk (*)
              .replace(/\u2026/g, '') // ellipsis (...)
              .replace(/’/g, '') // grammatical apostrophe (’)
              .replace(/‘/g, '') // generic apostrophe (')
              .replace(/:/g, '') // colon (:)
              .replace(/•/g, '-') // mid-dot (•)
              .replace(/\|/g, '') // pipe (|)
              .replace(/&/g, '') // ampersand (&)
              .replace(/\(/g, '') // open parenthesis (()
              .replace(/\)/g, '') // closed parenthesis ())
              .replace(/#/g, '') // pound/hash (#)
              .replace(/\s+/g, '-') // space+ ( +)
              .replace(/ø/g, 'o') // null sign (ø)
              .replace(/\$/g, 's') // dollar sign ($)
              .replace(/é/g, 'e') // accented e (é)
              .replace(/ŏ/g, 'o') // accented o (ŏ)
              .replace(/“/g, '') // dumb quotes (“)
              .replace(/”/g, '') // smart quotes (”)
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
