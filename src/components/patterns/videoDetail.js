import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const VideoDetail = ({ data }) => {
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);

  return (
    <article className="video-detail">
      <div className="container">
        <div className="video-detail__video">
          <button
            className={`video-detail__thumbnail-button ${
              videoIsPlaying ? 'is-playing' : ''
            }`}
            type="button"
            onClick={() => setVideoIsPlaying(true)}
          >
            <img
              src={data.videoStill.sourceUrl}
              alt={data.videoStill.altText}
              height="422"
              width="750"
            />
          </button>
          {videoIsPlaying && (
            <div className="video-detail__video-wrapper iframe-container iframe-container-16x9">
              <iframe
                src={data.videoUrl}
                title="video title"
                width="1920"
                height="1080"
                frameBorder="0"
                webkitAllowFullScreen
                mozAllowFullScreen
                allowFullScreen
                allowTransparency
              />
            </div>
          )}
        </div>

        <div className="video-detail__text">
          <h1 className="video-detail__client">{data.client}</h1>
          <p className="video-detail__project">
            <strong>{data.title}</strong>
          </p>
          <ul className="video-detail__meta">
            {data.director && (
              <li className="video-detail__meta-item">
                <strong>Director:</strong> {data.director}
              </li>
            )}

            <li className="video-detail__meta-item">
              <strong>Editor:</strong> {data.editor}
            </li>

            {data.agency && (
              <li className="video-detail__meta-item">
                <strong>Agency:</strong> {data.agency}
              </li>
            )}

            {data.productionCompany && (
              <li className="video-detail__meta-item">
                <strong>Production Company:</strong> {data.productionCompany}
              </li>
            )}

            <li className="video-detail__meta-item">
              <strong>Duration:</strong> {data.duration}
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

VideoDetail.propTypes = {
  data: PropTypes.shape({
    agency: PropTypes.string,
    client: PropTypes.string,
    director: PropTypes.string,
    duration: PropTypes.string,
    editor: PropTypes.string,
    productionCompany: PropTypes.string,
    title: PropTypes.string,
    videoStill: PropTypes.shape({
      altText: PropTypes.string,
      sourceUrl: PropTypes.string,
    }),
    videoUrl: PropTypes.string,
  }).isRequired,
};
