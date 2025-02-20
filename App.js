import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CartItems from "./components/CartItems";

function App() {
  const [viewCart, setViewCart] = useState(false);

  return (
    <div>
      <h1>Paradise Nursery Shopping</h1>
      {viewCart ? (
        <CartItems onContinueShopping={() => setViewCart(false)} />
      ) : (
        <ProductList />
      )}
      <button onClick={() => setViewCart(!viewCart)}>
        {viewCart ? "Back to Shopping" : "View Cart"}
      </button>
    </div>
  );
}

export default App;
