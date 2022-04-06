import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import iconClose from '../../images/icon-close.svg';

import { VideoDetail } from './videoDetail';

Modal.setAppElement(`#___gatsby`);

export const VideoModal = ({ modalIsOpen, handleModalClose, videoData }) => {
  useEffect(() => {
    if (modalIsOpen) {
      // When the modal is shown, we want a fixed body
      document.body.style.top = `-${window.pageYOffset}px`;
      document.body.style.position = 'fixed';
    } else {
      // When the modal is hidden, we want to remain at the top of the scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }
  }, [modalIsOpen]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleModalClose}
      contentLabel={`${videoData.client || videoData.artist} - ${
        videoData.title
      }`}
      className="modal"
      overlayClassName="overlay"
      bodyOpenClassName="body--modal-is-open"
      shouldCloseOnOverlayClick
    >
      <button
        className="modal__close"
        type="button"
        onClick={handleModalClose}
        aria-label="close modal"
      >
        <span className="visuallyhidden">close</span>
        <img src={iconClose} alt="" />
      </button>
      <VideoDetail data={videoData} />
    </Modal>
  );
};

VideoModal.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  videoData: PropTypes.shape({
    artist: PropTypes.string,
    client: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
