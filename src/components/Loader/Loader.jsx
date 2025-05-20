import css from './Loader.module.css';
import BeatLoader from 'react-spinners/BeatLoader';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

const Loader = () => {
  return (
    <div className={css.loader}>
      <BeatLoader
        color="#b29eff"
        loading={true}
        cssOverride={override}
        size={25}
        aria-label="Loading Images..."
      />
    </div>
  );
};

export default Loader;
