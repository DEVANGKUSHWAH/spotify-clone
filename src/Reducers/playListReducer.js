import {
    ActionTypes
  } from '../Action/actions';
  export const initialState = {
   categories:[]
  }
  export function playListReducer(state = initialState, action) {
    switch (action.type) {
      case ActionTypes.GET_CATEGORIES_SUCCESS:
        return {
          ...state, categories: action.payload
        };
      case ActionTypes.GET_CATEGORIES_ERROR:
        return {
          ...state, categories: action.payload
        };
      default:
        return state;
    }
  }