import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";
const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchstatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});
export default store;
