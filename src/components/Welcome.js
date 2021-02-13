import React, { useState, useEffect, useCallback } from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";
import SimpleButton from "./common/SimpleButton";

/** A welcome splash page which serves as the basis for interaction */
const Welcome = () => {
  const animTextList = useCallback(() => ["Track", "Keep", "Mend"], []);
  const [index, setIndex] = useState(0);
  const [animText, setAnimText] = useState("Track");
  useEffect(() => {}, [animTextList]);
  useEffect(() => {
    const action = setTimeout(() => {
      if (index < animTextList().length - 1) {
        setIndex(index + 1);
        setAnimText(animTextList()[index + 1]);
      }
    }, 2950);
    return () => {
      clearTimeout(action);
    };
  }, [animText, index, setIndex, animTextList]);
  return (
    <div className="welcome text-white">
      <div className="text-center tracking-wider center w-max proportional-nums">
        <div className="mb-4">
          <h1 className="sm:text-6xl text-4xl leading-none">
            <span className="anim-text">{animText}</span> It With
            <br /> A <span className="text-primary"> Jot</span>
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
