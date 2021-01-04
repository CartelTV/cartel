import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { LinkCallout } from '../components/patterns/linkCallout';

const VideoDetailPage = () => (
  <Layout>
    <SEO title="Editors" />
    <article className="editors">
      <h2 className="editors__heading">Editors</h2>
      <ul className="editors__list">
        <li className="editors__item">
          <Link className="editors__link" to="/">
            Adam Robinson
          </Link>
        </li>
        <li className="editors__item">
          <Link className="editors__link" to="/">
            Andy McGraw
          </Link>
        </li>
        <li className="editors__item">
          <Link className="editors__link" to="/">
            Chris Catanach
          </Link>
        </li>
        <li className="editors__item">
          <Link className="editors__link" to="/">
            Ellie Johnson
          </Link>
        </li>
        <li className="editors__item">
          <Link className="editors__link" to="/">
            Ernie Gilbert
          </Link>
        </li>
        <li className="editors__item">
          <Link className="editors__link" to="/">
            Kevin Zimmerman
          </Link>
        </li>
        <li className="editors__item">
          <Link className="editors__link" to="/">
            Kyle Valenta
          </Link>
        </li>
        <li className="editors__item">
          <Link className="editors__link" to="/">
            Leo Scott
          </Link>
        </li>
        <li className="editors__item">
          <Link className="editors__link" to="/">
            Paul O'Reilly
          </Link>
        </li>
        <li className="editors__item">
          <Link className="editors__link" to="/">
            Ting Poo
          </Link>
        </li>
      </ul>
    </article>
    <LinkCallout linkPath="/work" linkText="Work" />
  </Layout>
);

export default VideoDetailPage;
