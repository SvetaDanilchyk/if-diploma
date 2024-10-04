import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

//slice
import { authReducer } from "./auth.slice";
import { userReducer } from "./user.slice";
import { searchReducer } from "./search.slice";
import booksReducer from './booksSlice.slice';

//services

const persistConfig = {
  key: "root",
  storage,
  whitelist: [ "user"], // whitelist: ["auth", "user"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  search: searchReducer,
  books: booksReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
