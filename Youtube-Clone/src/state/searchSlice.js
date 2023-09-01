import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheData: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheData } = searchSlice.actions;
export default searchSlice.reducer;
