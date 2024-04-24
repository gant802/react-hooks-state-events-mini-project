import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [isSelected, setSelectedCategory] = useState("All")
  const [tasks, setTasks] = useState(TASKS)

  const handleOnClick = (category) => {
    setSelectedCategory(category);
  };

  const onTaskFormSubmit = (newTaskObj) => {
    const newTaskAdded = [...tasks, newTaskObj]
    return setTasks(newTaskAdded)
  }
  const selectedTaskList = tasks.filter(task => {
    if (isSelected === "All") {
      return task
    } else if (task.category === isSelected){
      return task
    }
  })
  
  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter handleOnClick={handleOnClick} isSelected={isSelected} categories={CATEGORIES}/>
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES}/>
      <TaskList tasks={selectedTaskList} setTasks={setTasks} />
    </div>
  );
}

export default App;
