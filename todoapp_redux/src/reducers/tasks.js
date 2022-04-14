import * as types from "../constants/actionTypes";
var data = JSON.parse(localStorage.getItem("tasks"));
var initialState = data !== null ? data : [];

var s4 = () => {
    return Math.round((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};

var generateID = () => {
    return `${s4()}-${s4()}-${s4()}-${s4()}-${s4()}`;
};
var myReducer = (state = initialState, action) => {
    var index = null;
    var task = {}
    switch (action.type) {
        case types.SAVE_TASK:
            if (action.task.id === '') {
                task = {
                    id: generateID(),
                    name: action.task.name,
                    status: action.task.status,
                };
                state.push(task);
            }
            index = state.findIndex(e => e.id === action.task.id)
            state[index] = {
                ...state[index],
                name: action.task.name,
                status: action.task.status
            }
            localStorage.setItem("tasks", JSON.stringify(state));
            return [...state];
        case types.GENERATE_TASK:
            if (!state.length) {
                const tasks = [{
                        id: generateID(),
                        name: "Diboi1",
                        status: false,
                    },
                    {
                        id: generateID(),
                        name: "Diboi2",
                        status: true,
                    },
                    {
                        id: generateID(),
                        name: "Diboi3",
                        status: true,
                    },
                ];
                localStorage.setItem("tasks", JSON.stringify(tasks));
                return [...tasks];
            }
            return [...state]
        case types.UPDATE_STATUS:
            index = state.findIndex((e) => e.id === action.id);
            state[index] = {
                ...state[index],
                status: !state[index].status
            }
            localStorage.setItem("tasks", JSON.stringify(state));
            return [...state]

            // let stateAnother = JSON.parse(JSON.stringify(state));
            // let item = stateAnother.find((e) => e.id === action.id);
            // item.status = !item.status
            // localStorage.setItem("tasks", JSON.stringify(stateAnother));
            // return stateAnother;
        case types.DELETE_TASK:
            index = state.findIndex((item) => item.id === action.id)
            state.splice(index, 1)
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state]
        default:
            return state;
    }
};
export default myReducer;