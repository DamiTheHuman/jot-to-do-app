import React from "react";

import SimpleButton from "./SimpleButton";
/* Forces the user to confirm certain actions */
const ConfirmationAction = ({ confirmAction, cancelAction }) => {
  return (
    <React.Fragment>
      <SimpleButton
        content="Yes"
        onClick={() => {
          confirmAction();
        }}
      />
      <SimpleButton
        content="No"
        background="bg-danger"
        onClick={() => {
          cancelAction();
        }}
      />
    </React.Fragment>
  );
};

export default ConfirmationAction;
