import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = () => {
  return (
    <React.Fragment>
      <button className={classes.button}>
        {/* icon */}
        <span className={classes.icon}>
          <CartIcon />
        </span>
        {/* text  */}
        <span>Add</span>
        {/* number  */}
        <span className={classes.badge}>2</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
