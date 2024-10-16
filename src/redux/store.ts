import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlise";
import {
  //FLUSH,
  //PAUSE,
  //PERSIST,
  persistReducer,
  persistStore,
  //PURGE,
  //REGISTER,
  //REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { newsSlice } from "./news/newsSlises";
import { noticesSlice } from "./notices/noticesSlise";
import { friendsSlice } from "./friends/friendsSlices";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "token"],
};

const noticesPersistConfig = {
  key: "notices",
  storage,
  whitelist: ["favorites"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  news: newsSlice.reducer,
  friends: friendsSlice.reducer,
  notices: persistReducer(noticesPersistConfig, noticesSlice.reducer),
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
