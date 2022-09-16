import { ADD_TASK } from "../types/TodolistTypes";

export const addTaskAction = newTask =>({
    type: ADD_TASK,
    newTask
});