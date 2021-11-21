import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ShoppingCartProvider, initialState } from './context/ShoppingCart';
import { ShoppingReducer } from './context/ShoppingReducer'

ReactDOM.render(
  <React.StrictMode>
    <ShoppingCartProvider initialState={initialState} reducer={ShoppingReducer}>

      <App />
    </ShoppingCartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

