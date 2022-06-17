import React, { useContext } from "react";
import { createContextFun } from "../context/StateContext";
const UseContextTest = () => {
  let a = useContext(createContextFun);
  return (
    <div>
      UseContextTest
      <h1>Learning the useContext hooks</h1>
      <p>{a.state.name}</p>
    </div>
  );
};

export default UseContextTest;
