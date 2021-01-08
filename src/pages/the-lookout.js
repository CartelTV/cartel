import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { Image } from '../components/patterns/image';
import { LinkCallout } from '../components/patterns/linkCallout';

const TheLookout = () => (
  <Layout>
    <SEO title="The Lookout" />
    <Image
      srcSmall="https://picsum.photos/id/1011/719/384"
      alt="The Lookout"
      lazyLoad
    />
    <article className="lookout">
      <ul className="lookout__list">
        <li className="lookout__item">
          <div className="container">
            <p>
              <strong>Adam Robinson</strong>
            </p>
            <div className="lookout__item-images">
              <Image
                className="lookout__item-primary-image"
                srcSmall="https://picsum.photos/id/1011/719/406"
                alt="Adam Robinson video"
                lazyLoad
              />

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
          </div>
        </li>
        <li className="lookout__item">
          <div className="container">
            <p>
              <strong>Adam Robinson</strong>
            </p>
            <div className="lookout__item-images">
              <Image
                className="lookout__item-primary-image"
                srcSmall="https://picsum.photos/id/1011/719/406"
                alt="Adam Robinson video"
                lazyLoad
              />

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
          </div>
        </li>
        <li className="lookout__item">
          <div className="container">
            <p>
              <strong>Adam Robinson</strong>
            </p>
            <div className="lookout__item-images">
              <Image
                className="lookout__item-primary-image"
                srcSmall="https://picsum.photos/id/1011/719/406"
                alt="Adam Robinson video"
                lazyLoad
              />

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
          </div>
        </li>
      </ul>
    </article>
    <LinkCallout linkPath="/work" linkText="Work" />
  </Layout>
);

export default TheLookout;
