import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";
import Cart from "./CartItem.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/shoppingreact",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
  },
  {
    path: "/shoppingreact/cart",
    element: (
      <Provider store={store}>
        <Cart />
      </Provider>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Provider store={store}>
      <App />
    </Provider> */}
  </React.StrictMode>
);
