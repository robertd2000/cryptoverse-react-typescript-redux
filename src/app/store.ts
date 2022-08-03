import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/crypto.api";
import { cryptoNewsApi } from "../services/cryptoNews.api";

const rootReducer = combineReducers({
  [cryptoApi.reducerPath]: cryptoApi.reducer,
  [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
});

const setupStore = () =>
  configureStore({
    reducer: rootReducer
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export default setupStore;
