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
    var id = null;

    switch (action.type) {
        case types.LIST_ALL:
            return [...state];
        case types.ADD_TASK:
            var newTask = {
                id: generateID(),
                name: action.task.name,
                status: action.task.status,
            };
            state.push(newTask);
            localStorage.setItem("tasks", JSON.stringify(state));
            return [...state];
        case types.GENERATE_TASK:
            if (state.length === 0) {
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
        case types.UPDATE_STATUS:
            // id = state.findIndex((e) => e.id === action.id);
            // state[id] = {
            //     ...state[id],
            //     status: !state[id].status
            // }
            // localStorage.setItem("tasks", JSON.stringify(state));
            // return [...state]

            let stateAnother = JSON.parse(JSON.stringify(state));
            let item = stateAnother.find((e) => e.id === action.id);
            item.status = !item.status
            localStorage.setItem("tasks", JSON.stringify(stateAnother));
            return stateAnother;
        case types.DELETE_TASK:
            id = state.findIndex((item) => item.id === action.id)
            state.splice(id, 1)
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state]
        default:
            return state;
    }
};
export default myReducer;