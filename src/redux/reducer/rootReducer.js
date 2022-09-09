import {combineReducers} from "redux";
import AppReducer from "./AppReducer";
import BurgerReducer from "./BurgerReducer";
const rootReducer = combineReducers({
    AppReducer,
    BurgerReducer
});

export default rootReducer;