import {ActionTypes} from  '../Action/actions';
export const initialState = {
    loggedInUser:"",
    registeredUser:""
}
export function authReducer(state = initialState, action){
    switch (action.type) {
      case ActionTypes.LOG_IN_SUCCESS:
        return { ...state, registeredUser: action.payload };
      case ActionTypes.LOG_IN_ERROR:
        return { ...state, registeredUser: action.payload };
      default:
        return state;
    }
}