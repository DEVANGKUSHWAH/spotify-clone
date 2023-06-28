import { ofType } from "redux-observable";
import { mergeMap, map, catchError,of, from } from "rxjs";
import { ActionTypes, Actions } from "../Action/actions";
import { BASE_URL } from "../Helper/Helper";
const axios = require("axios");

export const getCategoriesEpic = (action$, state$) =>
  action$.pipe(
    ofType(ActionTypes.GET_CATEGORIES),
    mergeMap((action) =>
    from(
        axios.get(BASE_URL+"playlist/categories")
      ).pipe(
        map((response) =>Actions.getCategoriesSuccess(response.data)),
        catchError((error) => of(Actions.getCategoriesError(error.response.data)))
      )
    )
  );

export const getPlaylistEpic = (action$, state$) =>
  action$.pipe(
    ofType(ActionTypes.GET_PLAYLIST),
    mergeMap((action) =>
      from(axios.get(BASE_URL + "playlist/getPlayLists")).pipe(
        map((response) => Actions.getPlaylistSuccess(response.data)),
        catchError((error) =>
          of(Actions.getPlaylistError(error.response.data))
        )
      )
    )
  );
  
  export const getSongsEpic = (action$, state$) =>
    action$.pipe(
      ofType(ActionTypes.GET_SONGS),
      mergeMap((action) =>
        from(
          axios.get(
            BASE_URL + "playlist/getSongsFromPlaylist/" + action.payload
          )
        ).pipe(
          map((response) => Actions.getSongsSuccess(response.data)),
          catchError((error) => of(Actions.getSongsError(error.response.data)))
        )
      )
    );