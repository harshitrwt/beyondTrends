
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import React from 'react';

createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
  
    <App />
  
</React.StrictMode>
  
);
