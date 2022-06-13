import {ActionTypes} from  '../Action/actions';
export const initialState = {
    loggedIn:""
}
export default function authReducer(state = initialState, action){
    switch(action.type){
        case ActionTypes.LOG_IN_SUCCESS:
            return {...state,loggedIN:action.payload}
        default:
            return state
    }
}