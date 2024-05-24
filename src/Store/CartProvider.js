import React, { useState } from "react";
import CartContext from "./Cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCart = (item) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (prevItem) => prevItem.id === item.id
      );
      const existingItem = prevItems[existingItemIndex];
      let updatedItems;

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + item.amount,
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = prevItems.concat(item);
      }
      return updatedItems;
    });

    setTotalAmount(
      (prevTotalAmount) => prevTotalAmount + item.price * item.amount
    );
  };

  const removeItemFromCart = (id) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.id === id);
      const existingItem = prevItems[existingItemIndex];
      if (!existingItem) {
        return prevItems;
      }

      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = prevItems.filter((item) => item.id !== id);
      } else {
        updatedItems = prevItems.map((item) =>
          item.id === id ? { ...item, amount: item.amount - 1 } : item
        );
      }

      setTotalAmount((prevTotalAmount) => prevTotalAmount - existingItem.price);
      return updatedItems;
    });
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
