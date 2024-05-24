import React from "react";
import classes from "./Displaymeals.module.css";
import MealItemForm from "./MealItemForm";

const Displaymeals = (props) => {
  const price = `$${props.item.price.toFixed(2)}`;

  return (
    <div className={classes.main}>
      <div className={classes.mealItem}>
        <h3>{props.item.name}</h3>
        <i>{props.item.description}</i>
        <b style={{ color: "red" }}>{price}</b>
      </div>
      <MealItemForm
        id={props.item.id}
        name={props.item.name}
        price={props.item.price}
      />
    </div>
  );
};

export default Displaymeals;
