import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginModalOpen: false,
  signupModalOpen: false,
  passwordModalOpen: false,
  openSidebar: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.loginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.loginModalOpen = false;
    },
    openSignupModal: (state) => {
      state.signupModalOpen = true;
    },
    closeSignupModal: (state) => {
      state.signupModalOpen = false;
    },
    openPasswordModal: (state) => {
      state.passwordModalOpen = true;
    },
    closePasswordModal: (state) => {
      state.passwordModalOpen = false;
    },
    openSidebarModal: (state) => {
      state.openSidebar = true;
    },
    closeSidebarModal: (state) => {
      state.openSidebar = false;
    },
  },
});

export const {
  openLoginModal,
  closeLoginModal,
  openSignupModal,
  closeSignupModal,
  openPasswordModal,
  closePasswordModal,
  openSidebarModal,
  closeSidebarModal,
} = modalSlice.actions;

export default modalSlice.reducer;
