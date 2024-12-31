import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

export const selectUser = (state) => state.user;

export const memoizedSelectUser = createSelector([selectUser], (user) => user);

const initialState = {
  id: null,
  email: "",
  password: "",
  name: "",
  userBooks: [],
  userWaiting: [],
  loadedFromLocalStorage: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, email, password, name, userBooks, userWaiting } =
        action.payload;
      state.id = id;
      state.email = email;
      state.password = password;
      state.name = name;
      state.userBooks = userBooks || [];
      state.userWaiting = userWaiting || [];
    },

    updateUserBooks: (state, action) => {
      const { userId, book } = action.payload;
      if (state.id === userId && book) {
        const existingBook = state.userBooks.find((b) => b.id === book.id);
        if (!existingBook) {
          state.userBooks.push(book);
        }
      }
    },

    resetUser: (state) => {
      state.id = null;
      state.email = "";
      state.password = "";
      state.name = "";
      state.userBooks = [];
      state.userWaiting = [];
    },

    loadUserFromLocalStorage: (state, action) => {
      const { id, email, password, name, userBooks, userWaiting } =
        action.payload;
      state.id = id;
      state.email = email;
      state.password = password;
      state.name = name;
      state.userBooks = userBooks || [];
      state.userWaiting = userWaiting || [];
      state.loadedFromLocalStorage = true;
    },
  },
});

export const { setUser, resetUser, updateUserBooks, loadUserFromLocalStorage } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
