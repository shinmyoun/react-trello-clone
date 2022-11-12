import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskCardTitle } from "./TaskCardTitle";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskAddInput } from "./input/TaskAddInput";
import { Tasks } from "./Tasks";

export const TaskCard = ({
  taskCard,
  taskCardsList,
  setTaskCardsList,
  index,
}) => {
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
    <Draggable index={index} draggableId={taskCard.draggableId}>
      {(provided, snapshot) => (
        <div
          className="taskCard"
          key={taskCard.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
            opacity: snapshot.isDragging ? "0.5" : "1",
          }}
        >
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
      )}
    </Draggable>
  );
};
