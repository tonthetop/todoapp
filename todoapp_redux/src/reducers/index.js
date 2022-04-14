import { combineReducers } from "redux";
import tasks from "./tasks"
import isDisplayForm from "./isDisplayForm"
import taskEditing from "./taskEditing"
import searchByName from './searchByName'
import sort from './sort'
const myReducers = combineReducers({
    tasks, //tasks
    isDisplayForm, //display Form
    taskEditing, //item Editting
    searchByName,
    sort
});
export default myReducers