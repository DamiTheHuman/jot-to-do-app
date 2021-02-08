import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";
/** A welcome splash page which serves as the basis for interaction */
const Welcome = () => {
  return (
    <div className="welcome text-white">
      <div className="text-center tracking-wider center w-max proportional-nums">
        <div className="mb-4">
          <h1 className="text-6xl leading-none">
            Track it With
            <br /> A <span className="text-primary"> Jot</span>
          </h1>
          <p className="text-lg">A To-do app alternative</p>
        </div>
        <div className="w-100">
          <Link to="./tasks/inbox">
            <button className="bg-primary hover:bg-secondary rounded-md text-white p-2 mx-auto block px-8">
              Try The Demo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
