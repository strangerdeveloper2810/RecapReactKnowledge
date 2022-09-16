import { ToDoListDarkTheme } from "../../Components/Styled-Components/Themes/ToDoListDarkTheme";
import { ADD_TASK } from "../types/TodolistTypes";
import Swal from "sweetalert2";
const initialState = {
  themeDefault: ToDoListDarkTheme,
  taskList: [
    { id: 1, taskName: "Learn ReactJS", done: true },
    { id: 2, taskName: "Learn Angular", done: true },
    { id: 3, taskName: "Learn NextJS", done: false },
    { id: 4, taskName: "Learn NestJS", done: false },
  ],
};

const TodolistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      if (action.newTask.taskName.trim() === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Chưa nhập tên task kìa má nội ưiiii!",
        });
        return { ...state };
      }

      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        (task) => task.taskName === action.newTask.taskName
      );

      if (index !== -1) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Trùng task roài má nội ưiiiii!",
        });
        return {...state};
      }
      taskListUpdate.push(action.newTask);
      state.taskList = taskListUpdate;
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Chuẩn cơm mẹ nấu!",
      });

      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default TodolistReducer;
