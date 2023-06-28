import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { logInUserEpic, signupUserEpic } from "../Epic/userEpics";
import { getCategoriesEpic, getPlaylistEpic, getSongsEpic } from "../Epic/playListEpics";
import {authReducer} from "./reducers";
import {playListReducer} from "./playListReducer";
export const rootReducer = combineReducers({authReducer,playListReducer})
export const rootEpics  = combineEpics(signupUserEpic,logInUserEpic,getCategoriesEpic,getPlaylistEpic,getSongsEpic)