import React, { useState } from "react";
import Card from "./Card";
import "./css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  let [title, setTitle] = useState(props.title);
  let handleClick = () => {
    console.log("button is clicked");
    setTitle("btn is clicked");
  };
  return (
    <Card className="expense-item">
      <div className="">
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={handleClick}>Title Change</button>
    </Card>
  );
};

export default ExpenseItem;
