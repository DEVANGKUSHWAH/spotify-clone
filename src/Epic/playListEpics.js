import { ofType } from "redux-observable";
import { mergeMap, map, catchError,of, from } from "rxjs";
import { ActionTypes, Actions } from "../Action/actions";
const axios = require("axios");

export const getCategoriesEpic = (action$, state$) =>
  action$.pipe(
    ofType(ActionTypes.GET_CATEGORIES),
    mergeMap((action) =>
    from(
        axios.get("http://localhost:3001/playlist/categories", action.payload)
      ).pipe(
        map((response) =>Actions.getCategoriesSuccess(response.data)),
        catchError((error) => of(Actions.getCategoriesError(error.response.data)))
      )
    )
  );
