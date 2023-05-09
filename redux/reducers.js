import { SET_SELECTED_CATEGORIES, SET_USER_NAME,  SET_USER_INFO, RESET_ACTION, SET_USER_CATEGORIES} from "./actions";

const initialState = {
    category: [],
    name: '',
    userinfo: [],
    usercategories: []
}

function userReducer(state = initialState, action) {
    switch(action.type) {
        case SET_SELECTED_CATEGORIES:
            return {...state, category: action.payload};
        case SET_USER_CATEGORIES:
            return {...state, usercategories: action.payload};
        case SET_USER_NAME:
            return {...state, name: action.payload};
        case SET_USER_INFO:
            return {...state, userinfo: action.payload}
        case RESET_ACTION: 
            return initialState;
        default: 
            return state;
    }
}

export default userReducer;