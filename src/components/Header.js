import React from "react";
import "./Header.css";
import TaskNavigation from "./tasks/TaskNavigation";
import NavigationList from "./NavigationList";
/* Handles the default header scheme which displays links for navigation*/
const Header = (props) => {
  const links = [
    {
      label: "Jot",
      to: "/",
    },
    {
      label: "Tasks",
      to: "/tasks/inbox",
    },
  ];

  if (props.location.pathname === "/") {
    return (
      <div className="header">
        <nav className="flex flex-wrap align-center border-b bg-primary fixed top-0 right-0 left-0 text-white">
          <NavigationList links={links} />
        </nav>
      </div>
    );
  }
  return (
    <div className="header">
      <nav className="flex flex-wrap align-center border-b bg-primary fixed top-0 right-0 left-0 text-white ">
        <NavigationList links={links} />
        <div>
          <ul className=" task-navigation flex flex-col pl-0 mb-0 mr-auto  w-52 sidenav absolute top-0 left-0 mt-14 bg-tertiary border-r text-black">
            <TaskNavigation />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
