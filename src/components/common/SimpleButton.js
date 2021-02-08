import React from "react";
/** Simple reusable button */
const SimpleButton = ({ background, content, extraStyle, onClick }) => {
  return (
    <button
      className={`${background} ${extraStyle} rounded-sm shadow text-white p-1.5 px-3 block`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
SimpleButton.defaultProps = {
  background: "bg-secondary",
};
export default SimpleButton;
