import { useEffect, useState } from 'react';
import css from './App.module.css';
import { fetchData } from '../../services/MyApi';
import { Results } from '../../services/MyApi.types';
import ReactModal from 'react-modal';
import SearchBar from '../SeacrhBar/SearchBar';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactModal.setAppElement(rootElement);
}

function App() {
  const [images, setImages] = useState<Results[]>([]);
  const [query, setQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handleClick = (imgUrl: string) => {
    setCurrentImage(imgUrl);
    openModal();
  };

  useEffect(() => {
    const abortController = new AbortController();
    const getData = async () => {
      if (!query) return;
      try {
        setLoading(true);
        const data = await fetchData(
          query,
          currentPage,
          abortController.signal
        );
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
    return () => {
      abortController.abort();
    };
  }, [query, currentPage]);

  const handleChangeQuery = (newQuery: string) => {
    setQuery(newQuery);
    setImages([]);
    setCurrentPage(1);
  };

  return (
    <div className={css.app}>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      {images.length > 0 && !error && (
        <ImageGallery sendPhoto={images} handleClick={handleClick} />
      )}
      {loading && <Loader />}
      {!loading && error && <ErrorMessage />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn
          setPage={setCurrentPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        currentImage={currentImage}
      />
    </div>
  );
}

export default App;
