import React from 'react';
import PropTypes from 'prop-types';

import GridImage from './gridImage';

const EditorsGrid = ({ editorsList }) => (
  <section className="editors-grid">
    <ul className="editors-grid__list">
      {editorsList.map(editor => (
        <li className="editors-grid__item" key={editor.name}>
          <GridImage
            altText={editor.name}
            copy={editor.name}
            imgSrc={editor.imageSrc}
            linkUrl={editor.url}
          />
        </li>
      ))}
    </ul>
  </section>
);

EditorsGrid.propTypes = {
  editorsList: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string,
      name: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
};

export default EditorsGrid;
