import React from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SimpleButton from "../general/SimpleButton";
const TaskList = () => {
  const tasks = [
    {
      id: 1,
      title: "Task",
      status: "Completed",
      desscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie tellus ac tincidunt egestas. Nulla porta augue non quam tristique condimentum ut non ante",
    },
    {
      id: 2,
      title: "Task",
      status: "Completed",
      desscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie tellus ac tincidunt egestas. Nulla porta augue non quam tristique condimentum ut non ante",
    },
    {
      id: 3,
      title: "Task",
      status: "Completed",
      desscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie tellus ac tincidunt egestas. Nulla porta augue non quam tristique condimentum ut non ante",
    },
  ];

  const renderCards = tasks.map((task) => {
    return (
      <div key={task.id} className="task-list-card shadow-xl rounded-md">
        <div className="card-header bg-quaternary rounded-t-md text-white px-2 py-2 text-xl text-left">
          <div className="grid grid-cols-2 items-center">
            <div className="card-task-title">{task.title}</div>
            <div className="card-task-status w-100 text-success text-right">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
          </div>
        </div>
        <div className="card-task-description px-2 my-4 overflow-ellipsis overflow-hidden">
          {task.desscription}
        </div>
        <div className="card-footer px-2 mb-4">
          <div className="flex space-x-2 items-center">
            <div className="w-2/4">
              <p className="text-sm text-left text-muted">2 Days till due</p>
            </div>
            <div className="w-1/4">
              <SimpleButton content="View" extraStyle="min-w-full" />
            </div>
            <div className="w-1/4 mw-100">
              <SimpleButton
                content="Delete"
                background="bg-danger"
                extraStyle="min-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="task-list">
      <h2 className="text-4xl text-primary mb-4">Tasks</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {renderCards}
      </div>
    </div>
  );
};

export default TaskList;
