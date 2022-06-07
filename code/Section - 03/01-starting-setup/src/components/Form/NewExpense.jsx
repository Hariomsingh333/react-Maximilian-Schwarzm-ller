import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  // take the data from form component
  const ExpenseFormDatahandler = (ExpenseFormData) => {
    const expenseData = {
      ...ExpenseFormData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    // then pass to app component
    props.ExpenseDataHandler(expenseData);
  };
  return (
    <div className="new-expense">
      Hello from New Expense
      <ExpenseForm onSaveExpenseForm={ExpenseFormDatahandler} />
    </div>
  );
};

export default NewExpense;
