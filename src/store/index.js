import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";
import OrderSlice from "./OrderSlice";
const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchstatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
    order: OrderSlice.reducer,
  },
});
export default store;
