// Modal.jsx
import React from 'react';

const Modal = ({ largeImageUrl, onClose }) => (
  <div className="overlay" onClick={onClose}>
    <div className="modal">
      <img src={largeImageUrl} alt="" />
    </div>
  </div>
);

export default Modal;
