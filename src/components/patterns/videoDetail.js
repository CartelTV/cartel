import React from 'react';
import { Link } from 'gatsby';

import { LinkCalloutArrow } from '../icons/linkCalloutArrow';

export const VideoDetail = () => (
  <article className="video-detail">
    <div className="container">
      <div className="video-detail__video">
        <div className="iframe-container iframe-container-16x9">
          <iframe
            src="https://cartel.wiredrive.com/?routekey=iframe-embed&token=300e1776e61b6928228e78cd005577ac&loop=0&controls=1&color=4EB7D4&autoplay=0"
            title="video title"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
      <div className="video-detail__text">
        <div className="video-detail__meta">
          <dl className="video-detail__meta-group">
            <dt className="video-detail__meta-heading">Client</dt>
            <dd className="video-detail__meta-content video-detail__meta-title">
              Track Smith
            </dd>
          </dl>
          <dl className="video-detail__meta-group">
            <dt className="video-detail__meta-heading">Project</dt>
            <dd className="video-detail__meta-content">
              Race Day is Still Sacred
            </dd>
          </dl>
          <dl className="video-detail__meta-group">
            <dt className="video-detail__meta-heading">Credits</dt>
            <dd className="video-detail__meta-content">
              Director - Emily Maye
              <br />
              Editor - Kyle Valenta
              <br />
              Production Co - Farm League
              <br />
              Duration - 01:30
            </dd>
          </dl>
        </div>
        <Link className="video-detail__more-link" to="/editor-detail">
          <LinkCalloutArrow className="flip" /> <span>View more by Kyle</span>
        </Link>
      </div>
    </div>
  </article>
);
