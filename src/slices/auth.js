import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

export const login = createAsyncThunk(
  "auth/login",
  async ({ params }, thunkAPI) => {
    try {
      const data = await AuthService.login(params.email, params.pwd);
      return { user: data };
    } catch (error) {}
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ email, pwd }, thunkAPI) => {
    try {
      const response = await AuthService.register(email, pwd);
      return response.data;
    } catch (error) {}
  }
);

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;

export const isLoggedIn = (state) => state.auth.isLoggedIn;

export default reducer;
