import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./Welcome";
import Navigation from "./navigation/Navigation";
import TaskInbox from "./tasks/TaskInbox";
import Modal from "./common/Modal";

const App = () => {
  /** The current state of the modal */
  const [showModal, setShowModal] = useState(false);
  /** Sets the modal content */
  const modalContent = "";
  return (
    <div className="App">
      <BrowserRouter>
        <div className=" relative z-10">
          <Route path="/" component={Navigation} />
          <Modal
            content={modalContent}
            showModal={showModal}
            setShowModal={setShowModal}
          />
          <Route path="/tasks">
            <div className="relative z-neg10 sm:ml-52 px-4 md:px-8 mb-8 mt-4 flex-grow">
              <Route path="/tasks/" component={TaskInbox}></Route>
            </div>
          </Route>
          <Route path="/" exact component={Welcome} />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
