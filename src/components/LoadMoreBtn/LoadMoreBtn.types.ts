export interface LoadMoreBtnProps {
  setPage: (currentPage: number) => void;
  totalPages: number;
  currentPage: number;
}
