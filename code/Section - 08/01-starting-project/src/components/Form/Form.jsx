import React, { useState } from "react";

const Form = (props) => {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const handleName = (e) => {
    let inp = e.target.value;
    setName(inp);
  };
  const handleAge = (e) => {
    let inp = e.target.value;
    setAge(inp);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Name, Age);
    props.onSubmitData(Name, Age);
    setName("");
    setAge("");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input type="text" id="name" value={Name} onChange={handleName} />
        <br />
        <label htmlFor="age">age</label>
        <input type="number" id="age" value={Age} onChange={handleAge} />
        <br />
        <button>add</button>
      </form>
    </div>
  );
};

export default Form;
