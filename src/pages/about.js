import React from 'react';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { Image } from '../components/patterns/image';
import { LinkCallout } from '../components/patterns/linkCallout';

import cartelMarkLogo from '../images/cartel-logo.png';

const VideoDetailPage = () => (
  <Layout>
    <SEO title="Video Detail" />
    <article className="scrollable-cards">
      <h1 className="scrollable-cards__heading">About</h1>
      <ul className="scrollable-cards__list">
        <li className="scrollable-cards__item scrollable-cards__text-card">
          <img src={cartelMarkLogo} alt="" />
          <p className="scrollable-cards__intro-text">
            Cartel stands behind great creative and those who make it.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            voluptates laboriosam totam error ea provident minus, rerum
            adipisci! Quisquam veritatis soluta eveniet, tenetur perspiciatis
            vero impedit ipsa delectus molestias. Ducimus?
          </p>
        </li>
        <li className="scrollable-cards__item scrollable-cards__text-card">
          <p className="scrollable-cards__intro-text">
            Cartel stands behind great creative and those who make it.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            voluptates laboriosam totam error ea provident minus, rerum
            adipisci! Quisquam veritatis soluta eveniet, tenetur perspiciatis
            vero impedit ipsa delectus molestias. Ducimus?
          </p>
        </li>
        <li className="scrollable-cards__item scrollable-cards__text-card">
          <p className="scrollable-cards__intro-text">
            Cartel stands behind great creative and those who make it.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            voluptates laboriosam totam error ea provident minus, rerum
            adipisci! Quisquam veritatis soluta eveniet, tenetur perspiciatis
            vero impedit ipsa delectus molestias. Ducimus?
          </p>
        </li>
      </ul>
    </article>

    <article className="text-header">
      <div className="container">
        <div className="text-header__heading-wrapper">
          <h2 className="text-header__heading h1">Our Team</h2>
        </div>
        <p className="text-header__copy">
          Cartel stands behind great creative and those who make it. With
          decades of international production experience, awards and accolades
          from all of the major shows, we know that the best work is made in a
          collaborative environment with a dedication to craft.
        </p>
      </div>
    </article>

    <article className="three-col-grid">
      <ul className="three-col-grid__list">
        <li className="three-col-grid__item">
          <div className="three-col-grid__image-wrapper">
            <Image
              srcSmall="https://picsum.photos/id/1011/400"
              alt="Lauren Bleiweiss"
              lazyLoad
            />
          </div>
          <div className="three-col-grid__copy-wrapper">
            <p>
              Lauren Bleiweiss
              <br />
              Executive Producer + Managing Director
            </p>
          </div>
        </li>
        <li className="three-col-grid__item">
          <div className="three-col-grid__image-wrapper">
            <Image
              srcSmall="https://picsum.photos/id/1011/400"
              alt="Lauren Bleiweiss"
              lazyLoad
            />
          </div>
          <div className="three-col-grid__copy-wrapper">
            <p>
              Lauren Bleiweiss
              <br />
              Executive Producer + Managing Director
            </p>
          </div>
        </li>
        <li className="three-col-grid__item">
          <div className="three-col-grid__image-wrapper">
            <Image
              srcSmall="https://picsum.photos/id/1011/400"
              alt="Lauren Bleiweiss"
              lazyLoad
            />
          </div>
          <div className="three-col-grid__copy-wrapper">
            <p>
              Lauren Bleiweiss
              <br />
              Executive Producer + Managing Director
            </p>
          </div>
        </li>
        <li className="three-col-grid__item">
          <div className="three-col-grid__image-wrapper">
            <Image
              srcSmall="https://picsum.photos/id/1011/400"
              alt="Lauren Bleiweiss"
              lazyLoad
            />
          </div>
          <div className="three-col-grid__copy-wrapper">
            <p>
              Lauren Bleiweiss
              <br />
              Executive Producer + Managing Director
            </p>
          </div>
        </li>
        <li className="three-col-grid__item">
          <div className="three-col-grid__image-wrapper">
            <Image
              srcSmall="https://picsum.photos/id/1011/400"
              alt="Lauren Bleiweiss"
              lazyLoad
            />
          </div>
          <div className="three-col-grid__copy-wrapper">
            <p>
              Lauren Bleiweiss
              <br />
              Executive Producer + Managing Director
            </p>
          </div>
        </li>
        <li className="three-col-grid__item">
          <div className="three-col-grid__image-wrapper">
            <Image
              srcSmall="https://picsum.photos/id/1011/400"
              alt="Lauren Bleiweiss"
              lazyLoad
            />
          </div>
          <div className="three-col-grid__copy-wrapper">
            <p>
              Lauren Bleiweiss
              <br />
              Executive Producer + Managing Director
            </p>
          </div>
        </li>
        <li className="three-col-grid__item">
          <div className="three-col-grid__image-wrapper">
            <Image
              srcSmall="https://picsum.photos/id/1011/400"
              alt="Lauren Bleiweiss"
              lazyLoad
            />
          </div>
          <div className="three-col-grid__copy-wrapper">
            <p>
              Lauren Bleiweiss
              <br />
              Executive Producer + Managing Director
            </p>
          </div>
        </li>
        <li className="three-col-grid__item">
          <div className="three-col-grid__image-wrapper">
            <Image
              srcSmall="https://picsum.photos/id/1011/400"
              alt="Lauren Bleiweiss"
              lazyLoad
            />
          </div>
          <div className="three-col-grid__copy-wrapper">
            <p>
              Lauren Bleiweiss
              <br />
              Executive Producer + Managing Director
            </p>
          </div>
        </li>
        <li className="three-col-grid__item">
          <div className="three-col-grid__image-wrapper">
            <Image
              srcSmall="https://picsum.photos/id/1011/400"
              alt="Lauren Bleiweiss"
              lazyLoad
            />
          </div>
          <div className="three-col-grid__copy-wrapper">
            <p>
              Lauren Bleiweiss
              <br />
              Executive Producer + Managing Director
            </p>
          </div>
        </li>
        <li className="three-col-grid__item">
          <div className="three-col-grid__image-wrapper">
            <Image
              srcSmall="https://picsum.photos/id/1011/400"
              alt="Lauren Bleiweiss"
              lazyLoad
            />
          </div>
          <div className="three-col-grid__copy-wrapper">
            <p>
              Lauren Bleiweiss
              <br />
              Executive Producer + Managing Director
            </p>
          </div>
        </li>
        <li className="three-col-grid__item">
          <div className="three-col-grid__image-wrapper">
            <Image
              srcSmall="https://picsum.photos/id/1011/400"
              alt="Lauren Bleiweiss"
              lazyLoad
            />
          </div>
          <div className="three-col-grid__copy-wrapper">
            <p>
              Lauren Bleiweiss
              <br />
              Executive Producer + Managing Director
            </p>
          </div>
        </li>
        <li className="three-col-grid__item">
          <div className="three-col-grid__image-wrapper">
            <Image
              srcSmall="https://picsum.photos/id/1011/400"
              alt="Lauren Bleiweiss"
              lazyLoad
            />
          </div>
          <div className="three-col-grid__copy-wrapper">
            <p>
              Lauren Bleiweiss
              <br />
              Executive Producer + Managing Director
            </p>
          </div>
        </li>
      </ul>
    </article>
    <LinkCallout linkPath="/work" linkText="Work" />
  </Layout>
);

export default VideoDetailPage;
