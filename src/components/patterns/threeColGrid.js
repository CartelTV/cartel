import React from 'react';
import PropTypes from 'prop-types';

import GridImage from './gridImage';

const ThreeColGrid = ({ aspectRatio, list }) => (
  <section className="three-col-grid">
    <ul className="three-col-grid__list">
      {list.map(item => (
        <li className="three-col-grid__item" key={item.title || item.name}>
          <GridImage
            altText={item.title || item.name}
            copy={item.title || item.name}
            imgSrc={item.imageSrc}
            linkUrl={item.url}
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
      imageSrc: PropTypes.string,
      name: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
};

ThreeColGrid.defaultProps = {
  aspectRatio: '1600:900',
};

export default ThreeColGrid;
