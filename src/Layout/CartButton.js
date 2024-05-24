import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/Cart-context";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numofCartItems = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numofCartItems}</span>
    </button>
  );
};

export default CartButton;
