import { SET_SELECTED_CATEGORIES, SET_USER_NAME } from "./actions";

const initialState = {
    category: [],
    name: ''
}

function userReducer(state = initialState, action) {
    switch(action.type) {
        case SET_SELECTED_CATEGORIES:
            return {...state, category: action.payload};

        case SET_USER_NAME:
            return {...state, name: action.payload};
        default: 
            return state;
    }
}

export default userReducer;