import * as types from "../constants/actionTypes";
var initialState = {};


var myReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.EDIT_TASK:
            return {...action.task }
        case types.RESET_ITEM_EDITING:
            return {}
        default:
            return state;
    }
};
export default myReducer;