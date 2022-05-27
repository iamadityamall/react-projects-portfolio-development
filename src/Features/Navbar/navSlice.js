import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSidebar: false,
};

const navSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleSidebarButton: (state, action) => {
      state.showSidebar = action.payload;
    },
  },
});

export const { toggleSidebarButton } = navSlice.actions;
export const navReducer = navSlice.reducer;
