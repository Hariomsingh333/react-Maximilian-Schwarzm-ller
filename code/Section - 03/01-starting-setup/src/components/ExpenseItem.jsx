import React, { useState } from "react";
import Card from "./Card";
import "./css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  // const date = new Date();
  let handleClick = () => {
    console.log("button is clicked");
  };
  return (
    <Card className="expense-item">
      <div className="">
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={handleClick}>Title Change</button>
    </Card>
  );
};

export default ExpenseItem;
