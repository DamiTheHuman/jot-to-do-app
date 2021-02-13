import React from "react";
import TaskNavigationList from "../tasks/TaskNavigationList";
import NavigationList from "../NavigationList";
/* The main header and side bar displayed on the top of the screen*/
const MainNavigation = ({ renderSideBar, showSideBar, links }) => {
  const sidebar = () => {
    if (renderSideBar === false) {
      return null;
    }
    return (
      <div>
        <ul
          className={`${
            showSideBar ? "left-0" : "-left-full sm:left-0"
          } task-navigation transition-all ease-linear duration-200 flex flex-col pl-0 mb-0 mr-auto sm:w-52 w-full sidenav absolute top-0 sm:mt-14 bg-tertiary border-r text-black`}
        >
          <TaskNavigationList />
        </ul>
      </div>
    );
  };
  return (
    <header className="flex flex-wrap fixed top-0 right-0 left-0">
      <div className="links hidden sm:block">
        <nav className="flex flex-wrap align-center border-b bg-primary fixed top-0 right-0 left-0 text-white">
          <NavigationList links={links} />
        </nav>
      </div>
      {sidebar()}
    </header>
  );
};

export default MainNavigation;
