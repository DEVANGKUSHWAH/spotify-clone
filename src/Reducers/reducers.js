import {
  ActionTypes
} from '../Action/actions';
export const initialState = {
  loggedInUser: "",
  registeredUser: ""
}
export function authReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.REGISTER_SUCCESS:
      return {
        ...state, registeredUser: action.payload
      };
    case ActionTypes.REGISTER_ERROR:
      return {
        ...state, registeredUser: action.payload
      };
    case ActionTypes.RESET_LOGIN:
      console.log('here')
      return{
        ...state,loggedInUser:null
      }
    case ActionTypes.LOG_IN_SUCCESS:
      localStorage.setItem('authenticatedUser',action.payload?.data.userToken)
      return {
        ...state, loggedInUser: action.payload
      };
    case ActionTypes.LOG_IN_ERROR:
      return {
        ...state, loggedInUser: action.payload
      };
    default:
      return state;
  }
}