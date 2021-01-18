import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { Image } from '../components/patterns/image';
import { LinkCallout } from '../components/patterns/linkCallout';

const VideoDetailPage = () => (
  <Layout>
    <SEO title="Editors" />
    <article className="editors">
      <h2 className="editors__heading">Editors</h2>
      <ul className="editors__list">
        <li className="editors__item">
          <Link className="editors__link" to="/editor-detail">
            Adam Robinson
          </Link>
          <Image
            className="editors__image"
            srcSmall="https://picsum.photos/300/179"
            alt=""
            aspectRatio="600:360"
          />
        </li>
        <li className="editors__item">
          <Link className="editors__link" to="/editor-detail">
            Andy McGraw
          </Link>
          <Image
            className="editors__image"
            srcSmall="https://picsum.photos/300/179"
            alt=""
            aspectRatio="600:360"
          />
        </li>
        <li className="editors__item">
          <Link className="editors__link" to="/editor-detail">
            Chris Catanach
          </Link>
          <Image
            className="editors__image"
            srcSmall="https://picsum.photos/300/179"
            alt=""
            aspectRatio="600:360"
          />
        </li>
        <li className="editors__item">
          <Link className="editors__link" to="/editor-detail">
            Ellie Johnson
          </Link>
          <Image
            className="editors__image"
            srcSmall="https://picsum.photos/300/179"
            alt=""
            aspectRatio="600:360"
          />
        </li>
        <li className="editors__item">
          <Link className="editors__link" to="/editor-detail">
            Ernie Gilbert
          </Link>
          <Image
            className="editors__image"
            srcSmall="https://picsum.photos/300/179"
            alt=""
            aspectRatio="600:360"
          />
        </li>
        <li className="editors__item">
          <Link className="editors__link" to="/editor-detail">
            Kevin Zimmerman
          </Link>
          <Image
            className="editors__image"
            srcSmall="https://picsum.photos/300/179"
            alt=""
            aspectRatio="600:360"
          />
        </li>
        <li className="editors__item">
          <Link className="editors__link" to="/editor-detail">
            Kyle Valenta
          </Link>
          <Image
            className="editors__image"
            srcSmall="https://picsum.photos/300/179"
            alt=""
            aspectRatio="600:360"
          />
        </li>
        <li className="editors__item">
          <Link className="editors__link" to="/editor-detail">
            Leo Scott
          </Link>
          <Image
            className="editors__image"
            srcSmall="https://picsum.photos/300/179"
            alt=""
            aspectRatio="600:360"
          />
        </li>
        <li className="editors__item">
          <Link className="editors__link" to="/editor-detail">
            Paul O&apos;Reilly
          </Link>
          <Image
            className="editors__image"
            srcSmall="https://picsum.photos/300/179"
            alt=""
            aspectRatio="600:360"
          />
        </li>
        <li className="editors__item">
          <Link className="editors__link" to="/editor-detail">
            Ting Poo
          </Link>
          <Image
            className="editors__image"
            srcSmall="https://picsum.photos/300/179"
            alt=""
            aspectRatio="600:360"
          />
        </li>
      </ul>
    </article>
    <LinkCallout linkPath="/work" linkText="Work" />
  </Layout>
);

export default VideoDetailPage;
