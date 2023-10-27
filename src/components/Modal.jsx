// Modal.jsx
import React from 'react';

const Modal = ({ largeImageUrl, onClose }) => {
  const onOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={onOverlayClick}>
      <div className="modal">
        <img src={largeImageUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;
