import React from "react";
import { createTask, fetchTasks, deleteTask, updateTask } from "../../actions";
import { connect } from "react-redux";
import SimpleButton from "../common/SimpleButton";
import { faPlusCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TaskList from "./TaskList";

class TaskInbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: [],
      title: this.getPathTitle(this.props),
      getRequest: "",
      taskStatus: [],
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      // fetch or other component tasks necessary for rendering
      this.setState(
        {
          title: this.getPathTitle(this.props),
        },
        () => {
          this.getTasks();
        }
      );
    }
  }
  componentDidMount() {
    this.setState(
      {
        title: this.getPathTitle(this.props),
      },
      () => {
        this.getTasks();
      }
    );
  }
  /**
   * Gets the a list of tasks depending on the current page title and get request
   */
  getTasks = () => {
    if (this.props.location.search) {
      const searchRequest = this.props.location.search.split("?")[1].split("=");
      const type = searchRequest[0];
      const value = searchRequest[1];
      if (type === "priority") {
        this.setState({
          getRequest: { key: type, value: value },
        });
        this.props.fetchTasks({ type: "all", priority: parseInt(value) });
        return;
      }
    }
    switch (this.state.title) {
      case "upcoming":
        this.props.fetchTasks({ type: "upcoming" });
        break;
      case "today":
        this.props.fetchTasks({ type: "today" });
        break;
      default:
        this.props.fetchTasks({ type: "all" });
        break;
    }
  };

  /**
   * Gets the title to be displayed based on the path
   * @props the current props of the page
   */
  getPathTitle = (props) => {
    const location = props.location.pathname.split("/");
    return location[location.length - 1];
  };
  /**
   * Adds a task to the database
   * @task the task to be added
   */
  addTask = (task) => {
    if (this.state.getRequest) {
      if (this.state.getRequest.key === "priority") {
        task.priority = parseInt(this.state.getRequest.value);
      }
    }
    this.props.createTask(task);
    this.cancelTaskInput(task.id);
  };
  /**
   * Removes a task from the database
   * @task the task to be removed
   */
  deleteTask = (task) => {
    this.props.deleteTask(task.id);
  };
  /**
   * Begins the editing process of a task
   * @task the task to be editted
   */
  editTask = (task) => {
    this.setState({
      taskStatus: [...this.state.taskStatus, task],
    });
  };
  /**
   * Updates the task data by merging the different tasks
   * @task the task to update
   * @newTaskData the new task data to update to
   */
  onEditSubmit = (task, newTaskData) => {
    //Remove the old task from taskStatus to end editing
    this.onEditCancel(task);
    task = { ...task, ...newTaskData }; //Merge the task data
    this.props.updateTask(task);
    this.getTasks();
  };
  /**
   * Removes the currently task being edited
   * @task the task being edited
   */
  onEditCancel = (task) => {
    //Remove the old task from taskStatus to end editing
    this.setState({
      taskStatus: this.state.taskStatus.filter(
        (oldTask) => oldTask === task.id
      ),
    });
  };

  /**
   * Creates a task input field for the user to add a task
   */
  createTaskInput = () => {
    var taskId = this.state.formValues.length;

    const toDateInputValue = function (date) {
      var local = new Date(date);
      local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
      return local.toJSON().slice(0, 10);
    };

    this.setState({
      formValues: [
        ...this.state.formValues,
        { id: taskId, task: "", dueDate: toDateInputValue(new Date()) },
      ],
    });
  };
  /**
   * Removes a field input from the form value
   * @id the id of the field input being removed
   */
  cancelTaskInput = (id) => {
    this.setState({
      formValues: this.state.formValues.filter(
        (inputForm) => inputForm.id !== id
      ),
    });
  };
  /**
   * Updates a field inputs form parent state value
   * @key the key/input being updated
   * @id the id of the field input being edited
   */
  updateTaskInput = (key, id, event) => {
    var newValue = this.state.formValues;
    if (key === "task") {
      newValue[id].task = event.target.value;
      this.setState({ formValues: newValue });
    } else if (key === "dueDate") {
      newValue[id].dueDate = event.target.value;
      this.setState({ formValues: newValue });
    }
  };

  render() {
    const renderInputForms = this.state.formValues.map((formValue) => {
      return (
        <form
          className="add-task mb-2"
          id={`input-form-${formValue.id}}`}
          key={formValue.id}
          onSubmit={(event) => {
            event.preventDefault();
            this.addTask(formValue);
          }}
        >
          <div className="flex">
            <input
              type="input"
              placeholder="what to do?"
              className="w-3/4 block placeholder-gray-500 border rounded-sm py-2 px-4 text-gray-700 mb-2 left-input"
              value={this.state.formValues[formValue.id].task}
              onChange={(event) => {
                this.updateTaskInput("task", formValue.id, event);
              }}
            />
            <input
              type="date"
              className="w-1/4 block placeholder-gray-500 border rounded-sm py-2 px-4 text-gray-700 mb-2 right-input text-xs"
              value={this.state.formValues[formValue.id].dueDate}
              onChange={(event) => {
                this.updateTaskInput("dueDate", formValue.id, event);
              }}
            />
          </div>
          <div className="flex items-center space-x-2">
            <SimpleButton
              content={
                <p>
                  Create
                  <span className="ml-2">
                    <FontAwesomeIcon icon={faPlusCircle} />
                  </span>
                </p>
              }
              background="bg-success"
              onClick={() => {
                this.addTask(formValue);
              }}
            />
            <SimpleButton
              content={
                <p>
                  Cancel
                  <span className="ml-2">
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </span>
                </p>
              }
              background="bg-danger"
              onClick={() => {
                this.cancelTaskInput(formValue.id);
              }}
            />
          </div>
        </form>
      );
    });

    return (
      <div className="task-inbox">
        <h2 className="text-2xl text-primary mb-4 capitalize">
          {this.state.title}
        </h2>
        <TaskList
          tasks={this.props.tasks}
          taskStatus={this.state.taskStatus}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
          onEditSubmit={this.onEditSubmit}
          onEditCancel={this.onEditCancel}
        />
        {renderInputForms}
        <SimpleButton
          content={
            <p>
              New
              <span className="ml-2">
                <FontAwesomeIcon icon={faPlusCircle} />
              </span>
            </p>
          }
          onClick={() => {
            this.createTaskInput();
          }}
        />
      </div>
    );
  }
}

const mapStateProps = (state) => {
  return { tasks: state.tasks };
};
export default connect(mapStateProps, {
  createTask,
  fetchTasks,
  deleteTask,
  updateTask,
})(TaskInbox);
