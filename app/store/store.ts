import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import cartReducer from "./features/cartSlice";

const createCustomStorage = () => {
  if (typeof window === "undefined") {
    return {
      getItem: () => Promise.resolve(null),
      setItem: (_key: string, value: any) => Promise.resolve(value),
      removeItem: () => Promise.resolve(),
    };
  }

  return {
    getItem: (key: string) => {
      return new Promise((resolve) => {
        resolve(localStorage.getItem(key));
      });
    },
    setItem: (key: string, value: any) => {
      return new Promise((resolve) => {
        resolve(localStorage.setItem(key, value));
      });
    },
    removeItem: (key: string) => {
      return new Promise((resolve) => {
        resolve(localStorage.removeItem(key));
      });
    },
  };
};

const storage = createCustomStorage();

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
