import React from 'react';

import cartelMarkLogo from '../images/cartel-logo.png';

export const Footer = () => (
  <div className="container">
    <footer className="footer" role="contentinfo">
      <img
        className="footer__logo"
        src={cartelMarkLogo}
        alt="Cartel logo mark"
      />
      <address className="footer__address">
        <span className="footer__street">1708 Berkeley Street</span>
        <br />
        Santa Monica, CA 90404
        <br />
        <span className="footer__links">
          <a href="tel:13108285555">310-828-5555</a> &diams;{' '}
          <a href="mailto:lauren@cartel.tv">lauren@cartel.tv</a>
        </span>
      </address>
    </footer>
  </div>
);
