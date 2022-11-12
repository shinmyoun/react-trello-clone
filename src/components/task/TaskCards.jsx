import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
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

  // タスクを並び替える
  const reorder = (taskCardsList, startIndex, endIndex) => {
    const removeTask = taskCardsList.splice(startIndex, 1);
    taskCardsList.splice(endIndex, 0, removeTask[0]);
  };

  // ドラッグ && ドロップ終了後、タスクが並び替わる
  const onDragEnd = (result) => {
    // タスクを並び替える
    reorder(taskCardsList, result.source.index, result.destination.index);
    setTaskCardsList(taskCardsList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className="taskCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                index={index}
                taskCard={taskCard}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
