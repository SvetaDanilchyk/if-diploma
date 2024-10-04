import { createSlice } from "@reduxjs/toolkit";

//constans
import { INITIAL_STATE } from "../../constans/initialState";


export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE.user,
  reducers: {
    setUser: (state, action) => action.payload,
    resetUser: () => INITIAL_STATE.user,
  },
});

export const { setUser, resetUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
