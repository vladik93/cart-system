import "./App.css";
import productsArray from "./products";
import ProductsPanel from "./components/ProductsPanel";
import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState(productsArray);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (cart.length > 0) {
      console.log("NOT EMPTY");
    } else {
      setCart([...cart, item]);
    }
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="App">
      <ProductsPanel products={products} addToCart={addToCart} />
    </div>
  );
}

export default App;
