import React from "react";

export const Tasks = ({ inputText, taskList }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div key={task.id}>{task.text}</div>
      ))}
    </div>
  );
};
