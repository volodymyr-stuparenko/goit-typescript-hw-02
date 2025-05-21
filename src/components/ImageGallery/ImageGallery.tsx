import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { Photo } from './ImageGallery.types';

interface ImageGalleryProps {
  sendPhoto: Photo[];
  handleClick: (url: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  sendPhoto,
  handleClick,
}) => {
  return (
    <div className={css.gallery}>
      <ul className={css.imgList}>
        {sendPhoto.map((item) => (
          <li key={item.id}>
            <ImageCard sendItem={item} handleClick={handleClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
