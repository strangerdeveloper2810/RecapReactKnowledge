import {combineReducers} from "redux";
import BurgerReducer from "./BurgerReducer";
import ValidationFormReducer from "./ValidationFormReducer";
import TodolistReducer from "./TodolistReducer";
const rootReducer = combineReducers({
    BurgerReducer,
    ValidationFormReducer,
    TodolistReducer
});

export default rootReducer;