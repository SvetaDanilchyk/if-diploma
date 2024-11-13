import { createSlice } from "@reduxjs/toolkit";
//constans
import { AUTH_STATUSES } from "../../constans/authStatuses";

const saveToLocalStorage = (state) => {
  localStorage.setItem('auth', JSON.stringify({ status: state.status, error: state.error }));
};

const loadFromLocalStorage = () => {
  const savedAuth = localStorage.getItem('auth');
  try {
    const parsedAuth = JSON.parse(savedAuth);
    if (parsedAuth && typeof parsedAuth === 'object' && 'status' in parsedAuth) {
      return parsedAuth;
    }
  } catch (error) {
    console.error("Error parsing auth state from localStorage", error);
  }
  return {
    status: AUTH_STATUSES.loggedOut,
    error: null,
  };
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: AUTH_STATUSES.loggedOut,
    isLoggingIn: false,  
    error: null
  }, 
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
      saveToLocalStorage(state);
    },
    setLoggingIn: (state, action) => {
      state.isLoggingIn = action.payload; 
    },
    logout: (state) => {
      state.status = AUTH_STATUSES.loggedOut;
      state.isLoggingIn = false; 
      saveToLocalStorage(state);
      localStorage.removeItem('auth');
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    loadStateFromLocalStorage: (state) => {
      const loadedState = loadFromLocalStorage();
      state.status = loadedState.status;
      state.error = loadedState.error;
    }
  }
});

export const { setStatus, setError, logout, setLoggingIn, loadStateFromLocalStorage } = authSlice.actions;
export const authReducer = authSlice.reducer;

