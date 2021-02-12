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
const TaskNavigationList = () => {
  const renderTaskPriority = getPriorityData().map((priority) => {
    return (
      <Link to={`/tasks?priority=${priority.value}`} key={priority.value}>
        <li className="relative nav-link hover:bg-secondary hover:text-white py-4 sm:py-2">
          <span className={`mx-4 ${priority.color}`}>
            <FontAwesomeIcon icon={faCircle} />
          </span>
          Priority {priority.value}
          <span className="divider bg-quinary" />
        </li>
      </Link>
    );
  });
  return (
    <div className="task-navigation sm:text-sm text-md">
      <Link to="/tasks/inbox">
        <li className="relative nav-link active hover:bg-secondary hover:text-white py-4 sm:py-2 pt-4">
          <span className="mx-4">
            <FontAwesomeIcon icon={faInbox} />
          </span>
          Inbox
          <span className="divider bg-quinary" />
        </li>
      </Link>
      <Link to="/tasks/today">
        <li className="relative nav-link active hover:bg-secondary hover:text-white py-4 sm:py-2">
          <span className="mx-4">
            <FontAwesomeIcon icon={faCalendarDay} />
          </span>
          Today
          <span className="divider bg-quinary" />
        </li>
      </Link>
      <Link to="/tasks/upcoming">
        <li className="relative nav-link active hover:bg-secondary hover:text-white py-4 sm:py-2">
          <span className="mx-4">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </span>
          Upcoming
          <span className="divider bg-quinary" />
        </li>
      </Link>
      <hr />
      {renderTaskPriority}
    </div>
  );
};

export default TaskNavigationList;
