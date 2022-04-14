import * as types from "../constants/actionTypes";
var initialState = null

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_BY_NAME:
            console.log(action)
            return {

                name: action.name
            };
        default:
            return state;
    }
};
export default myReducer;