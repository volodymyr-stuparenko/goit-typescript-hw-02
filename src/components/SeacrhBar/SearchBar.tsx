import css from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { SearchBarProps, SearchForm, SearchFormEvent } from './SeacrhBar.types';

const SearchBar: React.FC<SearchBarProps> = ({
  handleChangeQuery,
}: SearchBarProps) => {
  const handleSubmit = (evt: SearchFormEvent): void => {
    evt.preventDefault();
    const form = evt.target as SearchForm;
    const query: string = form.elements.query.value.trim();

    if (query == '') {
      toast.error('The field cannot be empty!');
      return;
    }

    handleChangeQuery(query);
    form.reset();
  };

  return (
    <header className={css.searchBar}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.search}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        ></input>
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
