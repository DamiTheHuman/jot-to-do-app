import React from "react";
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
      label: "Tasks",
      to: "/",
      children: taskLinks,
    },
    {
      label: "Placeholder",
      to: "/tasks",
    },
  ];

  const renderLinks = links.map((link) => {
    if (!link.children) {
      return (
        <li key={link.label}>
          <Link to={link.to}>{link.label}</Link>
        </li>
      );
    } else {
      const renderLinkChildren = link.children.map((childLink) => {
        return (
          <Link
            key={childLink.label}
            to={childLink.to}
            className="block text-black p-2"
          >
            {childLink.label}
          </Link>
        );
      });
      return (
        <li className="dropdown" key={link.label}>
          <button>
            {link.label}
            <span className="ml-2">
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </button>
          <div className="dropdown-content w-32 absolute bg-coolgray">
            {renderLinkChildren}
          </div>
        </li>
      );
    }
  });

  return (
    <div className="header h-12">
      <nav className="main-header fixed top-0 bg-primary shadow-lg text-white shadow-md min-w-full">
        <div className="container ml-8">
          <ul className="flex flex-wrap space-x-8 h-12 content-center">
            {renderLinks}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
