import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { LinkCalloutArrow } from '../icons/linkCalloutArrow';

export const LinkCallout = ({ linkPath, linkText }) => (
  <div className="link-callout">
    <Link className="link-callout__link" to={linkPath}>
      <span>{linkText}</span>
      <LinkCalloutArrow />
    </Link>
  </div>
);

LinkCallout.propTypes = {
  linkPath: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};
