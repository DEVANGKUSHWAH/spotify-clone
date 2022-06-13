import { combineReducers } from "redux";
import authReducer from "./reducers";
export const rootReducer = combineReducers({authReducer})