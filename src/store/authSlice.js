import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   user: null,
  //   token: null,
  status: "false",
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = "true";
      state.userData = action.payload;
    },
    logout: (state) => {
      state.status = "false";
      state.userData = null;
    },
    // updateUser: (state, action) => {
    //   state.userData = action.payload;
    // },
    // updateToken: (state, action) => {
    //   state.token = action.payload;
    // },
    // updateStatus: (state, action) => {
    //   state.status = action.payload;
    // },
    // updateUserData: (state, action) => {
    //   state.userData = action.payload;
    // },
    // updateUserToken: (state, action) => {
    //   state.token = action.payload;
    // },

  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
