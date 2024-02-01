import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  uid: null,
  premium: false,
  type: "Basic",
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    signOutUser: (state) => {
      state.email = null;
      state.uid = null;
      state.premium = false;
    },
    typeOfSubIsYearly: (state) => {
      state.type = "Premium Plus";
    },
    typeOfSubIsMonthly: (state) => {
      state.type = "Premium";
    },
    setPremiumStatus: (state, action) => {
      state.premium = action.payload;
    },
  },
});

export const {
  setCurrentUser,
  signOutUser,
  upgradeUser,
  typeOfSubIsYearly,
  typeOfSubIsMonthly,
  setPremiumStatus,
} = userSlice.actions;

export default userSlice.reducer;
