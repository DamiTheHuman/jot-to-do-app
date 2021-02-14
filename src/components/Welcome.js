import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";
import SimpleButton from "./common/SimpleButton";
import JotLogo from "./logo/JotLogo";

/** A welcome splash page which serves as the basis for interaction */
const Welcome = () => {
  return (
    <div className="welcome text-white">
      <div className="text-center tracking-wider center w-max proportional-nums">
        <div className="mb-4">
          <h1 className="text-6xl leading-none font-allura">
            <span className="anim-text">Track It</span>
            <br />
            <span>
              <JotLogo /> It
            </span>
          </h1>
          <p className="sm:text-lg text-md">A To-do app alternative</p>
        </div>
        <div className="w-100">
          <Link to="./tasks/inbox">
            <SimpleButton
              background="bg-primary"
              extraStyle="mx-auto block"
              content="Try The Demo"
            ></SimpleButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
