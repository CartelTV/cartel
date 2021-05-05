import React, { useState } from 'react';

import thumbnailImg from '../../images/thumb-apple-test-the-limits.png';

export const VideoDetail = () => {
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
              src={thumbnailImg}
              alt="Apple - Test the Limits"
              height="563"
              width="1000"
            />
          </button>
          {videoIsPlaying && (
            <div className="video-detail__video-wrapper iframe-container iframe-container-16x9">
              <iframe
                src="https://cartel.wiredrive.com/?routekey=iframe-embed&token=2df4f688bf833feddcd1e0f1e4cbe539&autoplay=1&loop=0&controls=1&color=4EB7D4"
                title="video title"
                width="1920"
                height="1080"
                frameBorder="0"
                webkitAllowFullScreen
                mozallowfullscreen
                allowFullScreen
                allowtransparency
              />
            </div>
          )}
        </div>

        <div className="video-detail__text">
          <h1 className="video-detail__client">Apple</h1>
          <p className="video-detail__project">
            <strong>Test the Limits</strong>
          </p>
          <ul className="video-detail__meta">
            <li className="video-detail__meta-item">
              <strong>Director:</strong> Vania and Muggia
            </li>

            <li className="video-detail__meta-item">
              <strong>Editor:</strong> Leo Scott
            </li>

            <li className="video-detail__meta-item">
              <strong>Agency:</strong> Apple
            </li>

            <li className="video-detail__meta-item">
              <strong>Production Company:</strong> Iconoclast
            </li>

            <li className="video-detail__meta-item">
              <strong>Duration:</strong> 01:24
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};
