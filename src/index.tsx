import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import reportWebVitals from './tests/reportWebVitals';
import { DataProvider } from './context/DataContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DataProvider>
    <App />
  </DataProvider>
    
);

reportWebVitals();
