import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Image } from './image';

const GridImage = ({ altText, copy, imgSrc, linkUrl }) => (
  <Link to={linkUrl} className="grid-image__link">
    <Image srcSmall={imgSrc} alt={altText} lazyLoad />
    <div className="grid-image__item-overlay">
      <p className="grid-image__text">{copy}</p>
    </div>
  </Link>
);

GridImage.propTypes = {
  altText: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default GridImage;
