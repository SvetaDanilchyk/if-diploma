import { createSlice } from "@reduxjs/toolkit";

// constants
import { INITIAL_STATE } from "../../constans/initialState";

export const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE.auth,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
     
      console.log('Auth status:', state.status);
    },
    resetStatus: () => INITIAL_STATE.auth,
    logout: (state) => {
      state.status = INITIAL_STATE.auth.status;
      state.user = INITIAL_STATE.user;
    },
  },
});

export const { setStatus, resetStatus, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
