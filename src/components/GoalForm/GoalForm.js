import React, { useState } from "react";
import "./GoalForm.css";

const GoalForm = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const inputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler} id="goal-form">
      <div className="form-control">
        <label>Course Goal</label>
        <input onChange={inputChangeHandler} type="text"></input>
      </div>
      <button className="button" type="submit">
        Add Goal
      </button>
    </form>
  );
};

export default GoalForm;
