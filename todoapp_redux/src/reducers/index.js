import { combineReducers } from "redux";
import tasks from "./tasks"
import isDisplayForm from "./isDisplayForm"
const myReducers = combineReducers({
    tasks, //tasks
    isDisplayForm //display Form
});
export default myReducers