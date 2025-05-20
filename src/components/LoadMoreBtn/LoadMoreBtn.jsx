import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ loadMore }) => {
  return (
    <div>
      <button className={css.btn} type="button" onClick={loadMore}>
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
