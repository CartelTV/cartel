import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Image } from './image';

export const LookoutGridVideos = ({ videosList }) => (
  <div className="lookout-grid-videos">
    <div className="container">
      <ul className="lookout-grid-videos__list">
        {videosList.map(video => (
          <li className="lookout-grid-videos__item">
            <Link to="/video-detail">
              <Image srcSmall={video.url} alt={video.title} lazyLoad />
            </Link>
            <p className="lookout-grid-videos__text">
              <span className="lookout-grid-videos__title">{video.client}</span>{' '}
              {video.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

LookoutGridVideos.propTypes = {
  videosList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
