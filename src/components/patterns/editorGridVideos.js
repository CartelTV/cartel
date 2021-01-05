import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Image } from './image';

export const EditorGridVideos = ({ videosList }) => (
  <div className="editor-grid-videos">
    <div className="container">
      <ul>
        {videosList.map(video => (
          <li className="editor-grid-videos__item">
            <Link to="/">
              <Image srcSmall={video.url} alt={video.title} lazyLoad />
            </Link>
            <p className="editor-grid-videos__text">
              <span className="editor-grid-videos__title">{video.client}</span>{' '}
              {video.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

EditorGridVideos.propTypes = {
  videosList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
