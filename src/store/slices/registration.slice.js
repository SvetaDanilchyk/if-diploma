import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("allUsers")) || [],
  user: null,
  error: null,
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { id, email, name, birthdate, password } = action.payload;
      const existingUser = state.users.find((user) => user.email === email);
      if (existingUser) {
        state.error = "User already exists";
      } else {
        const newUser = { id, email, name, birthdate, password, userBooks: [] };
        state.users.push(newUser);
        state.user = newUser;
        state.error = null;
      }
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const existingUser = state.users.find((user) => {
        return user.email === email && user.password === password;
      });

      if (existingUser) {
        state.user = existingUser;
        localStorage.setItem("currentUserId", existingUser.id);
        state.error = null;
      } else {
        state.error = "Invalid email or password";
        state.user = null;
      }
    },
    setAllUsers: (state, action) => {
      state.users = action.payload;
    },
    resetError: (state) => {
      state.error = null;
    },
    loadUserFromLocalStorage: (state, action) => {
      const userId = action.payload;
      const savedUser = JSON.parse(localStorage.getItem(`logInUser-${userId}`));
      state.user = savedUser || null;
    },
  },
});

export const {
  registerUser,
  loginUser,
  setAllUsers,
  resetError,
  loadUserFromLocalStorage,
} = registrationSlice.actions;

export const registrReducer = registrationSlice.reducer;
