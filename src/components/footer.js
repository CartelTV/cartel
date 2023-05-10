import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

import cartelMarkLogo from '../images/cartel-logo.png';

export const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allWpPage(filter: { databaseId: { eq: 95 } }) {
            edges {
              node {
                contactPage {
                  contactAddresses {
                    contactAddressStreet
                    contactAddressCityStateZip
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const contactData = data.allWpPage.edges[0].node.contactPage;
        const { contactAddresses } = contactData;

        return (
          <div className="container">
            <footer className="footer" role="contentinfo">
              <address className="contact__address">
                <span className="contact__address-street">
                  {contactAddresses[0].contactAddressStreet}
                </span>
                <br />
                <span className="contact__address-city">
                  {contactAddresses[0].contactAddressCityStateZip}
                </span>
              </address>
              <img
                className="footer__logo"
                src={cartelMarkLogo}
                alt="Cartel logo mark"
              />
              <address className="contact__address">
                <span className="contact__address-street">
                  {contactAddresses[1].contactAddressStreet}
                </span>
                <br />
                <span className="contact__address-city">
                  {contactAddresses[1].contactAddressCityStateZip}
                </span>
              </address>
            </footer>
          </div>
        );
      }}
    />
  );
};

Footer.propTypes = {
  data: PropTypes.shape({
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            contactPage: PropTypes.shape({
              contactAddresses: PropTypes.arrayOf(
                PropTypes.shape({
                  contactAddressStreet: PropTypes.string,
                  contactAddressCityStateZip: PropTypes.string,
                })
              ),
            }),
          }),
        })
      ),
    }),
  }).isRequired,
};
