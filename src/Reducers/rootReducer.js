import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import {authReducer} from "./reducers";
export const rootReducer = combineReducers({authReducer})
// export const rootEpics  = combineEpics()