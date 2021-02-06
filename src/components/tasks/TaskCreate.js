import React, { useState } from "react";
import ContentCard from "../general/ContentCard";
import FormBuilder from "../general/FormBuilder";
import MultiStepProgress from "../general/MultiStepProgress";
import SimpleButton from "../general/SimpleButton";
import "./TaskCreate.css";
/** Handles the creation process of task building */
const TaskCreate = () => {
  /* The data relating to the current form the user is interacting with*/
  const [activeCardId, setActiveCardId] = useState(3);
  const [taskObjective, setTaskObjective] = useState("");
  const [taskDescription, setTaskObjectiveDescription] = useState("");
  const [taskAssignee, setTaskAssignee] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [taskList, setTaskList] = useState();
  /** The amount of steps relating to the multi-step form data */
  const stepAmount = 3;
  var currentDate = new Date();
  var dd = String(currentDate.getDate()).padStart(2, "0");
  var mm = String(currentDate.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = currentDate.getFullYear();
  currentDate = yyyy + "-" + mm + "-" + dd;

  const taskInfoForm = [
    {
      type: "input",
      label: "Objective:",
      placeholder: "...",
      stateValue: taskObjective,
      onChange: setTaskObjective,
    },
    {
      type: "text-area",
      label: "Description:",
      placeholder: "...",
      stateValue: taskDescription,
      onChange: setTaskObjectiveDescription,
    },
  ];

  const taskInfoForm2 = [
    {
      type: "select",
      label: "Assignee:",
      options: ["Me", "Myslef", "I"],
      stateValue: taskAssignee,
      onChange: setTaskAssignee,
    },
    {
      type: "date-picker",
      label: "Due Date:",
      min: currentDate,
      stateValue: taskDueDate,
      onChange: setTaskDueDate,
    },
    {
      type: "select",
      label: "List: ",
      options: ["Important", "Planned", "My Day"],
      stateValue: taskList,
      onChange: setTaskList,
    },
  ];

  const getStepButtons = () => {
    const nextButton = () => {
      return (
        <SimpleButton
          extraStyle="my-2 mx-2 w-24"
          content="Next"
          onClick={() => {
            setActiveCardId(activeCardId + 1);
          }}
        />
      );
    };
    const prevButton = () => {
      return (
        <SimpleButton
          background="bg-danger"
          extraStyle="my-2 w-24"
          content="Previous"
          onClick={() => {
            setActiveCardId(activeCardId - 1);
          }}
        />
      );
    };
    const submitButton = () => {
      return (
        <SimpleButton
          extraStyle="my-2 mx-2 w-24"
          background="bg-success"
          content="Submit"
        />
      );
    };
    if (activeCardId <= 1) {
      return nextButton();
    } else if (activeCardId === stepAmount) {
      return (
        <React.Fragment>
          {prevButton()}
          {submitButton()}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        {prevButton()}
        {nextButton()}
      </React.Fragment>
    );
  };
  const getCardContent = () => {
    const slideContent1 = () => {
      return (
        <fieldset>
          <h3 className="text-center my-4 text-xl">
            Please fill out the information below
          </h3>
          <FormBuilder formData={taskInfoForm} />
          <div className="flex items-center justify-center">
            {getStepButtons()}
          </div>
        </fieldset>
      );
    };

    const slideContent2 = () => {
      return (
        <fieldset>
          <h3 className="text-center my-4 text-xl">Who is responsible</h3>
          <FormBuilder formData={taskInfoForm2} />
          <div className="flex items-center justify-center">
            {getStepButtons()}
          </div>
        </fieldset>
      );
    };
    const slideContent3 = () => {
      return (
        <React.Fragment>
          <h3 className="text-center my-4 text-xl">
            Please finalize the information supplied
          </h3>
          {/* Content */}
          <FormBuilder formData={[...taskInfoForm, ...taskInfoForm2]} />
          {/* Footer*/}
          <div className="flex justify-center">{getStepButtons()}</div>
        </React.Fragment>
      );
    };

    if (activeCardId === 3) {
      return slideContent3();
    } else if (activeCardId === 2) {
      return slideContent2();
    } else {
      return slideContent1();
    }
  };

  return (
    <div className="task-create">
      <h2 className="text-4xl text-primary mb-4">Add A Task</h2>
      <div className="mx-auto w-8/12">
        <MultiStepProgress steps={stepAmount} activeCardId={activeCardId} />
        <ContentCard content={getCardContent()} />
      </div>
    </div>
  );
};

export default TaskCreate;
