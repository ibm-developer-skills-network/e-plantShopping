import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route path="/shoppingreact" component={App} />
      </Router>
    </Provider>
  </React.StrictMode>
);
