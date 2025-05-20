import css from './ImageCard.module.css';

const ImageCard = ({ image, handleClick }) => {
  return (
    <div className={css.imgWrapper}>
      <img
        className={css.img}
        onClick={() => handleClick(image.regular)}
        src={image.small}
        alt={image.alt}
        width={400}
        max-height={400}
      />
    </div>
  );
};

export default ImageCard;
