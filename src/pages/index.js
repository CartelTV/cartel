import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';

import { LinkCalloutArrow } from '../components/icons/linkCalloutArrow';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="visuallyhidden">Home</h1>
    <article className="home-videos">
      <h2 className="home-videos__heading">Recent Work</h2>
      <ul className="home-videos__list">
        <li className="home-videos__item">
          <div className="home-videos__video-wrapper">
            <img src="https://picsum.photos/id/1011/5472/3648" alt="" />
          </div>
          <div className="home-videos__text-wrapper">
            <p>Track Smith</p>
            <p>Race Day is Still Sacred</p>
          </div>
        </li>
        <li className="home-videos__item">
          <div className="home-videos__video-wrapper">
            <img src="https://picsum.photos/id/1012/3973/2639" alt="" />
          </div>
          <div className="home-videos__text-wrapper">
            <p>Track Smith</p>
            <p>Race Day is Still Sacred</p>
          </div>
        </li>
        <li className="home-videos__item">
          <div className="home-videos__video-wrapper">
            <img src="https://picsum.photos/id/1013/4256/2832" alt="" />
          </div>
          <div className="home-videos__text-wrapper">
            <p>Track Smith</p>
            <p>Race Day is Still Sacred</p>
          </div>
        </li>
      </ul>
    </article>

    <article className="home-videos">
      <h2 className="home-videos__heading">Music Videos</h2>
      <ul className="home-videos__list">
        <li className="home-videos__item">
          <div className="home-videos__video-wrapper">
            <img src="https://picsum.photos/id/1015/6000/4000" alt="" />
          </div>
          <div className="home-videos__text-wrapper">
            <p>Track Smith</p>
            <p>Race Day is Still Sacred</p>
          </div>
        </li>
        <li className="home-videos__item">
          <div className="home-videos__video-wrapper">
            <img src="https://picsum.photos/id/1016/3844/2563" alt="" />
          </div>
          <div className="home-videos__text-wrapper">
            <p>Track Smith</p>
            <p>Race Day is Still Sacred</p>
          </div>
        </li>
        <li className="home-videos__item">
          <div className="home-videos__video-wrapper">
            <img src="https://picsum.photos/id/1018/3914/2935" alt="" />
          </div>
          <div className="home-videos__text-wrapper">
            <p>Track Smith</p>
            <p>Race Day is Still Sacred</p>
          </div>
        </li>
      </ul>
    </article>

    <article className="home-editors">
      <h2 className="home-editors__heading">Editors</h2>
      <ul className="home-editors__list">
        <li className="home-editors__item">
          <Link className="home-editors__link" to="/">
            Adam Robinson
          </Link>
        </li>
        <li className="home-editors__item">
          <Link className="home-editors__link" to="/">
            Andy McGraw
          </Link>
        </li>
        <li className="home-editors__item">
          <Link className="home-editors__link" to="/">
            Chris Catanach
          </Link>
        </li>
        <li className="home-editors__item">
          <Link className="home-editors__link" to="/">
            Ellie Johnson
          </Link>
        </li>
        <li className="home-editors__item">
          <Link className="home-editors__link" to="/">
            Ernie Gilbert
          </Link>
        </li>
        <li className="home-editors__item">
          <Link className="home-editors__link" to="/">
            Kevin Zimmerman
          </Link>
        </li>
        <li className="home-editors__item">
          <Link className="home-editors__link" to="/">
            Kyle Valenta
          </Link>
        </li>
        <li className="home-editors__item">
          <Link className="home-editors__link" to="/">
            Leo Scott
          </Link>
        </li>
        <li className="home-editors__item">
          <Link className="home-editors__link" to="/">
            Paul O'Reilly
          </Link>
        </li>
        <li className="home-editors__item">
          <Link className="home-editors__link" to="/">
            Ting Poo
          </Link>
        </li>
      </ul>
    </article>

    <div className="link-callout">
      <Link className="link-callout__link" to="/">
        <span>Work</span>
        <LinkCalloutArrow />
      </Link>
    </div>

    <article className="home-social-feed">
      <h2 className="home-social-feed__heading">The Latest</h2>
      <ul className="home-social-feed__list">
        <li className="home-social-feed__item">
          <img src="https://picsum.photos/id/102/396" alt="" />
        </li>
        <li className="home-social-feed__item">
          <img src="https://picsum.photos/id/103/396" alt="" />
        </li>
        <li className="home-social-feed__item">
          <img src="https://picsum.photos/id/104/396" alt="" />
        </li>
      </ul>
    </article>
  </Layout>
);

export default IndexPage;
