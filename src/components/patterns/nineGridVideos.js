import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { Image } from './image';
import GridImage from './gridImage';
import { VideoModal } from './videoModal';

export const NineGridVideos = ({ videosList }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

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

  const handleImageClick = videoData => {
    setModalIsOpen(!modalIsOpen);
    setModalData(videoData);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <Fragment>
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
                    aspectRatio="1600:900"
                    handleImageClick={() => handleImageClick(video[0])}
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
                    handleImageClick={() => handleImageClick(video[1])}
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
                    handleImageClick={() => handleImageClick(video[2])}
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
                  <button
                    type="button"
                    onClick={() => handleImageClick(video[0])}
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
                  </button>
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
                      handleImageClick={() => handleImageClick(video[1])}
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
                      handleImageClick={() => handleImageClick(video[2])}
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
                    aspectRatio="1600:900"
                    handleImageClick={() => handleImageClick(video[0])}
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
                    handleImageClick={() => handleImageClick(video[1])}
                  />
                </div>
              </div>
              <div className="nine-grid-videos__item nine-grid-videos__item--large">
                <button
                  type="button"
                  onClick={() => handleImageClick(video[2])}
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
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <VideoModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        handleModalClose={handleModalClose}
        videoData={modalData}
      />
    </Fragment>
  );
};

NineGridVideos.propTypes = {
  videosList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
