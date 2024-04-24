import React from "react";

function Task({text, category, handleDelete}) {
  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button onClick={() => handleDelete(text)} className="delete">X</button>
    </div>
  );
}

export default Task;
