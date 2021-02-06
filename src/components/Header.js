import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* Handles the default header scheme which displays links for navigation*/
const Header = () => {
  const taskLinks = [
    {
      label: "View",
      to: "/tasks/",
    },
    {
      label: "Create",
      to: "/tasks/create",
    },
    {
      label: "Delete",
      to: "/tasks/delete",
    },
  ];
  const links = [
    {
      label: "Jot",
      to: "/",
    },
    {
      label: "Placeholder",
      to: "/tasks",
    },
    {
      label: "Tasks",
      to: "/",
      children: taskLinks,
    },
  ];

  const renderLinks = links.map((link) => {
    if (!link.children) {
      return (
        <div key={link.label} className="my-auto opacity-70 hover:opacity-100">
          <li className="p-4 px-4">
            <Link to={link.to}>{link.label}</Link>
          </li>
        </div>
      );
    } else {
      const renderLinkChildren = link.children.map((childLink, index) => {
        return (
          <Link
            key={index}
            to={childLink.to}
            className="block text-white p-2 opacity-70 hover:opacity-100"
          >
            {childLink.label}
          </Link>
        );
      });
      return (
        <div
          key={link.label}
          className="my-auto relative opacity-70 hover:opacity-100"
        >
          <li className="dropdown p-4 px-4 relative">
            <button>
              {link.label}
              <span className="ml-2">
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </button>
            <div className="dropdown-content  min-w-max	w-full  px-4 absolute rounded-sm shadow-sm	bg-primary">
              {renderLinkChildren}
            </div>
          </li>
        </div>
      );
    }
  });

  return (
    <div className="header h-14">
      <nav className="main-header fixed top-0 bg-primary border-b border-black shadow-lg text-white shadow-md min-w-full">
        <div className="container ml-8">
          <ul className="flex flex-wrap space-x-8 text-center">
            {renderLinks}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
