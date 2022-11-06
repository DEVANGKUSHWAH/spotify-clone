import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { logInUserEpic, signupUserEpic } from "../Epic/userEpics";
import {authReducer} from "./reducers";
export const rootReducer = combineReducers({authReducer})
export const rootEpics  = combineEpics(signupUserEpic,logInUserEpic)