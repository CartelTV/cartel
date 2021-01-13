import React from 'react';
import PropTypes from 'prop-types';

export const Image = ({
  className,
  srcSmall,
  srcMed,
  srcLarge,
  alt,
  aspectRatio,
  lazyLoad,
}) => {
  const height = aspectRatio.split(':')[1];
  const width = aspectRatio.split(':')[0];
  return (
    <picture>
      <source srcSet={srcLarge} media="(min-width: 1200px)" />
      <source srcSet={srcMed} media="(min-width: 720px)" />
      <img
        className={className}
        src={srcSmall}
        alt={alt}
        height={height}
        width={width}
        loading={`${lazyLoad ? 'lazy' : 'eager'}`}
      />
    </picture>
  );
};

Image.propTypes = {
  aspectRatio: PropTypes.string,
  className: PropTypes.string,
  srcSmall: PropTypes.string.isRequired,
  srcMed: PropTypes.string,
  srcLarge: PropTypes.string,
  alt: PropTypes.string.isRequired,
  lazyLoad: PropTypes.bool,
};

Image.defaultProps = {
  aspectRatio: '',
  className: '',
  lazyLoad: false,
  srcMed: '',
  srcLarge: '',
};
