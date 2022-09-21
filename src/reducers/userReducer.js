import { SET_USER } from "../actions/actionType";

const INITIAL_STATE = {
    user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
}

export default userReducer;
//userReducer is a type of state updater
//updates no. of likes or comments based
//on switch condition