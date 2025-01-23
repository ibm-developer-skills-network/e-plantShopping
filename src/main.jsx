import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux'; // Importing the Provider component
import store from './store.js'; // Importing the configured Redux store

// Rendering the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrapping the App component with Provider */}
      <App />
    </Provider>
  </React.StrictMode>,
);