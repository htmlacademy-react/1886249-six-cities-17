import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx/App';
import { offers } from './libs/mocks/offers';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offers}/>
  </React.StrictMode>
);
