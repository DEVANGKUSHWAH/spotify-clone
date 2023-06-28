import { rootEpics, rootReducer } from "./Reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storageSession from "redux-persist/lib/storage/session";
const epicMiddleWare = createEpicMiddleware();
const persistConfig = {
  key: "spotifyClone",
  storage:storageSession,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(epicMiddleWare),
});
epicMiddleWare.run(rootEpics);
 export const persistor = persistStore(store)