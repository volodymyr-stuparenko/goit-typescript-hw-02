import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'modern-normalize';
import './index.css';
import App from './components/App/App';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
    <Toaster reverseOrder={false} />
  </StrictMode>
);
