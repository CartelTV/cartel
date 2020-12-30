import React from 'react';
import PropTypes from 'prop-types';

import { Image } from './patterns/image';

export const HomeVideos = ({ sectionHeading, videosList }) => (
  <article className="home-videos">
    <h2 className="home-videos__heading">{sectionHeading}</h2>
    <ul className="home-videos__list">
      {videosList.map(video => (
        <li className="home-videos__item">
          <div className="home-videos__video-wrapper">
            <Image srcSmall={video.thumbnail} alt={video.title} lazyLoad />
          </div>
          <div className="home-videos__text-wrapper">
            <p>{video.editor}</p>
            <p>{video.title}</p>
          </div>
        </li>
      ))}
    </ul>
  </article>
);

HomeVideos.propTypes = {
  sectionHeading: PropTypes.string.isRequired,
  videosList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
