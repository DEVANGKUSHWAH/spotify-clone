import { rootEpics, rootReducer } from "./Reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
const epicMiddleWare = createEpicMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleWare),
});
epicMiddleWare.run(rootEpics);
export default store