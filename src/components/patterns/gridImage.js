import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Image } from './image';

const GridImage = ({ altText, aspectRatio, copy, imgSrc, linkUrl }) => (
  <Link to={linkUrl} className="grid-image__link">
    <Image srcSmall={imgSrc} alt={altText} aspectRatio={aspectRatio} lazyLoad />
    <div className="grid-image__item-overlay">
      <p className="grid-image__text">{copy}</p>
    </div>
  </Link>
);

GridImage.propTypes = {
  altText: PropTypes.string.isRequired,
  aspectRatio: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default GridImage;