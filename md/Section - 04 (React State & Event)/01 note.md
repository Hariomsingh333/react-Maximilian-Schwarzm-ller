# React State & Event

### Event

so how click a button and do something with this button in react.

#### onClick()

so we get a built in event in react called _onClick()_, it is a addEventListener under the hood and use click event

- we Define the onClick
- we need to add a function on it and under the function we need to type or button logic

```jsx
// function
let handleClick = () => {
  console.log("button is clicked");
};

<button onClick={handleClick}>Title Change</button>;
```
