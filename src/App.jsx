import React, { useState, useEffect, useCallback } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';
import { getImages } from './services/api.ts';
import './styles.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleSearchSubmit = newQuery => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleImageClick = largeImageUrl => {
    setSelectedImage(largeImageUrl);
    setShowModal(true);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage('');
  };

  const fetchImages = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await getImages(query, page);

      setImages(prevImages => [...prevImages, ...data.hits]);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    if (query.trim() === '') return;

    fetchImages();
  }, [fetchImages, query]);

  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <Button
          className="loadMoreButton"
          onClick={handleLoadMore}
          disabled={isLoading}
        >
          Load more
        </Button>
      )}
      {showModal && (
        <Modal largeImageUrl={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
