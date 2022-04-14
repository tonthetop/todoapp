import * as types from "../constants/actionTypes";
var initialState = null

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT:
            return {
                ...action.sort
            };
        default:
            return state;
    }
};
export default myReducer;