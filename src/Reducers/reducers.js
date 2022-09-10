import {ActionTypes} from  '../Action/actions';
export const initialState = {
    loggedInUser:0
}
export function authReducer(state = initialState, action){
    switch(action.type){
        case ActionTypes.LOG_IN:
            return {...state,loggedInUser:state.loggedInUser+1}
        default:
            return state
    }
}