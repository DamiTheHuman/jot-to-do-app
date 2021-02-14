import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  deleteTask,
  editTask,
  taskStatus,
  onEditSubmit,
  onEditCancel,
}) => {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="task-list mb-4">
        You currently have no tasks in this category
      </div>
    );
  }
  const renderTaskList = tasks.map((task) => {
    return (
      <div key={task.id} className="mb-2">
        <TaskItem
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
          onEditSubmit={onEditSubmit}
          onEditCancel={onEditCancel}
          editing={taskStatus.includes(task)}
        />
      </div>
    );
  });

  return <div className="task-list">{renderTaskList}</div>;
};
export default TaskList;
