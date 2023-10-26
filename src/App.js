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
        return prevState.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, amountSelected: item.amountSelected };
          } else {
            // return
          }
        });
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
