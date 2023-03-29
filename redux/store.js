import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from 'redux';
import thunk from "redux-thunk";
import userReducer from "./reducers";

const rootReducer = combineReducers({userReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));