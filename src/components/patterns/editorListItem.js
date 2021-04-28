import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Image } from './image';

export const EditorListItem = ({
  editorName,
  editorPagePath,
  editorThumbnailImage,
  editorThumbnailTitle,
}) => (
  <li className="editors__item">
    <Link className="editors__link" to={editorPagePath}>
      {editorName}
    </Link>
    <Image
      className="editors__image"
      srcSmall={editorThumbnailImage}
      alt={`${editorThumbnailTitle} by ${editorName}`}
      aspectRatio="600:360"
    />
  </li>
);

EditorListItem.propTypes = {
  editorName: PropTypes.string.isRequired,
  editorPagePath: PropTypes.string.isRequired,
  editorThumbnailImage: PropTypes.string.isRequired,
  editorThumbnailTitle: PropTypes.string.isRequired,
};
