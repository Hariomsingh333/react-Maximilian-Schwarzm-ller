import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";
import styled from "styled-components";
const FormDiv = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "black")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  & .invalid input {
    border: #fad0ec 5px solid;
    background-color: #f87d67;
  }
  & .invalid label {
    color: #f87d67;
  }
`;
const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (enteredValue.length > 0) {
      setIsValid(true);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <FormDiv invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormDiv>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
