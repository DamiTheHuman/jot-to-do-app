import React from "react";
import {
  faInbox,
  faCalendarAlt,
  faCalendarDay,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { getPriorityData } from "../../api/tasksAPI";

/*Side navigation for task related activities and lists */
const TaskNavigation = () => {
  const renderTaskPriority = getPriorityData().map((priority) => {
    return (
      <li
        className="relative nav-link hover:bg-secondary hover:text-white py-2"
        key={priority.value}
      >
        <Link to={`/tasks?priority=${priority.value}`}>
          <span className={`mx-4 ${priority.color}`}>
            <FontAwesomeIcon icon={faCircle} />
          </span>
          Priority {priority.value}
        </Link>
        <span className="divider bg-quinary" />
      </li>
    );
  });
  return (
    <div className="task-navigation text-sm">
      <li className="relative nav-link active hover:bg-secondary hover:text-white py-2">
        <Link to="/tasks/inbox">
          <span className="mx-4">
            <FontAwesomeIcon icon={faInbox} />
          </span>
          Inbox
        </Link>
        <span className="divider bg-quinary" />
      </li>
      <li className="relative nav-link active hover:bg-secondary hover:text-white py-2">
        <Link to="/tasks/today">
          <span className="mx-4">
            <FontAwesomeIcon icon={faCalendarDay} />
          </span>
          Today
        </Link>
        <span className="divider bg-quinary" />
      </li>
      <li className="relative nav-link active hover:bg-secondary hover:text-white py-2">
        <Link to="/tasks/upcoming">
          <span className="mx-4">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </span>
          Upcoming
        </Link>
        <span className="divider bg-quinary" />
      </li>
      <hr />
      {renderTaskPriority}
    </div>
  );
};

export default TaskNavigation;
