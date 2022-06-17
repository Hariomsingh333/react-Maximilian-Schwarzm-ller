# useReducer

we use useReducer hook for changing change complex state in react,

sometimes, you have more complex state - for example if it got multiple state, multiple ways of changing it or dependencies to other states

## Syntax

```jsx
const [state, dispatchFn] = useReducer(reducerRn, initialState, initFu);
```

- state - the current state
- dispatchFn - A Function that can be use to dispatch a new action (i.g. update the state)

```jsx
import React, { useReducer } from "react";
let initialState = 0;
let reducerFn = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return (state = state + 1);
    case "DECREMENT":
      return (state = state - 1);
    default:
      return state;
  }
};

const ComponentTest = () => {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  return (
    <div>
      <h1>useReducer</h1>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
    </div>
  );
};

export default ComponentTest;
```
