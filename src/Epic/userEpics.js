import { ofType } from "redux-observable";
import { mergeMap, map, catchError,of, from } from "rxjs";
import { ActionTypes, Actions } from "../Action/actions";
const axios = require("axios");

export const signupUserEpic = (action$, state$) =>
  action$.pipe(
    ofType(ActionTypes.REGISTER),
    mergeMap((action) =>
      from(
        axios.post("http://localhost:3001/user/signup", action.payload)
      ).pipe(
        map((response) => Actions.registerSuccess(response.data)),
        catchError((error) => of(Actions.registerError(error.response.data)))
      )
    )
  );
export const logInUserEpic = (action$,state$) => action$.pipe(
  ofType(ActionTypes.LOG_IN),
  mergeMap((action)=>
  from(
    axios.post("http://localhost:3001/user/login", action.payload)
  ).pipe(
    map((response)=>Actions.logInSuccess(response.data)),
    catchError((error)=> of(Actions.logInError(error.response.data)))
  ))
)
