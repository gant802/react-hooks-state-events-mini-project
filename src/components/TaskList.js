import React from "react";
import Task from './Task'

function TaskList({tasks, setTasks}) {
  
  

function handleDelete(taskName) {
  const updatedTasks = tasks.filter(task => taskName !== task.text )
  return setTasks(updatedTasks)
}


  const tasksList = tasks.map(task => {
      return <Task key={task.text} text={task.text} category={task.category} handleDelete={handleDelete}/>
  })

  
  
  return (
    <div className="tasks">
      {tasksList}
    </div>
  );
}

export default TaskList;
