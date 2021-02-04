import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./Welcome";
import Header from "./Header";
import TaskNavigation from "./tasks/TaskNavigation";
import TaskList from "./tasks/TaskList";
import TaskCreate from "./tasks/TaskCreate";
import TaskDelete from "./tasks/TaskDelete";
import TaskItem from "./tasks/TaskItem";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/tasks">
            <div className="flex space-x-8">
              <div className="flex-none">
                <TaskNavigation />
              </div>
              <div className="main mt-8 pr-8 flex-grow">
                <Route path="/tasks" exact component={TaskList} />
                <Route path="/tasks/create" exact component={TaskCreate} />
                <Route path="/tasks/delete" exact component={TaskDelete} />
                <Route path="/tasks/view" exact component={TaskItem} />
              </div>
            </div>
          </Route>

          <Route path="/" exact component={Welcome} />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
