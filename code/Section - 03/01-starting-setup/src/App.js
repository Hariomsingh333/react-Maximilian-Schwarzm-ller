import React, { useState } from "react";
import Card from "./components/Card";
// import ExpenseItem from "./components/Expense/ExpenseItem";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/Form/NewExpense";
// import Test from "./components/Test";

// static data to render via props
const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(),
  },
];
const App = () => {
  // take the data from NewExpense component
  const newExpenseData = (newExpenseData) => {
    const ExpenseData = {
      ...newExpenseData,
    };
    console.log(ExpenseData);
    setExpense((preExpense) => {
      return [ExpenseData, ...preExpense];
    });
  };
  const [Expense, setExpense] = useState(dummyExpenses);
  return (
    <div>
      <Card className={`expenses`}>
        <NewExpense ExpenseDataHandler={newExpenseData} />
        <Expenses items={Expense} />
      </Card>
    </div>
  );
};

export default App;
