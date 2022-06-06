import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios, { AxiosError } from "axios";
import { ApiBaseUrl } from "../Service/config";
import { ClearData, StoreUserData } from "../Service/LocalStorage/LocalStorage";

// Calling API

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async (arg, { dispatch, getState }) => {
    return axios({
      url: `${ApiBaseUrl}api/auth/login`,
      method: "POST",
      data: arg,
    })
      .then(({ data }) => {
        alert("Logged In Successfully");
        StoreUserData(data);
        return { ...data };
      })
      .catch((error) => {
        const err = error;
        alert(
          err?.response?.data?.detail
            ? err?.response?.data?.detail
            : "Error! Try Again later"
        );
        dispatch(userLogin.rejected(err?.response?.data.massege ?? error));
      });
  }
);
export const userLogOut = createAsyncThunk(
  "auth/userLogOut",
  async (arg, { dispatch, getState }) => {
    return null;
    /*return LOGOUT()
      .then(() => {
        alert("Logged Out Sucessfully");
        ClearData();
        return null;
      })
      .catch((error) => {
        const err = error;
        if (err.response?.status === 401) {
          alert("Logged Out successfully");
          return null;
        }
        alert("you need internet connection to log out");
        dispatch(userLogin.rejected(err?.response?.data.massege ?? error));
      });*/
  }
);
export const userLoginLocalStorage = createAsyncThunk(
  "auth/userLogin",
  async (arg, { dispatch, getState }) => {
    return { ...arg };
  }
);

// Create Slice
const AuthReducer = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    loggedIn: false,
  },
  reducers: {
    // auth/signOut
    signOut(state, { payload }) {
      state.user = null;
    },
  },
  extraReducers: {
    // auth/register

    // auth/userLogin
    [userLogin.pending](state, action) {
      state.loading = true;
    },
    [userLogin.fulfilled](state, { payload }) {
      state.user = payload ? payload : null;
      state.loading = false;
      state.loggedIn = true;
    },
    [userLogin.rejected](state, action) {
      state.loading = false;
      state.loggedIn = false;
    },
    [userLogOut.pending](state, action) {
      state.loading = true;
    },
    [userLogOut.fulfilled](state, { payload }) {
      state.user = null;
      state.loading = false;
      state.loggedIn = false;
    },
    [userLogOut.rejected](state, action) {
      state.loading = false;
      state.loggedIn = false;
    },
    // auth/memberLogin
  },
});

// Export Selectors
export const auth = AuthReducer.reducer;

export const { signOut } = AuthReducer.actions;

export const user_selector = (state) => {
  return state.auth.user;
};

export const auth_loading = (state) => {
  return state.auth.loading;
};
export const auth_loggedin = (state) => {
  return state.auth.loggedIn;
};
