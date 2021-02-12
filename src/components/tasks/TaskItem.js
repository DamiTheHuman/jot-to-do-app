import React, { useState } from "react";
import {
  faEllipsisH,
  faAngleDoubleUp,
  faFlag,
  faFlagCheckered,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getPriorityData } from "../../api/tasksAPI";
import SimpleButton from "../common/SimpleButton";
const TaskItem = ({
  task,
  deleteTask,
  editTask,
  onEditSubmit,
  onEditCancel,
  editing,
}) => {
  const [taskValue, setTaskValue] = useState(task.task);
  const [taskDueDate, setTaskDueDate] = useState(task.dueDate);
  const [taskPriority, setTaskPriority] = useState(task.priority);

  const onFormSubmit = () => {
    onEditSubmit(task, {
      task: taskValue,
      dueDate: taskDueDate,
      priority: taskPriority,
    });
  };

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
              className="cursor-pointer"
              onClick={() => {
                editTask(task);
              }}
            >
              Edit
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                deleteTask(task);
              }}
            >
              Delete
            </li>
            <li
              className="cursor-pointer"
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
  const renderTaskPriority = getPriorityData().map((priority) => {
    return (
      <li
        className={`cursor-pointer ${priority.color} transform hover:scale-125`}
        key={priority.value}
        onClick={() => {
          setTaskPriority(priority.value);
        }}
      >
        <FontAwesomeIcon
          icon={taskPriority === priority.value ? faFlagCheckered : faFlag}
        />
      </li>
    );
  });
  /* The task is currently being edited*/
  if (editing) {
    return (
      <form
        className="mb-2"
        onSubmit={(event) => {
          event.preventDefault();
          onFormSubmit();
        }}
      >
        <div className="flex">
          <input
            type="input"
            className="flex-grow block placeholder-gray-500 border rounded-sm py-2 px-4 text-gray-700 mb-2 left-input"
            value={taskValue}
            onChange={(event) => {
              setTaskValue(event.target.value);
            }}
          />
          <input
            type="date"
            className="block placeholder-gray-500 border rounded-sm py-2 px-4 text-gray-700 mb-2 right-input text-xs"
            value={taskDueDate}
            onChange={(event) => {
              setTaskDueDate(event.target.value);
            }}
          />
        </div>
        <div className="flex flex-wrap w-100 justify-between items-center">
          <div className="flex h-full space-x-2 mb-2">
            <SimpleButton
              content={<p>Save</p>}
              background="bg-success"
              onClick={() => {
                onFormSubmit();
              }}
            />
            <SimpleButton
              content={<p>Cancel</p>}
              background="bg-danger"
              onClick={() => {
                onEditCancel(task);
                setTaskValue(task.task);
                setTaskDueDate(task.dueDate);
              }}
            />
          </div>
          <div className="border rounded-sm px-4 bg-tertiary">
            <span className="text-xs">Priority: </span>
            <br />
            <ul className="options w-max text-xs justify-end py-2 flex space-x-4">
              {renderTaskPriority}
            </ul>
          </div>
        </div>
        <hr className="my-2" />
      </form>
    );
  }
  return (
    <React.Fragment>
      <div className="height-transition flex items-center mb-2">
        <div className="w-1/12">
          <input
            className="curser-pointer"
            type="checkbox"
            id="completed"
            name="completed"
            value="false"
          />
        </div>
        <div
          className="flex-grow cursor-pointer text-xs sm:text-md"
          onClick={() => {
            editTask(task);
          }}
        >
          {task.task}
        </div>
        <div className="w-4/12 text-right text-muted">
          <p className="text-xs sm:text-sm">
            {task.dueDate}
            <span className="ml-2 cursor-pointer">
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
    </React.Fragment>
  );
};

export default TaskItem;
