import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Adjust the import path as needed
import ProductList from './ProductList';
import CartItem from './CartItem';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductList />
        <CartItem />
      </div>
    </Provider>
  );
}

export default App;




