import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./store.js"; // Import the Redux store
import App from "./App"; // Import the main App component

// Wrap the App component with Provider and pass the Redux store
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
