import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faInbox } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
/* The navigation displayed on mobile devices*/
const MobileNavigation = ({ showSideBar, setShowSideBar }) => {
  return (
    <nav className="mini-footer fixed bottom-0 h-12 z-10">
      <div
        className="fixed bottom-0 z-10 bg-primary text-white py-3 w-full px-8 flex justify-between border-t
border-gray-400 sm:hidden "
      >
        <div className="flex flex-col items-center p-2">
          <button
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className="flex flex-col items-center p-2">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </div>
        <div className="flex flex-col items-center p-2">
          <Link to="/tasks/inbox">
            <FontAwesomeIcon icon={faInbox} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavigation;
