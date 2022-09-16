import { ADD_TASK, DELETE_TASK, DONE_TASK } from "../types/TodolistTypes";

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