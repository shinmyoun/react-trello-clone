import React, { useState } from "react";
import { TaskCard } from "./TaskCard";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { v4 as uuid } from "uuid";

export const TaskCards = () => {
  const taskCardId = uuid();

  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: taskCardId,
      draggableId: `item-${taskCardId}`,
    },
  ]);

  return (
    <div className="taskCardsArea">
      {taskCardsList.map((taskCardList) => (
        <TaskCard key={taskCardList.id} />
      ))}
      <AddTaskCardButton
        taskCardsList={taskCardsList}
        setTaskCardsList={setTaskCardsList}
      />
    </div>
  );
};
