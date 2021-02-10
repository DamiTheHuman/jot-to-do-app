import {
  getNewTaskId,
  getTasks,
  saveTask,
  removeTask,
  amendTask,
  getPriorityData,
} from "../api/tasksAPI";

/**
 * fetches a list of tasks
 * @term the type of tasks to be fetches
 */
export const fetchTasks = (term) => async (dispatch) => {
  var response = [];
  const allTasks = getTasks();
  //Filter by type first
  switch (term.type) {
    case "today":
      response = allTasks.filter(
        (task) =>
          new Date(task.dueDate).toDateString() === new Date().toDateString()
      );
      break;
    case "upcoming":
      var date = new Date();
      const sevenDaysAhead = date.setDate(date.getDate() + 7);
      response = allTasks.filter(
        (task) => new Date(task.dueDate).getTime() >= sevenDaysAhead
      );
      break;
    default:
      response = allTasks;
      break;
  }
  //Filter by priority
  if (term.priority) {
    response = response.filter(
      (task) => task.priority === term.priority && term.priority
    );
  }
  dispatch({ type: "GET_TASKS", payload: response });
};
/**
 * Creates a new task and dispatches the event
 * @task the task to create
 */
export const createTask = (task) => async (dispatch) => {
  task.id = getNewTaskId();

  if (!task.priority) {
    task.priority = getPriorityData()[getPriorityData().length - 1].value; //default lowest priority
  }
  saveTask(task);
  dispatch({ type: "CREATE_TASK", payload: task });
};
/**
 * Updates a new task and dispatches the event
 * @task the task to create
 */
export const updateTask = (task) => async (dispatch) => {
  amendTask(task);
  dispatch({ type: "UPDATE_TASK", payload: task });
};
/**
 * Deletes a task and dispatches the event
 * @id the id of the task to delete
 */
export const deleteTask = (id) => async (dispatch) => {
  removeTask(id);
  dispatch({ type: "DELETE_TASK", payload: id });
};
