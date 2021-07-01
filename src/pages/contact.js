/* eslint-disable no-new */
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import { Layout } from '../components/layout';
import SEO from '../components/seo';

import iconMapMarker from '../images/map-pin.png';
import iconFacebook from '../images/icon-facebook.svg';
import iconInstagram from '../images/icon-instagram.svg';
import iconTwitter from '../images/icon-twitter.svg';

const ContactPage = ({ data }) => {
  const contactData = data.cartel.page.contactPage;
  const {
    contactAddress,
    contactPhoneNumber,
    contactFacebookUrl,
    contactInstagramUrl,
    contactTwitterUrl,
    contactPersons,
    contactRepresentation,
  } = contactData;

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
    <Fragment>
      <Helmet>
        <script
          async
          defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCSQ-2TUSm0yqVfuotzZB44vTTHDQkeUNA&callback=initMap"
        />
      </Helmet>
      <Layout>
        <SEO title="Contact" />
        <article className="contact">
          <div className="container">
            <div className="contact__col">
              <div id="map" />
              <ul className="contact__social-list">
                <li className="contact__social-item">
                  <a
                    href={contactInstagramUrl}
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
                  <a href={contactFacebookUrl} className="contact__social-link">
                    <img
                      src={iconFacebook}
                      alt="Cartel on Facebook"
                      className="contact__social-icon"
                    />
                  </a>
                </li>
                <li className="contact__social-item">
                  <a href={contactTwitterUrl} className="contact__social-link">
                    <img
                      src={iconTwitter}
                      alt="Cartel on Twitter"
                      className="contact__social-icon"
                    />
                  </a>
                </li>
              </ul>

              <address className="contact__address">{contactAddress}</address>
            </div>

            <div className="contact__col">
              <h1>Contact</h1>

              <div className="contact__group">
                <div className="contact__block">
                  <h2>Enquiries</h2>
                  <a
                    href={`tel:1${contactPhoneNumber
                      .replace(/–/g, '')
                      .replace(/-/g, '')}`}
                  >
                    {contactPhoneNumber}
                  </a>
                </div>

                {contactPersons.map(person => (
                  <div
                    className="contact__block"
                    style={
                      contactPersons.length === 1
                        ? { marginBottom: '7.25rem' }
                        : null
                    }
                    key={person.contactPersonName}
                  >
                    <p>
                      <strong>{person.contactPersonName}</strong>
                      <br />
                      {person.contactPersonTitle}
                      <br />
                      <a href={`mailto:${person.contactPersonEmail}`}>
                        {person.contactPersonEmail}
                      </a>
                      <br />
                      <a
                        href={`tel:1${person.contactPersonPhone
                          .replace(/–/g, '')
                          .replace(/-/g, '')}`}
                      >
                        {person.contactPersonPhone}
                      </a>
                    </p>
                  </div>
                ))}
              </div>

              <div className="contact__group">
                <h2>Representation</h2>
                <div className="contact__representation-wrapper">
                  {contactRepresentation.map(group => (
                    <div
                      className="contact__block"
                      key={group.representationGroupName}
                    >
                      <h3>{group.representationGroupName}</h3>
                      {group.representationContactPersons.map(person => (
                        <p key={person.representationContactName}>
                          {person.representationContactName}
                          <br />
                          <a
                            href={`mailto:${person.representationContactEmail}`}
                          >
                            {person.representationContactEmail}
                          </a>
                          <br />
                          <a
                            href={`tel:1${person.representationContactPhone
                              .replace(/–/g, '')
                              .replace(/-/g, '')}`}
                          >
                            {person.representationContactPhone}
                          </a>
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </Fragment>
  );
};

export const query = graphql`
  query {
    cartel {
      page(id: "95", idType: DATABASE_ID) {
        contactPage {
          contactPhoneNumber
          contactPersons {
            contactPersonName
            contactPersonTitle
            contactPersonEmail
            contactPersonPhone
          }
          contactRepresentation {
            representationGroupName
            representationContactPersons {
              representationContactName
              representationContactEmail
              representationContactPhone
            }
          }
          contactInstagramUrl
          contactFacebookUrl
          contactTwitterUrl
          contactAddress
        }
      }
    }
  }
`;

ContactPage.propTypes = {
  data: PropTypes.shape({
    cartel: PropTypes.shape({
      page: PropTypes.shape({
        contactPage: PropTypes.shape({
          contactAddress: PropTypes.string,
          contactFacebookUrl: PropTypes.string,
          contactInstagramUrl: PropTypes.string,
          contactPersons: PropTypes.arrayOf(PropTypes.shape({})),
          contactPhoneNumber: PropTypes.string,
          contactRepresentation: PropTypes.arrayOf(PropTypes.shape({})),
          contactTwitterUrl: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export default ContactPage;
