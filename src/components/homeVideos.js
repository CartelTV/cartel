import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Image } from './patterns/image';

import cartelMarkLogo from '../images/cartel-logo.png';

export const HomeVideos = ({ sectionHeading, videosList }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const thumbnailClick = index => {
    setActiveIndex(index);
  };

  return (
    <article className="home-videos">
      <div className="home-videos__heading-wrapper">
        <h2 className="home-videos__heading">{sectionHeading}</h2>
      </div>
      <ul className="home-videos__list">
        {videosList.map((video, index) => (
          <li className="home-videos__item" key={video.videoSrc}>
            <div className="home-videos__video-wrapper">
              <div className="iframe-container iframe-container-16x9">
                <iframe
                  src={`${video.videoSrc}${
                    activeIndex === index ? '&autoplay=1' : ''
                  }`}
                  title={video.title}
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
              <button
                className="home-videos__button"
                type="button"
                onClick={() => thumbnailClick(index)}
              >
                <Image
                  className={`home-videos__thumbnail ${
                    activeIndex === index ? 'play-video' : ''
                  }`}
                  srcSmall={video.imageSrc}
                  alt="Race Day is Still Sacred"
                  lazyLoad
                />
                <img
                  className="home-videos__thumbnail-icon"
                  src={cartelMarkLogo}
                  alt=""
                />
              </button>
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
};

HomeVideos.propTypes = {
  sectionHeading: PropTypes.string.isRequired,
  videosList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
