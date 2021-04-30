import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Image } from './image';

export const NineGridVideos = ({ videosList }) => {
  const chunk = 3;
  const videos = videosList;
  const chunks = videos.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunk);

    if (!resultArray[chunkIndex]) {
      /* eslint-disable-next-line */
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <div className="nine-grid-videos">
      {chunks.map((video, index) => {
        if (index % 2) {
          return (
            <div
              className="nine-grid-videos__row nine-grid-videos__row--two"
              key={video[0].imageSrc}
            >
              <div className="nine-grid-videos__item">
                <Link to="/video-detail" className="nine-grid-videos__link">
                  <Image
                    srcSmall={video[0].imageSrc}
                    alt={video[0].title}
                    lazyLoad
                  />
                  <div className="nine-grid-videos__item-overlay">
                    <p className="nine-grid-videos__text">
                      {video[0].client} - {video[0].title}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="nine-grid-videos__item">
                <Link to="/video-detail" className="nine-grid-videos__link">
                  <Image
                    srcSmall={video[1].imageSrc}
                    alt={video[1].title}
                    lazyLoad
                  />
                  <div className="nine-grid-videos__item-overlay">
                    <p className="nine-grid-videos__text">
                      {video[1].client} - {video[1].title}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="nine-grid-videos__item">
                <Link to="/video-detail" className="nine-grid-videos__link">
                  <Image
                    srcSmall={video[2].imageSrc}
                    alt={video[2].title}
                    lazyLoad
                  />
                  <div className="nine-grid-videos__item-overlay">
                    <p className="nine-grid-videos__text">
                      {video[2].client} - {video[2].title}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          );
        }

        if (index % 4 === 0) {
          return (
            <div
              className="nine-grid-videos__row nine-grid-videos__row--one"
              key={video[1].imageSrc}
            >
              <div className="nine-grid-videos__item nine-grid-videos__item--large">
                <Link to="/video-detail" className="nine-grid-videos__link">
                  <Image
                    srcSmall={video[0].imageSrc}
                    alt={video[0].title}
                    aspectRatio="2400:1350"
                    lazyLoad
                  />
                  <div className="nine-grid-videos__item-overlay">
                    <p className="nine-grid-videos__text">
                      <span className="nine-grid-videos__text-client">
                        {video[0].client}
                      </span>
                      <br />
                      {video[0].title}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="nine-grid-videos__item nine-grid-videos__item--stacked">
                <div>
                  <Link to="/video-detail" className="nine-grid-videos__link">
                    <Image
                      srcSmall={video[1].imageSrc}
                      alt={video[1].title}
                      aspectRatio="2400:1350"
                      lazyLoad
                    />
                    <div className="nine-grid-videos__item-overlay">
                      <p className="nine-grid-videos__text">
                        {video[1].client} - {video[1].title}
                      </p>
                    </div>
                  </Link>
                </div>{' '}
                <div>
                  <Link to="/video-detail" className="nine-grid-videos__link">
                    <Image
                      srcSmall={video[2].imageSrc}
                      alt={video[2].title}
                      aspectRatio="2400:1350"
                      lazyLoad
                    />
                    <div className="nine-grid-videos__item-overlay">
                      <p className="nine-grid-videos__text">
                        {video[2].client} - {video[2].title}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          );
        }

        return (
          <div
            className="nine-grid-videos__row nine-grid-videos__row--three"
            key={video[2].imageSrc}
          >
            <div className="nine-grid-videos__item nine-grid-videos__item--stacked">
              <div>
                <Link to="/video-detail" className="nine-grid-videos__link">
                  <Image
                    srcSmall={video[0].imageSrc}
                    alt={video[0].title}
                    aspectRatio="2400:1350"
                    lazyLoad
                  />
                  <div className="nine-grid-videos__item-overlay">
                    <p className="nine-grid-videos__text">
                      {video[0].client} - {video[0].title}
                    </p>
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/video-detail" className="nine-grid-videos__link">
                  <Image
                    srcSmall={video[1].imageSrc}
                    alt={video[1].title}
                    aspectRatio="2400:1350"
                    lazyLoad
                  />
                  <div className="nine-grid-videos__item-overlay">
                    <p className="nine-grid-videos__text">
                      {video[1].client} - {video[1].title}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="nine-grid-videos__item nine-grid-videos__item--large">
              <Link to="/video-detail" className="nine-grid-videos__link">
                <Image
                  srcSmall={video[2].imageSrc}
                  alt={video[2].title}
                  aspectRatio="2400:1350"
                  lazyLoad
                />
                <div className="nine-grid-videos__item-overlay">
                  <p className="nine-grid-videos__text">
                    <span className="nine-grid-videos__text-client">
                      {video[2].client}
                    </span>
                    <br />
                    {video[2].title}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

NineGridVideos.propTypes = {
  videosList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
