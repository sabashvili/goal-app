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

  const deleteItemHandler = (id) => {
    const updatedItems = courseGoals.filter((item) => item.id !== id);
    setCourseGoals(updatedItems);
  };

  return (
    <div>
      <GoalForm onAddGoal={addGoalHandler} />
      <ItemList onDeleteItem={deleteItemHandler} items={courseGoals} />
    </div>
  );
}

export default App;
