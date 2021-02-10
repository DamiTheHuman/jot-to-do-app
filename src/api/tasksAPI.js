const _KEY = "TASKS";
/**
 * Gets a list of the tasks stored in the database
 */
export const getTasks = () => {
  if (!localStorage.getItem(_KEY)) {
    localStorage.setItem(_KEY, JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem(_KEY));
};
/**
 * Save a task to the database
 * @task save the task
 */
export const saveTask = (task) => {
  task.completed = false;
  var allTasks = getTasks();
  allTasks = [...allTasks, task];
  localStorage.setItem(_KEY, JSON.stringify(allTasks));
};
/**
 * Removes a task from the database
 * @id the id of the task being removed
 */
export const removeTask = (id) => {
  var allTasks = getTasks();
  allTasks = allTasks.filter((task) => task.id !== id);
  localStorage.setItem(_KEY, JSON.stringify(allTasks));
};
/**
 * Amends a task by updating its content
 * @newTaskDetails the new task details to be updated to
 */
export const amendTask = (newTaskDetails) => {
  const allTasks = getTasks().map((task) =>
    task.id === newTaskDetails.id ? newTaskDetails : task
  );
  localStorage.setItem(_KEY, JSON.stringify(allTasks));
};
/**
 * Gets a new task id for newly added
 */
export const getNewTaskId = () => {
  return getTasks().length === 0 ? 0 : getTasks()[getTasks().length - 1].id + 1;
};
/**
 * Gets the possible priority data for the tasks
 */
export const getPriorityData = () => {
  return [
    { value: 1, color: "text-danger" },
    { value: 2, color: "text-success" },
    { value: 3, color: "text-warning" },
    { value: 4, color: "text-muted" },
  ];
};
