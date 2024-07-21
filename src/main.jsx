// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '/e-plantShopping/src/App.jsx';
import '/e-plantShopping/src/index.css';
import { Provider } from 'react-redux';
import store from '/e-plantShopping/src/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
