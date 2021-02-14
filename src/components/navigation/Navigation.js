import React from "react";
import "./Navigation.css";
import MainNavigation from "./MainNavigation";
import MobileNavigation from "./MobileNavigation";

/* Handles the default header scheme which displays links for navigation*/
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSideBar: false };
  }

  setShowSideBar = (value) => {
    this.setState({ showSideBar: value });
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      // fetch or other component tasks necessary for rendering
      if (this.state.showSideBar) {
        this.setShowSideBar(false);
      }
    }
  }
  render() {
    const links = [
      {
        label: "Jot",
        style: "font-allura text-2xl",
        to: "/",
      },
      {
        label: "Tasks",
        to: "/tasks/inbox",
      },
    ];
    return (
      <div className="navigation">
        <MainNavigation
          renderSideBar={this.props.location.pathname !== "/"}
          showSideBar={this.state.showSideBar}
          links={links}
        />
        <MobileNavigation
          showSideBar={this.state.showSideBar}
          setShowSideBar={this.setShowSideBar}
        />
      </div>
    );
  }
}

export default Navigation;
