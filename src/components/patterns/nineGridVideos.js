import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Image } from './image';
import GridImage from './gridImage';

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
              key={video[0].colorImage.sourceUrl}
            >
              <div className="nine-grid-videos__item">
                <GridImage
                  altText={video[0].colorImage.altText}
                  copy={`${video[0].client || video[0].artist} - ${
                    video[0].title
                  }`}
                  imgSrc={video[0].colorImage.sourceUrl}
                  imgSrcBW={video[0].bwImage.sourceUrl}
                  linkUrl={video[0].pagePath}
                  aspectRatio="1600:900"
                />
              </div>
              <div className="nine-grid-videos__item">
                <GridImage
                  altText={video[1].colorImage.altText}
                  copy={`${video[1].client || video[1].artist} - ${
                    video[1].title
                  }`}
                  imgSrc={video[1].colorImage.sourceUrl}
                  imgSrcBW={video[1].bwImage.sourceUrl}
                  linkUrl={video[1].pagePath}
                  aspectRatio="1600:900"
                />
              </div>
              <div className="nine-grid-videos__item">
                <GridImage
                  altText={video[2].colorImage.altText}
                  copy={`${video[2].client || video[2].artist} - ${
                    video[2].title
                  }`}
                  imgSrc={video[2].colorImage.sourceUrl}
                  imgSrcBW={video[2].bwImage.sourceUrl}
                  linkUrl={video[2].pagePath}
                  aspectRatio="1600:900"
                />
              </div>
            </div>
          );
        }

        if (index % 4 === 0) {
          return (
            <div
              className="nine-grid-videos__row nine-grid-videos__row--one"
              key={video[1].colorImage.sourceUrl}
            >
              <div className="nine-grid-videos__item nine-grid-videos__item--large">
                <Link to={video[0].pagePath} className="nine-grid-videos__link">
                  <Image
                    srcSmall={video[0].colorImage.sourceUrl}
                    alt={video[0].colorImage.altText}
                    aspectRatio="1600:900"
                    lazyLoad
                  />
                  <Image
                    className="bw-image"
                    srcSmall={video[0].bwImage.sourceUrl}
                    alt={video[0].colorImage.altText}
                    aspectRatio="1600:900"
                    lazyLoad
                  />
                  <div className="nine-grid-videos__item-overlay">
                    <p className="nine-grid-videos__text">
                      <span className="nine-grid-videos__text-client">
                        {video[0].client || video[0].artist}
                      </span>
                      <br />
                      {video[0].title}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="nine-grid-videos__item nine-grid-videos__item--stacked">
                <div>
                  <GridImage
                    altText={video[1].colorImage.altText}
                    copy={`${video[1].client || video[1].artist} - ${
                      video[1].title
                    }`}
                    imgSrc={video[1].colorImage.sourceUrl}
                    imgSrcBW={video[1].bwImage.sourceUrl}
                    linkUrl={video[1].pagePath}
                    aspectRatio="1600:900"
                  />
                </div>
                <div>
                  <GridImage
                    altText={video[2].colorImage.altText}
                    copy={`${video[2].client || video[2].artist} - ${
                      video[2].title
                    }`}
                    imgSrc={video[2].colorImage.sourceUrl}
                    imgSrcBW={video[2].bwImage.sourceUrl}
                    linkUrl={video[2].pagePath}
                    aspectRatio="1600:900"
                  />
                </div>
              </div>
            </div>
          );
        }

        return (
          <div
            className="nine-grid-videos__row nine-grid-videos__row--three"
            key={video[2].colorImage.sourceUrl}
          >
            <div className="nine-grid-videos__item nine-grid-videos__item--stacked">
              <div>
                <GridImage
                  altText={video[0].colorImage.altText}
                  copy={`${video[0].client || video[0].artist} - ${
                    video[0].title
                  }`}
                  imgSrc={video[0].colorImage.sourceUrl}
                  imgSrcBW={video[0].bwImage.sourceUrl}
                  linkUrl={video[0].pagePath}
                  aspectRatio="1600:900"
                />
              </div>
              <div>
                <GridImage
                  altText={video[1].colorImage.altText}
                  copy={`${video[1].client || video[1].artist} - ${
                    video[1].title
                  }`}
                  imgSrc={video[1].colorImage.sourceUrl}
                  imgSrcBW={video[1].bwImage.sourceUrl}
                  linkUrl={video[1].pagePath}
                  aspectRatio="1600:900"
                />
              </div>
            </div>
            <div className="nine-grid-videos__item nine-grid-videos__item--large">
              <Link to={video[2].pagePath} className="nine-grid-videos__link">
                <Image
                  srcSmall={video[2].colorImage.sourceUrl}
                  alt={video[2].colorImage.altText}
                  aspectRatio="1600:900"
                  lazyLoad
                />
                <Image
                  className="bw-image"
                  srcSmall={video[2].bwImage.sourceUrl}
                  alt={video[2].colorImage.altText}
                  aspectRatio="1600:900"
                  lazyLoad
                />
                <div className="nine-grid-videos__item-overlay">
                  <p className="nine-grid-videos__text">
                    <span className="nine-grid-videos__text-client">
                      {video[2].client || video[2].artist}
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
