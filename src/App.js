import React, { useState } from "react";
import "./App.css";
import GoalForm from "./components/GoalForm/GoalForm";
import ItemList from "./components/ItemList/ItemList";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addGoalHandler = (goal) => {
    setCourseGoals([
      { text: goal, id: Math.random().toString() },
      ...courseGoals,
    ]);
  };

  return (
    <div>
      <GoalForm onAddGoal={addGoalHandler} />
      <ItemList items={courseGoals} />
    </div>
  );
}

export default App;
