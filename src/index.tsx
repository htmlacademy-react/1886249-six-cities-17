import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './storage';
import App from './app.tsx/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
