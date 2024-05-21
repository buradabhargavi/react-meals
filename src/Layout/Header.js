import React from "react";
import classes from "./Header.module.css";
import img from "../assets/meals.jpg";
import CartButton from "./CartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      {" "}
      <header className={classes.header}>
        <h1>React Meals</h1>
        <CartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={img} alt="a table" />
      </div>
    </React.Fragment>
  );
};

export default Header;
