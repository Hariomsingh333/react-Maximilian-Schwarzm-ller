import React, { createContext } from "react";

export const createContextFun = createContext({});
const StateContext = (props) => {
  let state = {
    name: "Hari om singh",
  };
  return (
    <createContextFun.Provider value={{ state }}>
      {props.children}
    </createContextFun.Provider>
  );
};

export default StateContext;
