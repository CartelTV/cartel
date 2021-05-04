/* eslint-disable no-new */
import React, { useEffect } from 'react';

import { Layout } from '../components/layout';
import SEO from '../components/seo';

import iconMapMarker from '../images/map-pin.png';
import iconFacebook from '../images/icon-facebook.svg';
import iconInstagram from '../images/icon-instagram.svg';
import iconTwitter from '../images/icon-twitter.svg';

const ContactPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          disableDefaultUI: true,
          center: {
            lat: 15.1463554,
            lng: 120.5245996,
          },
          zoom: 14,
          styles: [
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [
                { visibility: 'simplified' },
                { color: '#b4b9bd' },
                { lightness: 15 },
              ],
            },
            {
              featureType: 'transit.line',
              stylers: [
                { lightness: 37 },
                { color: '#5e6871' },
                { visibility: 'simplified' },
              ],
            },
            {
              featureType: 'water',
              stylers: [{ color: '#3d4b56' }, { invert_lightness: true }],
            },
            {
              featureType: 'road',
              elementType: 'labels.text',
              stylers: [{ visibility: 'simplified' }, { color: '#10253a' }],
            },
            {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [
                { visibility: 'simplified' },
                { color: '#b0b5b8' },
                { lightness: 68 },
              ],
            },
            {
              featureType: 'landscape',
              stylers: [
                { visibility: 'simplified' },
                { color: '#ebecee' },
                { lightness: -7 },
              ],
            },
            {
              featureType: 'administrative',
              elementType: 'labels.text',
              stylers: [{ visibility: 'simplified' }, { color: '#10253a' }],
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [
                { visibility: 'on' },
                { color: '#7c8089' },
                { lightness: 48 },
              ],
            },
            {
              featureType: 'transit',
              elementType: 'labels.text',
              stylers: [{ visibility: 'simplified' }, { color: '#10253a' }],
            },
            {
              featureType: 'poi',
              elementType: 'labels.text',
              stylers: [{ visibility: 'simplified' }, { color: '#10253a' }],
            },
          ],
        });

        new window.google.maps.Marker({
          position: { lat: 15.1463554, lng: 120.5245996 },
          icon: iconMapMarker,
          animation: window.google.maps.Animation.BOUNCE,
          map,
        });
      };
    }
  }, []);

  return (
    <Layout>
      <SEO title="Contact" />
      <article className="contact">
        <div className="container">
          <div className="contact__col">
            <div id="map" />
            <ul className="contact__social-list">
              <li className="contact__social-item">
                <a
                  href="http://instagram.com/cartel.tv"
                  className="contact__social-link"
                >
                  <img
                    src={iconInstagram}
                    alt="Cartel on Instagram"
                    className="contact__social-icon"
                  />
                </a>
              </li>
              <li className="contact__social-item">
                <a
                  href="http://www.facebook.com/cartel.tv"
                  className="contact__social-link"
                >
                  <img
                    src={iconFacebook}
                    alt="Cartel on Facebook"
                    className="contact__social-icon"
                  />
                </a>
              </li>
              <li className="contact__social-item">
                <a
                  href="http://cartel-blog.tumblr.com/"
                  className="contact__social-link"
                >
                  <img
                    src={iconTwitter}
                    alt="Cartel on Twitter"
                    className="contact__social-icon"
                  />
                </a>
              </li>
            </ul>

            <address className="contact__address">
              1708 Berkeley Street, Santa Monica CA 90404
            </address>
          </div>

          <div className="contact__col">
            <h1>Contact</h1>

            <div className="contact__group">
              <div className="contact__block">
                <h2>Enquiries</h2>
                <a href="tel:13108285555">310-828-5555</a>
              </div>

              <div className="contact__block">
                <p>
                  <strong>Lauren Bleiweiss</strong>
                  <br />
                  Executive Producer / Managing Director
                  <br />
                  <a href="mailto:lauren@cartel.tv">lauren@cartel.tv</a>
                  <br />
                  <a href="tel:19173748436">917-374-8436</a> (Mobile)
                </p>
              </div>
              <div className="contact__block">
                <p>
                  <strong>Alaina Zanotti</strong>
                  <br />
                  Executive Producer / Head of Sales
                  <br />
                  <a href="mailto:alaina@cartel.tv">alaina@cartel.tv</a>
                  <br />
                  <a href="tel:13105700918">310-570-0918</a> (Mobile)
                </p>
              </div>
            </div>

            <div className="contact__group">
              <h2>Representation</h2>
              <div className="contact__representation-wrapper">
                <div className="contact__block">
                  <h3>East Coast Sales</h3>
                  <p>
                    Tara Averill
                    <br />
                    <a href="mailto:tara@representationco.com">
                      tara@representationco.com
                    </a>
                    <br />
                    <a href="tel:12123438085">212-343-8085</a>
                  </p>

                  <p>
                    John Robertson
                    <br />
                    <a href="mailto:john@representationco.com">
                      john@representationco.com
                    </a>
                    <br />
                    <a href="tel:12123438085">212-343-8085</a>
                  </p>
                </div>

                <div className="contact__block">
                  <h3>West Coast Sales</h3>
                  <p>
                    <strong>Millie Munro</strong>
                    <br />
                    <a href="mailto:bueno@wearebueno.com">
                      bueno@wearebueno.com{' '}
                    </a>
                    <br />
                    <a href="tel:13107955035">310-795-5035</a>
                  </p>

                  <p>
                    <strong>Bryan Shrednick</strong>
                    <br />
                    <a href="mailto:bueno@wearebueno.com">
                      bueno@wearebueno.com{' '}
                    </a>
                    <br />
                    <a href="tel:13109804900">310-980-4900</a>
                  </p>
                </div>

                <div className="contact__block">
                  <h3>Midwest Sales</h3>
                  <p>
                    <strong>Jimmy Waldron</strong>
                    <br />
                    <a href="mailto:jimmy@themreps.com">jimmy@themreps.com </a>
                    <br />
                    <a href="tel:18477275154">847-727-5154</a> (Mobile)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ContactPage;
