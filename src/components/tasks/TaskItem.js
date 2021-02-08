import React, { useState } from "react";
import {
  faComment,
  faEllipsisH,
  faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SimpleButton from "../common/SimpleButton";
const TaskItem = ({ task, deleteTask, editTask, onEditSubmit, editing }) => {
  const [taskValue, setTaskValue] = useState(task.task);
  const [taskDueDate, setTaskDueDate] = useState(task.dueDate);
  /**Shows whether to display the task action for each item*/
  const [taskAction, setTaskAction] = useState(false);
  /**
   * Gets the task action componenet
   * @task the task to perform actions against
   */
  const getTaskAction = (task) => {
    if (taskAction) {
      return (
        <div className="w-100 justify-end flex">
          <ul className="options w-max text-xs bg-tertiary border rounded-sm justify-end px-4 py-2 flex space-x-2">
            <li
              onClick={() => {
                editTask(task);
              }}
            >
              Edit
            </li>
            <li
              onClick={() => {
                deleteTask(task);
              }}
            >
              Delete
            </li>
            <li
              onClick={() => {
                setTaskAction(false);
              }}
            >
              <FontAwesomeIcon icon={faAngleDoubleUp} />
            </li>
          </ul>
        </div>
      );
    } else {
      return null;
    }
  };
  /* The task is currently being edited*/
  if (editing) {
    return (
      <form
        className="mb-2"
        onSubmit={(event) => {
          event.preventDefault();
          onEditSubmit(task, { task: taskValue, dueDate: taskDueDate });
        }}
      >
        <div className="flex">
          <input
            type="input"
            className="w-3/4 block placeholder-gray-500 border rounded-sm py-2 px-4 text-gray-700 mb-2 left-input"
            value={taskValue}
            onChange={(event) => {
              setTaskValue(event.target.value);
            }}
          />
          <input
            type="date"
            className="w-1/4 block placeholder-gray-500 border rounded-sm py-2 px-4 text-gray-700 mb-2 right-input text-xs"
            value={taskDueDate}
            onChange={(event) => {
              setTaskDueDate(event.target.value);
            }}
          />
        </div>
        <SimpleButton
          content={<p>Save</p>}
          background="bg-success"
          onClick={() => {
            onEditSubmit(task, { task: taskValue, dueDate: taskDueDate });
          }}
        />
        <hr className="my-2" />
      </form>
    );
  }
  return (
    <div>
      <div className="flex items-center mb-2">
        <div className="w-1/12">
          <input
            className="rounded-full"
            type="checkbox"
            id="completed"
            name="completed"
            value="false"
          />
        </div>
        <div
          className="flex-grow"
          onClick={() => {
            editTask(task);
          }}
        >
          {task.task}
          <span className="ml-2">
            <FontAwesomeIcon className="text-muted" icon={faComment} />
          </span>
        </div>
        <div className="w-4/12 text-right text-muted">
          <p className="text-sm">
            {task.dueDate}
            <span className="ml-2 relative">
              <FontAwesomeIcon
                icon={faEllipsisH}
                onClick={() => {
                  setTaskAction(!taskAction);
                }}
              />
            </span>
          </p>
          {getTaskAction(task)}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TaskItem;
