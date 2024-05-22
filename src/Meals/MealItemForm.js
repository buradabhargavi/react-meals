import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = () => {
  return (
    <form className={classes.addbtn}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.btncls}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
