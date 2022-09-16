import { ToDoListDarkTheme } from "../../Components/Styled-Components/Themes/ToDoListDarkTheme";
import { ADD_TASK, DELETE_TASK, DONE_TASK } from "../types/TodolistTypes";
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
      const index = taskListUpdate.findIndex(
        (task) => task.taskName === action.newTask.taskName
      );

      if (index !== -1) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Trùng task roài má nội ưiiiii!",
        });
        return { ...state };
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

    case DONE_TASK: {
      let taskListUpdate = [...state.taskList];
      const index = taskListUpdate.findIndex(
        (task) => task.id === action.taskId
      );
      console.log(index);
      if (index !== -1) {
        taskListUpdate[index].done = true;
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Xong task này roài à, 10 đỉmmm!",
        });
      }
      state.taskList = taskListUpdate;
      return { ...state };
    }

    case DELETE_TASK: {
      let taskListUpdate = [...state.taskList];
      let result = taskListUpdate.filter((task) => task.id !== action.taskId);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Xóa task thành cmn công!",
      });
      return { ...state, taskList: result };
    }
    default:
      return { ...state };
  }
};

export default TodolistReducer;
