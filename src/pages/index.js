import React, { useRef } from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { Image } from '../components/patterns/image';

import { HomeVideos } from '../components/homeVideos';
import { LinkCalloutArrow } from '../components/icons/linkCalloutArrow';

const recentWorkVideos = [
  {
    videoSrc:
      'https://cartel.wiredrive.com/?routekey=iframe-embed&token=300e1776e61b6928228e78cd005577ac&loop=0&controls=1&color=4EB7D4',
    title: 'Race Day is Still Sacred',
    editor: 'Track Smith',
    imageSrc: 'https://picsum.photos/id/1011/1740/1184',
  },
  {
    videoSrc:
      'https://cartel.wiredrive.com/?routekey=iframe-embed&token=234f2dda2110b43e094f19fcde9ad4b0&loop=0&controls=1&color=4EB7D4',
    title: 'Race Day is Still Sacred',
    editor: 'Track Smith',
    imageSrc: 'https://picsum.photos/id/1012/3973/2639',
  },
  {
    videoSrc:
      'https://cartel.wiredrive.com/?routekey=iframe-embed&token=3e2f6c9d1ebdf0816c75a7a52c5fda1c&loop=0&controls=1&color=4EB7D4',
    title: 'Race Day is Still Sacred',
    editor: 'Track Smith',
    imageSrc: 'https://picsum.photos/id/1013/4256/2832',
  },
];

const IndexPage = () => {
  const thumbnailRef = useRef(null);

  const thumbnailClick = () => {
    console.log('thumbnailRef.current', thumbnailRef.current);
    // thumbnailRef.current.classList.add('video-play');
  };

  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="visuallyhidden">Home</h1>
      <HomeVideos sectionHeading="Recent Work" videosList={recentWorkVideos} />

      <article className="home-videos">
        <div className="home-videos__heading-wrapper">
          <h2 className="home-videos__heading">Music Videos</h2>
        </div>
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
              Paul O&apos;Reilly
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
        <Link className="link-callout__link" to="/work">
          <span>Work</span>
          <LinkCalloutArrow />
        </Link>
      </div>

      <article className="scrollable-cards">
        <h2 className="scrollable-cards__heading">The Latest</h2>
        <ul className="scrollable-cards__list">
          <li className="scrollable-cards__item">
            <img src="https://picsum.photos/id/102/396" alt="" />
          </li>
          <li className="scrollable-cards__item">
            <img src="https://picsum.photos/id/103/396" alt="" />
          </li>
          <li className="scrollable-cards__item">
            <img src="https://picsum.photos/id/104/396" alt="" />
          </li>
        </ul>
      </article>
    </Layout>
  );
};

export default IndexPage;
