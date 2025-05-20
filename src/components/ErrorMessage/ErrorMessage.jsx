import { useEffect, useRef } from 'react';
import css from './ErrorMessage.module.css';

const ErrorMessage = ({ toast }) => {
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    toast.error('Network error!');
  }, [toast]);
  return <div className={css.error}>Error when search images!</div>;
};

export default ErrorMessage;
