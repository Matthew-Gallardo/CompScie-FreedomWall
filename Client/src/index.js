import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import { ContextProvider } from './context/Context';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
   
);
