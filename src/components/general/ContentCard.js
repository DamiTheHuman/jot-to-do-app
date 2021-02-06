import React from "react";

const ContentCard = ({ content }) => {
  return (
    <div className="shadow-xl border rounded-sm">
      <div className="card-content px-4 my-2">{content}</div>
    </div>
  );
};
export default ContentCard;
