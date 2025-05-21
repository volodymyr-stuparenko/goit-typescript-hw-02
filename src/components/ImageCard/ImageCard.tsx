import css from './ImageCard.module.css';
import { Photo } from '../ImageGallery/ImageGallery.types';

interface ImageCardProps {
  sendItem: Photo;
  handleClick: (url: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ handleClick, sendItem }) => {
  return (
    <div className={css.imgWrapper}>
      <img
        className={css.img}
        onClick={() => handleClick(sendItem.urls.regular)}
        src={sendItem.urls.small}
        width={400}
        max-height={400}
      />
    </div>
  );
};

export default ImageCard;
