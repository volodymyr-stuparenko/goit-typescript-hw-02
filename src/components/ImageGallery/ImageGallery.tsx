import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, handleClick }) => {
  return (
    <div className={css.gallery}>
      <ul className={css.imgList}>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} handleClick={handleClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
