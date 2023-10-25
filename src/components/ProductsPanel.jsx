import React from "react";
import Product from "./Product";

const ProductsPanel = ({ products = [], addToCart }) => {
  return (
    <div className="products-panel">
      {products.map(({ id, title, price, quantity }) => {
        return (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            quantity={quantity}
            addToCart={addToCart}
          />
        );
      })}
    </div>
  );
};

export default ProductsPanel;
