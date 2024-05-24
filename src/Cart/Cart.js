import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../Store/Cart-context";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items.map((item) => (
    <li key={item.id}>
      <div>
        <h2>
          {item.name}({item.amount})
        </h2>
        <div className={classes.summary}>
          <span className={classes.price}>${item.price.toFixed(2)}</span>
          <span className={classes.price}>
            ${item.price.toFixed(2) * item.amount}
          </span>
        </div>
      </div>
    </li>
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
