import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit, toast }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value.trim();

    if (query == '') {
      toast.error('The field cannot be empty!');
      return;
    }

    onSubmit(query);
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
