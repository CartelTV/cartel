import React from 'react';
import PropTypes from 'prop-types';

import GridImage from './gridImage';

const ThreeColGrid = ({ aspectRatio, list }) => (
  <section className="three-col-grid">
    <ul className="three-col-grid__list">
      {list.map(item => (
        <li className="three-col-grid__item" key={item.title || item.name}>
          <GridImage
            altText={item.image.altText}
            copy={
              ((item.client || item.artist) &&
                `${item.client || item.artist} - ${item.title}`) ||
              item.title ||
              item.name
            }
            imgSrc={item.image.sourceUrl}
            linkUrl={item.pagePath}
            aspectRatio={aspectRatio}
          />
        </li>
      ))}
    </ul>
  </section>
);

ThreeColGrid.propTypes = {
  aspectRatio: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      client: PropTypes.string,
      image: PropTypes.shape({
        altText: PropTypes.string,
        sourceUrl: PropTypes.string,
      }),
      name: PropTypes.string,
      title: PropTypes.string,
      pagePath: PropTypes.string,
    })
  ).isRequired,
};

ThreeColGrid.defaultProps = {
  aspectRatio: '1600:900',
};

export default ThreeColGrid;
