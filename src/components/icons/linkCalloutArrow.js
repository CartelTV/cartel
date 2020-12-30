import React from 'react';
import PropTypes from 'prop-types';

export const LinkCalloutArrow = ({ className }) => (
  <svg
    className={`link-callout-arrow ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 34.819 27.094"
    aria-hidden="true"
  >
    <g transform="translate(0 0.562)">
      <path
        d="M325.89,5355.9l12.182,12.5-12.182,12.5"
        transform="translate(-305.348 -5355.414)"
        fill="none"
        stroke="#a5daca"
        strokeWidth="3"
      />
      <line
        x1="32.641"
        transform="translate(0 12.485)"
        fill="none"
        stroke="#a5daca"
        strokeWidth="3"
      />
      <line
        x1="32.641"
        transform="translate(0 12.485)"
        fill="none"
        stroke="#a5daca"
        strokeWidth="3"
      />
    </g>
  </svg>
);

LinkCalloutArrow.propTypes = {
  className: PropTypes.string,
};

LinkCalloutArrow.defaultProps = {
  className: '',
};
