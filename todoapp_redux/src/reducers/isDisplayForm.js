import * as types from "../constants/actionTypes";
var initialState = false


var myReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.CLOSE_FORM:
            return false;
        case types.OPEN_FORM:
            return true;
        case types.TOGGLE_FORM:
            return !state
        default:
            return state
    }

}
export default myReducer