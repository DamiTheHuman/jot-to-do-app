import React from "react";
import {
  faInbox,
  faCalendarAlt,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
/*Side navigation for task related activities and lists */
const TaskNavigation = () => {
  return (
    <div className="task-navigation px-2 mt-4 space-y-4">
      <li className="active">
        <Link to="/tasks/inbox">
          <span className="mx-4">
            <FontAwesomeIcon icon={faInbox} />
          </span>
          Inbox
        </Link>
      </li>
      <li>
        <Link to="/tasks/today">
          <span className="mx-4">
            <FontAwesomeIcon icon={faCalendarDay} />
          </span>
          Today
        </Link>
      </li>
      <li>
        <Link to="/tasks/upcoming">
          <span className="mx-4">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </span>
          Upcoming
        </Link>
      </li>
      <hr />
    </div>
  );
};

export default TaskNavigation;
