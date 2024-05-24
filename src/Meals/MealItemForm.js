import React, { useRef, useContext } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import CartContext from "../Store/Cart-context";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const cartCtx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: enteredAmountNumber,
      price: props.price,
    });
  };

  return (
    <form className={classes.addbtn} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
          ref: amountInputRef,
        }}
      />
      <button className={classes.btncls}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
