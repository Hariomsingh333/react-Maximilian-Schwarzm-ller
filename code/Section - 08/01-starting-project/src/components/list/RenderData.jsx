import React from "react";

const RenderData = (props) => {
  return (
    <div>
      {props.onUserData.map((data) => {
        return (
          <li key={Math.random()}>
            Name: {data.name}, Age: {data.age}
          </li>
        );
      })}
    </div>
  );
};

export default RenderData;
