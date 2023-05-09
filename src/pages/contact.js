/* eslint-disable no-new */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/seo';

import iconFacebook from '../images/icon-facebook.svg';
import iconInstagram from '../images/icon-instagram.svg';

const ContactPage = ({ data, location }) => {
  const contactData = data.allWpPage.edges[0].node.contactPage;
  const {
    contactAddresses,
    contactPhoneNumber,
    contactFacebookUrl,
    contactInstagramUrl,
    contactPersons,
    contactRepresentation,
  } = contactData;

  return (
    <Layout location={location}>
      <SEO title="Contact" />
      <article className="contact">
        <div className="container">
          <h1>Contact</h1>
          <div className="contact__grid">
            <div className="contact__grid-column">
              <h2 className="contact__list-heading">Team</h2>
              <ul className="contact__team-list">
                {contactPersons.map(person => (
                  <li
                    className="contact__team-item contact__block"
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
                  </li>
                ))}
              </ul>

              <ul className="contact__social-list">
                {contactInstagramUrl && (
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
                )}
                {contactFacebookUrl && (
                  <li className="contact__social-item">
                    <a
                      href={contactFacebookUrl}
                      className="contact__social-link"
                    >
                      <img
                        src={iconFacebook}
                        alt="Cartel on Facebook"
                        className="contact__social-icon"
                      />
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div className="contact__grid-column">
              <div className="contact__enquiries-group">
                <div className="contact__enquiries-group-heading">
                  <h2>Enquiries</h2>
                  <a
                    className="contact__enquiries-phone-number"
                    href={`tel:1${contactPhoneNumber
                      .replace(/–/g, '')
                      .replace(/-/g, '')}`}
                  >
                    {contactPhoneNumber}
                  </a>
                </div>

                {contactAddresses.map(address => (
                  <address className="contact__address">
                    <span className="contact__address-title">
                      {address.contactAddressHeading}
                    </span>
                    <br />
                    <span className="contact__address-street">
                      {address.contactAddressStreet}
                    </span>
                    <br />
                    <span className="contact__address-city">
                      {address.contactAddressCityStateZip}
                    </span>
                  </address>
                ))}
              </div>
            </div>

            <div className="contact__grid-column">
              <h2 className="contact__list-heading">Representation</h2>
              <ul className="contact__representation-list">
                {contactRepresentation.map(group => (
                  <li
                    className="contact__block"
                    key={group.representationGroupName}
                  >
                    <h3>{group.representationGroupName}</h3>
                    {group.representationContactPersons.map(person => (
                      <p key={person.representationContactName}>
                        {person.representationContactName}
                        <br />
                        <a href={`mailto:${person.representationContactEmail}`}>
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
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpPage(filter: { databaseId: { eq: 95 } }) {
      edges {
        node {
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
            contactAddresses {
              contactAddressHeading
              contactAddressStreet
              contactAddressCityStateZip
            }
          }
        }
      }
    }
  }
`;

ContactPage.propTypes = {
  data: PropTypes.shape({
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            contactPage: PropTypes.shape({
              contactAddresses: PropTypes.arrayOf(PropTypes.shape({})),
              contactFacebookUrl: PropTypes.string,
              contactInstagramUrl: PropTypes.string,
              contactPersons: PropTypes.arrayOf(PropTypes.shape({})),
              contactPhoneNumber: PropTypes.string,
              contactRepresentation: PropTypes.arrayOf(PropTypes.shape({})),
            }),
          }),
        })
      ),
    }),
  }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default ContactPage;
