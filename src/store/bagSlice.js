import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag(state, action) {
      state.push(action.payload);
    },
    removeFromBag(state, action) {
      return state.filter((item) => item !== action.payload);
    },
    clearbag() {
      return [];
    },
  },
});
export default bagSlice;
export const bagActions = bagSlice.actions;
