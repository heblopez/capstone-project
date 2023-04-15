import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global } from '@emotion/react';
import { global, reset } from './styles';
import { UserProvider } from './context/UserContext';
import { ShowProvider } from './context/ShowContext';
import { PropertyProvider } from './context/PropertyContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <UserProvider>
      <PropertyProvider>
        <ShowProvider>
          <App />
        </ShowProvider>
      </PropertyProvider>
    </UserProvider>
  </React.StrictMode>
);
