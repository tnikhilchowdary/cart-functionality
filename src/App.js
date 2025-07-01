import React, { useState } from "react";
import './App.css';
import products from './products'; // Assume this is an array of product objects
import ProductCard from './ProductCard'; // Make sure this file exists and is correctly defined

function App() {
  const [cart, setCart] = useState([]);

  const addtoCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="App">
      <h1>Products List</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addtoCart={addtoCart} />
      ))}
      <h3>Total Items in cart : {cart.reduce((total, item) => total + item.quantity, 0)}</h3>
      <h3>$Total Cost: {cart.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
    </div>
  );
}

export default App;
