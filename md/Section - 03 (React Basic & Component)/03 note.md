# React composition, Containment (child props)

i think go to this link down Below and read the doc

[Containment doc](https://reactjs.org/docs/composition-vs-inheritance.html)

first i create a component called "card"

- i take props as argument
- then render the all the things in props using the children keyword
- props.children is not an argument props it define by react automatically
- we don't set any children props in the card component but it work because it define by react

```jsx
import React from "react";

const Card = (props) => {
  return <div>{props.children}</div>;
};

export default Card;
```

and then i just rape ExpenseItem component to Card component instead of div

```jsx
import React from "react";
import Card from "./Card";
import "./css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  // const date = new Date();
  return (
    <Card className="expense-item">
      <div className="">
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
```

you will see that all style will be broke because some bug up here so here why

- because your component does not know what is classname you need to tell the component that this is a class

for that go to your card component and add your class name and + props.classname

```jsx
import React from "react";
import "./css/Card.css";

const Card = (props) => {
  const classes = `card  ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
```
