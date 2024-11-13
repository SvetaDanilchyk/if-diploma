import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from 'reselect';

export const selectUser = (state) => state.user;

export const memoizedSelectUser = createSelector(
  [selectUser],
  (user) => user 
);

export const loadUserFromLocalStorage = (userId) => {
  const savedUser = localStorage.getItem(`logInUser-${userId}`);
  return savedUser ? JSON.parse(savedUser) : { userBooks: [], userWaiting: [] };
};

export const saveUserToLocalStorage = (user) => {
  if (user?.id) {
    localStorage.setItem(`logInUser-${user.id}`, JSON.stringify(user));

    const allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];
    const userIndex = allUsers.findIndex(u => u.id === user.id);

    if (userIndex !== -1) {
      allUsers[userIndex] = user; 
    } else {
      allUsers.push(user);
    }
    localStorage.setItem('allUsers', JSON.stringify(allUsers));
  }
};

const getInitialState = () => {
  const savedUserId = localStorage.getItem('currentUserId');
  if (savedUserId) {
    const savedUser = loadUserFromLocalStorage(savedUserId);
    if (savedUser) {
      return {
        ...savedUser,
        loadedFromLocalStorage: true
      };
    }
  }
  return {
    id: null,
    email: '',
    password: '',
    name: '',
    userBooks: [],
    userWaiting: [],
    loadedFromLocalStorage: false,
  };
};

export const userSlice = createSlice({
  name: "user",
  initialState: getInitialState(),
  reducers: {
    setUser: (state, action) => {
      const { id, email, password, name, userBooks, userWaiting } = action.payload;
      state.id = id;
      state.email = email;
      state.password = password;
      state.name = name;
      state.userBooks = userBooks || [];
      state.userWaiting = userWaiting || []; 
      
      saveUserToLocalStorage(state); 
    },
    
    updateUserBooks: (state, action) => {
      const { userId, book } = action.payload;
      if (state.id === userId && book) { 
        const existingBook = state.userBooks.find((b) => b.id === book.id);
        if (!existingBook) {
          state.userBooks.push(book);
        }
        saveUserToLocalStorage(state);
      }
    },

    resetUser: (state) => {
      state.id = null;
      state.email = '';
      state.password = '';
      state.name = '';
      state.userBooks = [];
      state.userWaiting = [];
    },
  }
});

export const { setUser, resetUser, updateUserBooks } = userSlice.actions;
export const userReducer = userSlice.reducer;
