import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global } from '@emotion/react';
import { global, reset } from './styles';
import { PropertyProvider } from './context/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <PropertyProvider>
      <App />
    </PropertyProvider>
  </React.StrictMode>
);
