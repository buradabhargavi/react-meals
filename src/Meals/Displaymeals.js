import React from "react";
import classes from "./Displaymeals.module.css";

const Displaymeals = (props) => {
  return (
    <div className={classes.mealItem}>
      <span>{props.item.name}</span>
      <i>{props.item.description}</i>
      <b style={{ color: "red" }}>${props.item.price}</b>
    </div>
  );
};

export default Displaymeals;
