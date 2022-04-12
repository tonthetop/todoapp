import { type } from "@testing-library/user-event/dist/type";
import * as types from "../constants/actionTypes";
export const listAll = () => {
    return { type: types.LIST_ALL };
};

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task: task,
    };
};
export const generateTask = () => {
    return {
        type: types.GENERATE_TASK,
    };
};
export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM,
    };
};
export const closeForm = () => {
    return { type: types.CLOSE_FORM };
};
export const openForm = () => {
    return { type: types.OPEN_FORM };
};

export const updateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS,
        id: id
    };
}
export const deleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        id: id
    }
}