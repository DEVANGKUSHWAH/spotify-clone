import {
    ActionTypes
  } from '../Action/actions';
  export const initialState = {
   categories:[],
   playlists:[],
   songs:[]
  }
  export function playListReducer(state = initialState, action) {
    switch (action.type) {
      case ActionTypes.GET_CATEGORIES_SUCCESS:
        return {
          ...state,
          categories: action.payload,
        };
      case ActionTypes.GET_CATEGORIES_ERROR:
        return {
          ...state,
          categories: action.payload,
        };
      case ActionTypes.GET_PLAYLIST_SUCCESS:
        return {
          ...state,
          playlists: action.payload,
        };
      case ActionTypes.GET_PLAYLIST_ERROR:
        return {
          ...state,
          playlists: [],
        };
      case ActionTypes.GET_SONGS_SUCCESS:
        return {
          ...state,
          songs: action.payload?.data,
        };
      case ActionTypes.GET_SONGS_ERROR:
        return {
          ...state,
          songs: [],
        };
      default:
        return state;
    }
  }