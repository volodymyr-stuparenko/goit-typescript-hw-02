import css from './ImageCard.module.css';

const ImageCard = ({ handleClick, sendItem }) => {
  return (
    <div className={css.imgWrapper}>
      <img
        className={css.img}
        onClick={() => handleClick(sendItem.urls.regular)}
        src={sendItem.small}
        width={400}
        max-height={400}
      />
    </div>
  );
};

export default ImageCard;
