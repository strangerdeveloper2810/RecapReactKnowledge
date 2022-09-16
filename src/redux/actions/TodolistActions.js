import { ADD_TASK, CHANGE_THEME, DELETE_TASK, DONE_TASK, EDIT_TASK, UPDATE_TASK } from "../types/TodolistTypes";

export const addTaskAction = newTask =>({
    type: ADD_TASK,
    newTask
});

export const doneTaskAction = taskId =>({
    type: DONE_TASK,
    taskId
});

export const deleteTaskAction = taskId =>({
    type: DELETE_TASK,
    taskId
});

export const changeThemeAction = themeId =>({
    type: CHANGE_THEME,
    themeId
});


export const editTaskAction = task =>({
    type: EDIT_TASK,
    task
});

export const updateTaskAction = taskName =>({
    type: UPDATE_TASK,
    taskName
});