import React from 'react';
import { Link } from 'gatsby';

import { Image } from './image';
import { LinkCalloutArrow } from '../icons/linkCalloutArrow';

export const VideoDetail = () => (
  <article className="video-detail">
    <div className="container">
      <div className="video-detail__video">
        <Image
          srcSmall="https://picsum.photos/id/1011/5472/3648"
          alt="Race Day is Still Sacred"
          lazyLoad
        />
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
        <Link className="video-detail__more-link" to="/">
          <LinkCalloutArrow className="flip" /> <span>View more by Kyle</span>
        </Link>
      </div>
    </div>
  </article>
);
