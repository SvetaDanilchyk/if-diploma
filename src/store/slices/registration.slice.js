import { createSlice } from "@reduxjs/toolkit";
import { setUser } from "./user.slice";

const saveAllUsersToLocalStorage = (users) => {
  localStorage.setItem('allUsers', JSON.stringify(users));
};

const loadUsersFromLocalStorage = () => {
  const savedUsers = localStorage.getItem('allUsers');
  return savedUsers ? JSON.parse(savedUsers) : [];
};

export const updateUserAndAllUsers = (updatedUser) => (dispatch, getState) => {
  dispatch(setUser(updatedUser));

  const allUsers = getState().registration.users.map((user) =>
    user.id === updatedUser.id ? updatedUser : user
  );
  localStorage.setItem("allUsers", JSON.stringify(allUsers));
  dispatch(setAllUsers(allUsers));
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState: {
    users: loadUsersFromLocalStorage(), 
    user: null,
    error: null,
  },
  reducers: {
    registerUser: (state, action) => {
      const { id, email, name, birthdate, password } = action.payload;
      const existingUser = state.users.find(user => user.email === email);
    
      if (existingUser) {
        state.error = 'User already exists';
      } else {
        const newUser = { id, email, name, birthdate, password, userBooks: [] };
        state.users.push(newUser);
        state.user = newUser;
        state.error = null;
    
        saveAllUsersToLocalStorage(state.users);
        loadUsersFromLocalStorage(newUser); 
        state.user = newUser; 
      }
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const existingUser = state.users.find(user => user.email === email && user.password === password);

      if (existingUser) {        
        state.user = existingUser;
        state.error = null;
      } else {
        state.error = 'Invalid email or password';
        state.user = null; 
      }
    },
    setAllUsers: (state, action) => {
      state.users = action.payload;
    },
    resetError: (state) => {
      state.error = null;
    }
  }
});

export const { registerUser, loginUser, setAllUsers, resetError } = registrationSlice.actions;
export const registrReducer = registrationSlice.reducer;

