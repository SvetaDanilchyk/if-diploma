import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
//slice
import { authReducer } from "./auth.slice";
import { registrReducer } from "./registration.slice";
import { userReducer } from "./user.slice";
import { searchReducer } from "./search.slice";
import booksReducer from "./books.slice";
//services

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  registration: registrReducer,
  user: userReducer,
  search: searchReducer,
  books: booksReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
