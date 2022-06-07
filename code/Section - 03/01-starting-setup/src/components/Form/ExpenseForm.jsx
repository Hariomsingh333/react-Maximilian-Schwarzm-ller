import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  let date = new Date();
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(`title : ${title},amount: ${amount}, Date: ${currentDate}`);
    settitle("");
    setamount(0);
    setDate("");
  };

  const [title, settitle] = useState("");
  const [amount, setamount] = useState(0);
  const [currentDate, setDate] = useState("");

  const titleChange = (e) => {
    settitle(e.target.value);
  };
  const amountChange = (e) => {
    setamount(e.target.value);
  };
  const DateChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">
              Title:
              <input
                type="text"
                id="title"
                value={title}
                onChange={titleChange}
              />
            </label>
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">
              Amount:
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={amountChange}
              />
            </label>
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">
              Date:
              <input
                type="date"
                min={date}
                id="amount"
                value={currentDate}
                onChange={DateChange}
              />
            </label>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
