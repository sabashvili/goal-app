import React, { useState } from "react";
import styled from "styled-components";
import styles from "./GoalForm.module.css";

const FormFormat = styled.div`
  margin: 0.5rem 0;
  box-sizing: border-box;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "black" : "red")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "#ccc" : "red")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    background: ${(props) => (props.invalid ? "#white" : "#ffd7d7")};
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const GoalForm = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const inputChangeHandler = (e) => {
    if (e.target.value) {
      setIsValid(true);
    }
    setEnteredValue(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!enteredValue.trim()) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler} id="goal-form">
      <FormFormat invalid={isValid}>
        <label>Course Goal</label>
        <input onChange={inputChangeHandler} type="text"></input>
      </FormFormat>
      <button className={styles.button} type="submit">
        Add Goal
      </button>
    </form>
  );
};

export default GoalForm;
