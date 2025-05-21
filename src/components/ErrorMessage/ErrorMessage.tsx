import { useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';
import css from './ErrorMessage.module.css';

const ErrorMessage: React.FC = () => {
  const hasFetched = useRef<boolean>(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    toast.error('Network error!');
  }, [toast]);

  return <div className={css.error}>Error when search images!</div>;
};

export default ErrorMessage;
