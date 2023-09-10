import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import configSlice from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
    config: configSlice,
  },
});

export default appStore;
