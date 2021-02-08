import React from "react";
import { Link } from "react-router-dom";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* Renders the navigation List based on the links passed*/
const NavigationList = ({ links }) => {
  const renderLinks = links.map((link) => {
    if (!link.children) {
      return (
        <div key={link.label} className="my-auto opacity-70 hover:opacity-100">
          <li className="inline-block py-2 mr-4">
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
          <li className="dropdown inline-block py-2 mr-4">
            <button>
              {link.label}
              <span className="ml-2">
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </button>
            <div className="dropdown-content  min-w-max	w-full px-4 absolute rounded-sm shadow-sm bg-primary">
              {renderLinkChildren}
            </div>
          </li>
        </div>
      );
    }
  });
  return <React.Fragment>{renderLinks}</React.Fragment>;
};

export default NavigationList;
