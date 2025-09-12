import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/data";
const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});
export const itemactions = itemsSlice.actions;
export default itemsSlice;
