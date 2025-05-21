import { useEffect, useState } from 'react';
import { fetchData, Results } from '../../services/MyApi';
import SearchBar from '../SeacrhBar/SearchBar';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handleClick = (imgUrl) => {
    setCurrentImage(imgUrl);
    openModal();
  };

  const handleSearch = async (query, page) => {
    setCurrentPage(page);
    if (page === 1) {
      setImages(() => {
        return [];
      });
    }
    try {
      setLoading(true);
      setError(false);
      const jsonData = await searchImages(query, page);
      if (
        Object.keys(jsonData).length === 0 ||
        !jsonData.results ||
        jsonData.results.length === 0
      ) {
        toast.error('No results!');
        setTotalPages(page);
        return;
      }
      if (page === 1 && jsonData.total_pages) {
        setTotalPages(jsonData.total_pages);
      }
      const newImages = jsonData.results.map((image) => {
        return {
          alt: image.alt_description,
          blurHash: image.blur_hash,
          color: image.color,
          small: image.urls.small,
          regular: image.urls.regular,
          id: image.id,
        };
      });
      if (page === 1) {
        setImages(newImages);
      } else {
        setImages((prev) => {
          return [...prev, ...newImages];
        });
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={css.app}>
      <SearchBar
        onSubmit={(searchQuery) => {
          handleSearch(searchQuery, 1);
          setQuery(searchQuery);
        }}
        toast={toast}
      />
      {images.length > 0 && !error && (
        <ImageGallery images={images} handleClick={handleClick} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage toast={toast} />}
      {currentPage < totalPages && !error && !loading && (
        <LoadMoreBtn loadMore={() => handleSearch(query, currentPage + 1)} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        currentImage={currentImage}
      />
      <Toaster />
    </div>
  );
}

export default App;
