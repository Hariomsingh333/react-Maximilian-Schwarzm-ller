import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "+":
      return state + 1;
    case "-":
      return state - 1;
    default:
      return state;
  }
};
const UseReducerTest = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>learning the useReducer hooks</h1>
      <p> this is the state: {state}</p>
      <button onClick={() => dispatch({ type: "+" })}>+</button>
      <button onClick={() => dispatch({ type: "-" })}>-</button>
    </div>
  );
};

export default UseReducerTest;
