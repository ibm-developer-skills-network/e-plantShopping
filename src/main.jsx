// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import './src/index.css';
import { Provider } from 'react-redux';
import store from './src/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
