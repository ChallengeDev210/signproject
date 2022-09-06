import { configureStore } from "@reduxjs/toolkit";

import authreducer from "./slices/auth";
const reducer = {
  auth: authreducer,
};
const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
