import { createSlice } from "@reduxjs/toolkit";
//constans
import { AUTH_STATUSES } from "../../constans/authStatuses";

const initialState = {
  status: AUTH_STATUSES.loggedOut,
  isLoggingIn: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setLoggingIn: (state, action) => {
      state.isLoggingIn = action.payload;
    },
    logout: (state) => {
      state.status = AUTH_STATUSES.loggedOut;
      state.isLoggingIn = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setStatus, setError, logout, setLoggingIn } = authSlice.actions;
export const authReducer = authSlice.reducer;
