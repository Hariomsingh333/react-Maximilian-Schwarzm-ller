import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  return (
    <div className="new-expense">
      Hello from New Expense
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
