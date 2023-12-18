import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photoURL: "",
  displayName: "",
};

export const userSilce = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
      state.displayName = action.payload.displayName;
    },
    removeUser: (state, action) => {
      state.id = "";
      state.email = "";
      state.photoURL = "";
      state.displayName = "";
    },
  },
});

export const { setUser, removeUser } = userSilce.actions;
export default userSilce.reducer;
