import React, { useState, useEffect } from "react";

const Product = ({ id, title, price, quantity, addToCart }) => {
  const [amountSelected, setAmountSelected] = useState(0);

  const onIncrementAmount = () => {
    setAmountSelected((prevState) => prevState + 1);
  };

  const onDecrementAmount = () => {
    setAmountSelected((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      } else {
        return prevState;
      }
    });
  };

  const handleQuantityChange = () => {
    if (amountSelected) {
      let item = {
        id,
        title,
        price,
        amountSelected,
      };
      addToCart(item);
    }
  };

  useEffect(() => {
    handleQuantityChange();
  }, [amountSelected]);

  return (
    <div className="product">
      <h2>{title}</h2>
      <p>${price}</p>
      <p>
        {amountSelected} / {quantity}
      </p>
      <div className="product-actions">
        <button className="product-button" onClick={onDecrementAmount}>
          -
        </button>
        <button className="product-button" onClick={onIncrementAmount}>
          +
        </button>
      </div>
    </div>
  );
};

export default Product;
