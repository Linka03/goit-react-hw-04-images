// ImageGalleryItem.jsx
import React from 'react';

const ImageGalleryItem = ({ image, onImageClick }) => (
  <li className="imageGalleryItem">
    <img
      src={image.webformatURL}
      alt=""
      onClick={() => onImageClick(image.largeImageURL)}
    />
  </li>
);

export default ImageGalleryItem;
