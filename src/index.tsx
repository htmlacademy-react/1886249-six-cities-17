import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx/App';
import { offers } from './libs/mocks/offers';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App offers={offers}/>
    </BrowserRouter>
  </React.StrictMode>
);
