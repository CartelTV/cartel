import React from 'react';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { Image } from '../components/patterns/image';
import { LinkCallout } from '../components/patterns/linkCallout';

const ContactPage = () => (
  <Layout>
    <SEO title="Video Detail" />
    <h1 className="visuallyhidden">Contact</h1>
    <article className="contact-header">
      <div className="contact-header__image-wrapper">
        <Image
          srcSmall="https://picsum.photos/id/1040/719"
          srcMed="https://picsum.photos/id/1041/1199"
          srcLarge="https://picsum.photos/id/1042/1920"
          alt="map showing location Cartel's office"
          aspectRatio="800:800"
          lazyLoad
        />
      </div>
      <div className="contact-header__copy-wrapper">
        <div className="container">
          <div className="contact-header__contact-block-wrapper">
            <h2 className="contact-header__heading h1">Enquiries</h2>
            <p className="contact-header__contact-block">
              <a
                className="contact-header__contact-number"
                href="tel:3108285555"
              >
                310 828 5555
              </a>
            </p>
          </div>

          <hr />

          <ul>
            <li className="contact-header__contact-block">
              <h3 className="h2">Lauren Bleiweiss</h3>
              <p>
                Executive Producer
                <br />
                + Managing Director
                <br />
                <a href="mailto:lauren@cartel.tv">Lauren@Cartel.Tv</a>
                <br />
                <a href="tel:9173748436">917 374 8436</a>
              </p>
            </li>
            <li className="contact-header__contact-block">
              <h3 className="h2">Alaina Zanotti</h3>
              <p>
                Executive Producer
                <br />
                + Head of Sales
                <br />
                <a href="mailto:lauren@cartel.tv">Alaina@Cartel.Tv</a>
                <br />
                <a href="tel:3105700918">310 570 0918</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </article>

    <article className="contact__office-block">
      <div className="container">
        <h2 className="h1">Office</h2>
        <div className="contact__office-block-copy">
          <address>
            <h3 className="h2">Headquarters</h3>
            <p>
              1708 Berkeley Street
              <br />
              Santa Monica, CA 90404
            </p>
          </address>

          <address>
            <h3 className="h2">The Cottage</h3>
            <p>
              By appointment only.
              <br />
              Please call to schedule.
            </p>
          </address>
        </div>
      </div>
    </article>

    <article className="contact__representation-block">
      <div className="container">
        <h2 className="contact__representation-block-heading h1">
          Representation
        </h2>
        <ul className="contact__representation-block-copy">
          <li>
            <h3 className="h2">West Coast Sales</h3>
            <p className="contact-header__contact-block">
              Millie Munro
              <br />
              <a href="mailto:lauren@cartel.tv">millie@Cartel.Tv</a>
              <br />
              <a href="tel:3105700918">310 570 0918</a>
            </p>
          </li>
          <li>
            <h3 className="h2">East Coast Sales</h3>
            <p className="contact-header__contact-block">
              Millie Munro
              <br />
              <a href="mailto:lauren@cartel.tv">millie@Cartel.Tv</a>
              <br />
              <a href="tel:3105700918">310 570 0918</a>
            </p>
          </li>
          <li>
            <h3 className="h2">Midwest Sales</h3>
            <p className="contact-header__contact-block">
              Millie Munro
              <br />
              <a href="mailto:lauren@cartel.tv">millie@Cartel.Tv</a>
              <br />
              <a href="tel:3105700918">310 570 0918</a>
            </p>
          </li>
        </ul>
      </div>
    </article>
    <LinkCallout linkPath="/work" linkText="Work" />
  </Layout>
);

export default ContactPage;
