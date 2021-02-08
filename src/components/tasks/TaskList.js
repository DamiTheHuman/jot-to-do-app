import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  deleteTask,
  editTask,
  taskStatus,
  onEditSubmit,
}) => {
  if (!tasks) {
    return (
      <div className="task-list mb-4">You currently have no tasks due</div>
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
          editing={taskStatus.includes(task)}
        />
      </div>
    );
  });

  return <div className="task-list">{renderTaskList}</div>;
};
export default TaskList;
