import "./App.css";
import productsArray from "./products";
import ProductsPanel from "./components/ProductsPanel";
import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState(productsArray);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevState) => {
      if (prevState.length > 0) {
        return [...prevState.filter(x => x.id !== item.id), item]
      } else {
        return [...prevState, item];
      }
    });
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
