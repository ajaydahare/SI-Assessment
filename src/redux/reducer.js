import { v4 as uuidv4 } from "uuid";
const taskData = [
  {
    id: 1,
    title: "Task 1",
    step: 1,
  },
  { title: "Task 2", step: 1, id: 2 },
  { title: "Task 3", step: 2, id: 3 },
  { title: "Task 4", step: 2, id: 4 },
  { title: "Task 5", step: 3, id: 5 },
  { title: "Task 6", step: 4, id: 6 },
];
const reducer = (tasks = taskData, action) => {
  switch (action.type) {
    case "GET_TASKS":
      return tasks;
    case "ADD_TASK":
      return [...tasks,{ id: uuidv4(), step: 1, ...action.payload }];
    case "EDIT_TASK":
      return tasks.map((task) =>
        task.id == action.payload.id ? action.payload : task
      );
    case "DELETE_TASK":
      return tasks.filter((task) => task.id !== action.payload);
    default:
      return tasks;
  }
};

export default reducer;
