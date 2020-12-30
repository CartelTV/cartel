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
        console.log('video', video);
        if (index % 2) {
          return (
            <div className="nine-grid-videos__row">
              <div className="nine-grid-videos__item">
                <Link to="/">
                  <Image
                    srcSmall={video[0].url}
                    alt={video[0].title}
                    lazyLoad
                  />
                </Link>
                <p className="nine-grid-videos__text">
                  {video[0].client} : {video[0].title}
                </p>
              </div>
              <div className="nine-grid-videos__item">
                <Link to="/">
                  <Image
                    srcSmall={video[1].url}
                    alt={video[1].title}
                    lazyLoad
                  />
                </Link>
                <p className="nine-grid-videos__text">
                  {video[1].client} : {video[1].title}
                </p>
              </div>
              <div className="nine-grid-videos__item">
                <Link to="/">
                  <Image
                    srcSmall={video[2].url}
                    alt={video[2].title}
                    lazyLoad
                  />
                </Link>
                <p className="nine-grid-videos__text">
                  {video[2].client} : {video[2].title}
                </p>
              </div>
            </div>
          );
        }

        if (index % 4 === 0) {
          return (
            <div className="nine-grid-videos__row">
              <div className="nine-grid-videos__item nine-grid-videos__item--large">
                <Link to="/">
                  <Image
                    srcSmall={video[0].url}
                    alt={video[0].title}
                    lazyLoad
                  />
                </Link>
                <p className="nine-grid-videos__text">
                  {video[0].client} : {video[0].title}
                </p>
              </div>
              <div className="nine-grid-videos__item nine-grid-videos__item--stacked">
                <div>
                  <Link to="/">
                    <Image
                      srcSmall={video[1].url}
                      alt={video[1].title}
                      lazyLoad
                    />
                  </Link>
                  <p className="nine-grid-videos__text">
                    {video[1].client} : {video[1].title}
                  </p>
                </div>{' '}
                <div>
                  <Link to="/">
                    <Image
                      srcSmall={video[2].url}
                      alt={video[2].title}
                      lazyLoad
                    />
                  </Link>
                  <p className="nine-grid-videos__text">
                    {video[2].client} : {video[2].title}
                  </p>
                </div>
              </div>
            </div>
          );
        }

        return (
          <div className="nine-grid-videos__row">
            <div className="nine-grid-videos__item nine-grid-videos__item--stacked">
              <div>
                <Link to="/">
                  <Image
                    srcSmall={video[0].url}
                    alt={video[0].title}
                    lazyLoad
                  />
                </Link>
                <p className="nine-grid-videos__text">
                  {video[0].client} : {video[0].title}
                </p>
              </div>
              <div>
                <Link to="/">
                  <Image
                    srcSmall={video[1].url}
                    alt={video[1].title}
                    lazyLoad
                  />
                </Link>
                <p className="nine-grid-videos__text">
                  {video[1].client} : {video[1].title}
                </p>
              </div>
            </div>
            <div className="nine-grid-videos__item nine-grid-videos__item--large">
              <Link to="/">
                <Image srcSmall={video[2].url} alt={video[2].title} lazyLoad />
              </Link>
              <p className="nine-grid-videos__text">
                {video[2].client} : {video[2].title}
              </p>
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
