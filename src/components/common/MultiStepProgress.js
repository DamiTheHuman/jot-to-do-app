import React from "react";
/** A multistep progress bar for interactivity when form building */
const MultiStepProgress = ({ steps, activeCardId }) => {
  const listOfNumbers = Array(steps).fill(0);
  const displayNumbers = listOfNumbers.map((empty, index) => {
    return (
      <div
        key={index + 1}
        className={`${
          index + 1 !== listOfNumbers.length ? " progress-bar-item" : ""
        } ${
          index + 1 <= activeCardId - 1 ? "active" : ""
        } text-black relative w-full`}
      >
        <div className="flex items-center justify-center w-full">
          <span className="p-1 px-2 bg-secondary text-white">{index + 1}</span>
        </div>
      </div>
    );
  });
  return (
    <div className={`grid grid-cols-${steps} gap-4 align-center mb-4`}>
      {displayNumbers}
    </div>
  );
};

export default MultiStepProgress;
