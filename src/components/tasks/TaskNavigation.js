import React from "react";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/*Side navigation for task related activities and lists */
const TaskNavigation = () => {
  return (
    <div className="task-navigation w-32">
      <div className="text-white h-screen border-r border-tertiary bg-quaternary fixed w-32">
        <div className="task-navigation-list mt-8">
          <a href="/#">
            <p className="text-left">
              <span className="mx-4">
                <FontAwesomeIcon icon={faCalendar} />
              </span>
              Tasks
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TaskNavigation;
