import React, { useState } from "react";
import { TaskCardTitle } from "./TaskCardTitle";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskAddInput } from "./input/TaskAddInput";
import { Tasks } from "./Tasks";

export const TaskCard = ({ taskCard, taskCardsList, setTaskCardsList }) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([
    {
      id: 0,
      draggableId: "task-0",
      text: "読書",
    },
    {
      id: 1,
      draggableId: "task-1",
      text: "散歩",
    },
  ]);

  return (
    <div className="taskCard">
      <div className="taskCardTitleAndTaskCardDeleteButtonArea">
        <TaskCardTitle />
        <TaskCardDeleteButton
          taskCard={taskCard}
          taskCardsList={taskCardsList}
          setTaskCardsList={setTaskCardsList}
        />
      </div>
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        setTaskList={setTaskList}
        taskList={taskList}
      />
      <Tasks
        inputText={inputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
};
