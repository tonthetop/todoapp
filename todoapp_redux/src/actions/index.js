import * as types from "../constants/actionTypes";

export const saveTask = (task) => {
    return {
        type: types.SAVE_TASK,
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
export const editTask = (task) => {
    return {
        type: types.EDIT_TASK,
        task: task
    }
}
export const resetItemEditting = () => {
    return {
        type: types.RESET_ITEM_EDITING
    }

}

export const searchByName = (keyName) => {
    return {
        type: types.SEARCH_BY_NAME,
        name: keyName
    }
}
export const sort = (sort) => {
    return {
        type: types.SORT,
        sort: sort
    }
}