import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import {
  getLocalStorageStatus,
  saveLocalStorageStatus,
} from "../api/localStorageStatusApi";
import AcceptCookies from "./common/AcceptCookies";
import SimpleButton from "./common/SimpleButton";
import Welcome from "./Welcome";
import Navigation from "./navigation/Navigation";
import TaskInbox from "./tasks/TaskInbox";
import Modal from "./common/Modal";

const App = () => {
  /** The current state of the modal */
  const [showModal, setShowModal] = useState(!getLocalStorageStatus());
  /** Sets the modal content */
  const modalContent = () => {
    return (
      <div>
        <AcceptCookies />
        <SimpleButton
          content="Continue"
          onClick={() => {
            saveLocalStorageStatus();
            setShowModal(false);
          }}
        />
      </div>
    );
  };
  return (
    <div className="App">
      <BrowserRouter>
        <div className=" relative z-10">
          <Route path="/" component={Navigation} />
          <Route path="/tasks">
            <Modal
              content={modalContent()}
              showModal={showModal}
              noClose
              title="Demo Notice"
              setShowModal={setShowModal}
            />
            <div className="relative z-neg10 sm:ml-52 px-4 md:px-8 mb-8 mt-4 flex-grow">
              <Route path="/tasks/" component={TaskInbox}></Route>
            </div>
          </Route>
          <div className="mt-2">
            <Route path="/" exact component={Welcome} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
