import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export const VideoDetail = ({ data }) => {
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);
  const editorLink = `/${data.editor
    .replace(' ', '-')
    .replace(/'/g, '')
    .toLowerCase()}`;

  const thumbnail = data?.videoStill?.sourceUrl || data?.colorImage?.sourceUrl;
  const altText = data?.videoStill?.altText || data?.colorImage?.altText;

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
            aria-label="play video"
          >
            <img src={thumbnail} alt={altText} height="422" width="750" />
          </button>
          {videoIsPlaying && (
            <div className="video-detail__video-wrapper iframe-container iframe-container-16x9">
              <iframe
                src={data.videoUrl}
                title={data.title}
                width="1920"
                height="1080"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          )}
        </div>

        <div className="video-detail__text">
          <div className="video-detail__project">
            <h1 className="video-detail__client">
              {data.client || data.artist}
            </h1>
            {data.title && (
              <p className="video-detail__title">
                <strong>{data.title}</strong>
              </p>
            )}
          </div>
          <ul className="video-detail__meta">
            {data.director && (
              <li className="video-detail__meta-item">
                <strong>Director:</strong> {data.director}
              </li>
            )}

            <li className="video-detail__meta-item">
              <strong>Editor:</strong>{' '}
              <Link to={editorLink} className="video-detail__editor-link">
                {data.editor}
              </Link>
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
    artist: PropTypes.string,
    client: PropTypes.string,
    colorImage: PropTypes.shape({
      altText: PropTypes.string,
      sourceUrl: PropTypes.string,
    }),
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
