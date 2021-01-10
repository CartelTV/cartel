import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { Image } from '../components/patterns/image';
import { LinkCallout } from '../components/patterns/linkCallout';

import lookoutLogo from '../images/the-lookout-logo.svg';

const TheLookout = () => (
  <Layout>
    <SEO title="The Lookout" />
    <Image
      srcSmall="https://picsum.photos/id/1011/719/384"
      srcMed="https://picsum.photos/id/1011/1199/640"
      srcLarge="https://picsum.photos/id/1011/1920/1024"
      alt="The Lookout"
      lazyLoad
    />
    <article className="lookout">
      <ul className="lookout__list">
        <li className="lookout__item">
          <p className="lookout__item-name">
            <Link to="/lookout-detail">Adam Robinson</Link>
          </p>
          <div className="lookout__item-images">
            <Link to="/lookout-detail">
              <Image
                className="lookout__item-primary-image"
                srcSmall="https://picsum.photos/id/1020/719/406"
                alt="Adam Robinson video"
                lazyLoad
              />
            </Link>

            <Image
              className="lookout__item-secondary-image lookout__item-secondary-image--right"
              srcSmall="https://picsum.photos/id/1/230/320"
              alt="Adam Robinson image right"
              lazyLoad
            />

            <Image
              className="lookout__item-secondary-image lookout__item-secondary-image--bottom"
              srcSmall="https://picsum.photos/id/2/340/160"
              alt="Adam Robinson image bottom"
              lazyLoad
            />

            <Image
              className="lookout__item-secondary-image lookout__item-secondary-image--left"
              srcSmall="https://picsum.photos/id/3/180/32"
              alt="Adam Robinson image bottom"
              lazyLoad
            />
          </div>
        </li>
        <li className="lookout__item">
          <p className="lookout__item-name">
            <Link to="/lookout-detail">Adam Robinson</Link>
          </p>
          <div className="lookout__item-images">
            <Link to="/lookout-detail">
              <Image
                className="lookout__item-primary-image"
                srcSmall="https://picsum.photos/id/1020/719/406"
                alt="Adam Robinson video"
                lazyLoad
              />
            </Link>

            <Image
              className="lookout__item-secondary-image lookout__item-secondary-image--right"
              srcSmall="https://picsum.photos/id/1/230/320"
              alt="Adam Robinson image right"
              lazyLoad
            />

            <Image
              className="lookout__item-secondary-image lookout__item-secondary-image--bottom"
              srcSmall="https://picsum.photos/id/2/340/160"
              alt="Adam Robinson image bottom"
              lazyLoad
            />

            <Image
              className="lookout__item-secondary-image lookout__item-secondary-image--left"
              srcSmall="https://picsum.photos/id/3/180/32"
              alt="Adam Robinson image bottom"
              lazyLoad
            />
          </div>
        </li>
        <li className="lookout__item">
          <p className="lookout__item-name">
            <Link to="/lookout-detail">Adam Robinson</Link>
          </p>
          <div className="lookout__item-images">
            <Link to="/lookout-detail">
              <Image
                className="lookout__item-primary-image"
                srcSmall="https://picsum.photos/id/1020/719/406"
                alt="Adam Robinson video"
                lazyLoad
              />
            </Link>

            <Image
              className="lookout__item-secondary-image lookout__item-secondary-image--right"
              srcSmall="https://picsum.photos/id/1/230/320"
              alt="Adam Robinson image right"
              lazyLoad
            />

            <Image
              className="lookout__item-secondary-image lookout__item-secondary-image--bottom"
              srcSmall="https://picsum.photos/id/2/340/160"
              alt="Adam Robinson image bottom"
              lazyLoad
            />

            <Image
              className="lookout__item-secondary-image lookout__item-secondary-image--left"
              srcSmall="https://picsum.photos/id/3/180/32"
              alt="Adam Robinson image bottom"
              lazyLoad
            />
          </div>
        </li>
      </ul>
    </article>

    <article className="text-header">
      <div className="container">
        <div className="text-header__heading-wrapper">
          <img src={lookoutLogo} alt="The Lookout logo" />
        </div>
        <p className="text-header__copy">
          Cartel is dedicated and passionate about supporting and nurturing the
          next generation of editors. We believe in creating a culture and
          environment where young and emerging talent can flourish.
        </p>
      </div>
    </article>

    <LinkCallout linkPath="/work" linkText="Work" />
  </Layout>
);

export default TheLookout;
