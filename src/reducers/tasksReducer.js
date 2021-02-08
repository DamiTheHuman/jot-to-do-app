const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_TASK":
      return [...state, action.payload];
    case "GET_TASKS":
      return action.payload;
    case "UPDATE_TASK":
      return state.map((task) => {
        return task.id === action.payload.id ? action.payload : task;
      });
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "VIEW_TASK":
      return action.payload;
    default:
      return state;
  }
};
export default tasksReducer;
