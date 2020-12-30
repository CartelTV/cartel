import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export const HomeEditors = ({ editorsList }) => (
  <article className="home-editors">
    <h2 className="home-editors__heading">Editors</h2>
    <ul className="home-editors__list">
      {editorsList.map(editor => (
        <li className="home-editors__item">
          <Link className="home-editors__link" to={editor.url}>
            {editor.name}
          </Link>
        </li>
      ))}
    </ul>
  </article>
);

HomeEditors.propTypes = {
  editorsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
