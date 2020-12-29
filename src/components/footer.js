import React from 'react';

import cartelMarkLogo from '../images/cartel-logo.png';

export const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="footer__inner">
      <div className="footer__logo-block">
        <div>
          <img src={cartelMarkLogo} alt="Cartel logo mark" />
        </div>
      </div>
      <div className="footer__text-block">
        <p className="footer__text-heading">Contact</p>
        <address className="footer__text-address">
          <div className="footer__text-links">
            <a className="footer__text-link" href="tel:3108285555">
              310-828-5555
            </a>
            <br />
            <a className="footer__text-link" href="mailto:lauren@cartel.tv">
              lauren@cartel.tv
            </a>
          </div>
          <div className="footer__social-links">
            <a
              className="footer__social-link"
              href="https://www.instagram.com/cartel.tv/"
            >
              Instagram
            </a>
            <br />
            <a
              className="footer__social-link"
              href="https://www.facebook.com/cartel.tv"
            >
              Facebook
            </a>
          </div>
        </address>
      </div>
    </div>
    <p className="footer__copyright">&copy; 2021 Cartel</p>
  </footer>
);
