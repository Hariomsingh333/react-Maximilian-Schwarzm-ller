import React from "react";

const ExpenseForm = () => {
  let date = new Date();
  let handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">
              Title:
              <input type="text" id="title" />
            </label>
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">
              Amount:
              <input type="number" id="amount" />
            </label>
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">
              Date:
              <input type="date" min={date} id="amount" />
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
