import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Image } from './image';
import GridImage from './gridImage';

export const NineGridVideos = ({ location, videosList }) => {
  const chunk = 3;
  const videos = videosList;
  console.log('videos:', videos);
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
    <Fragment>
      <div className="nine-grid-videos">
        {chunks.map((video, index) => {
          // middle row
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
                    aspectRatio="1600:900"
                    linkUrl={`${location.pathname}/${
                      video[0].pagePath.split('/')[2]
                    }`}
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
                    aspectRatio="1600:900"
                    linkUrl={`${location.pathname}/${
                      video[1].pagePath.split('/')[2]
                    }`}
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
                    aspectRatio="1600:900"
                    linkUrl={`${location.pathname}/${
                      video[2].pagePath.split('/')[2]
                    }`}
                  />
                </div>
              </div>
            );
          }

          // top row
          if (index % 4 === 0) {
            return (
              <div
                className="nine-grid-videos__row nine-grid-videos__row--one"
                key={video[1].colorImage.sourceUrl}
              >
                <div className="nine-grid-videos__item nine-grid-videos__item--large">
                  <Link
                    to={`${location.pathname}/${
                      video[0].pagePath.split('/')[2]
                    }`}
                    className="nine-grid-videos__link"
                  >
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
                      aspectRatio="1600:900"
                      linkUrl={`${location.pathname}/${
                        video[1].pagePath.split('/')[2]
                      }`}
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
                      aspectRatio="1600:900"
                      linkUrl={`${location.pathname}/${
                        video[2].pagePath.split('/')[2]
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          }

          // bottom row
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
                    aspectRatio="1600:900"
                    linkUrl={`${location.pathname}/${
                      video[0].pagePath.split('/')[2]
                    }`}
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
                    aspectRatio="1600:900"
                    linkUrl={`${location.pathname}/${
                      video[1].pagePath.split('/')[2]
                    }`}
                  />
                </div>
              </div>
              <div className="nine-grid-videos__item nine-grid-videos__item--large">
                <Link
                  to={`${location.pathname}/${video[2].pagePath.split('/')[2]}`}
                  className="nine-grid-videos__link"
                >
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
    </Fragment>
  );
};

NineGridVideos.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
  videosList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
