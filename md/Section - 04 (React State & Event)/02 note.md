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
