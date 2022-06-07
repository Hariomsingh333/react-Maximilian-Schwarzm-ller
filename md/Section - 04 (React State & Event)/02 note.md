# form control

in react if we made any form or input then we need to control the form using <code>onChange</code> hooks, and value

here the example of how to control the form and you can also look at the ExpenseForm.jsx under the Form directory

```jsx

  const [title, settitle] = useState("");
  const titleChange = (e) => {
    settitle(e.target.value);
  };
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
```

here the doc link - [form doc](https://reactjs.org/docs/forms.html)

# Child-to-Parent Component Communication

if we want to pass data to parent component to child component so we pass the data via props , what if we need send the data to child component to parent component then what should we do?

- we can communicate using function

# how we can Communicate parent to child component

we can make a function to parent component and send the function to child component via props, and in child component we use the function set value as argument and send the data

## reminder these thing

- in react we don't skip any component

what do i mean if you have 2 child component so 1 send the data to 2 then 1 then the parent, don't miss any component to give data

- first make a function to take the data from child component
- the pass it via props

```jsx
// Parent component of ExpenseForm component
// NewExpense.jsx
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
```

- take the function and add the value as argument

```jsx

// child of NewExpense
// ExpenseForm.jsx
const ExpenseForm = (props) => {
  let date = new Date();
  let handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      amount: amount,
      date: currentDate,
    };
    // console.log(`title : ${title},amount: ${amount}, Date: ${currentDate}`);
    // give the data to NewExpense component
    props.onSaveExpenseForm(data);
    settitle("");
    setamount(0);
    setDate("");
  };
```

> same step for passing the data to app component make a function to your parent component and the pass the function via props and the send the data
