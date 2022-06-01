import React from "react";
import "./css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  // const date = new Date();
  return (
    <div className="expense-item">
      {/* <div className="">{props.date.toISOString()}</div> */}
      <div className="">
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        {/* <h3>{props.date}</h3> */}
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
