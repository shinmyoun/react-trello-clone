import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";

// タスクを並び替える
const reorder = (taskList, startIndex, endIndex) => {
  const removeTask = taskList.splice(startIndex, 1);
  taskList.splice(endIndex, 0, removeTask[0]);
};

export const Tasks = ({ taskList, setTaskList }) => {
  // ドラッグ && ドロップ終了後、タスクが並び替わる
  const onDragEnd = (result) => {
    // タスクを並び替える
    reorder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
