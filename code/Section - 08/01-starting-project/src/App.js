import React, { useState } from "react";
import Form from "./components/Form/Form";
import RenderData from "./components/list/RenderData";

function App() {
  const onSubmitData = (name, age) => {
    setUserData((preData) => {
      return [...preData, { name: name, age: age }];
    });
  };
  const [UserData, setUserData] = useState([]);
  console.log(UserData);
  return (
    <div>
      <Form onSubmitData={onSubmitData} />
      <RenderData onUserData={UserData} />
    </div>
  );
}

export default App;
