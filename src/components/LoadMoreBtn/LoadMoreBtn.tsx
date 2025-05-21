import css from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from './LoadMoreBtn.types';

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({
  setPage,
  currentPage,
  totalPages,
}: LoadMoreBtnProps) => {
  return (
    <div>
      <button
        className={css.btn}
        type="button"
        onClick={() => setPage(currentPage + 1)}
      >
        Load more
      </button>
      <span className={css.spanEffect}>Page: {currentPage}</span>
      <span className={css.spanEffect}>Total Page: {totalPages}</span>
    </div>
  );
};

export default LoadMoreBtn;
