import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const SetSidebarData = createAsyncThunk(
  "sidemenu/SetSidebarData",
  async (arg, { dispatch, getState }) => {
    return arg;
  }
);
export const ToggleSideMenu = createAsyncThunk(
  "sidemenu/ToggleSideMenu",
  async (arg, { dispatch, getState }) => {
    return {};
  }
);
export const ResetSidebarData = createAsyncThunk(
  "sidemenu/ResetSidebarData",
  async (arg, { dispatch, getState }) => {
    return {
      sidebarItems: [],
      status: false,
      loading: false,
    };
  }
);
// Create Slice
const SideMenuReducer = createSlice({
  name: "sidemenu",
  initialState: {
    sidebarItems: [],
    status: false,
    loading: false,
  },
  reducers: {
    // auth/signOut
    ResetData(state, { payload }) {
      state.sidebarItems = [];
    },
  },
  extraReducers: {
    // auth/register

    // auth/userLogin
    [SetSidebarData.pending](state, action) {
      state.loading = true;
    },
    [SetSidebarData.fulfilled](state, { payload }) {
      state.sidebarItems = payload;
      state.status = false;
      state.loading = false;
    },
    [SetSidebarData.rejected](state, action) {
      state.loading = false;
    },
    [ResetSidebarData.pending](state, action) {
      state.loading = true;
    },
    [ResetSidebarData.fulfilled](state, { payload }) {
      state.user = [];
      state.status = false;
      state.loading = false;
    },
    [ResetSidebarData.rejected](state, action) {
      state.status = false;
      state.loading = false;
    },
    [ToggleSideMenu.pending](state, action) {
      state.loading = true;
    },
    [ToggleSideMenu.fulfilled](state, { payload }) {
      state.status = !state.status;
      state.loading = false;
    },
    [ToggleSideMenu.rejected](state, action) {
      state.status = false;
      state.loading = false;
    },
    // auth/memberLogin
  },
});

// Export Selectors
export const sidemenu = SideMenuReducer.reducer;

export const { ResetData } = SideMenuReducer.actions;

export const side_menu_data = (state) => {
  return state.sidemenu.sidebarItems;
};

export const side_menu_status = (state) => {
  return state.sidemenu.status;
};
