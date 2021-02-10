import React from "react";
/** Simple reusable button */
const SimpleButton = ({ background, hover, content, extraStyle, onClick }) => {
  return (
    <button className={`${background} ${extraStyle}`} onClick={onClick}>
      <div
        className={`h-full w-full rounded-sm shadow text-white p-1.5 px-3 block hover:${hover}`}
      >
        {content}
      </div>
    </button>
  );
};
SimpleButton.defaultProps = {
  background: "bg-secondary",
  hover: "bg-hover",
};
export default SimpleButton;
