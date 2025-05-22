import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { setupFadeInAnimation } from './utils/animation.ts';
import './index.css';

const Root = () => {
  useEffect(() => {
    setupFadeInAnimation();
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(<Root />);