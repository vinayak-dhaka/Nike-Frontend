import { createSlice } from "@reduxjs/toolkit";

const OrderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    addOrder(state, action) {
      state.push(action.payload);
    },
    removeOrder(state, action) {
      return state.filter((order) => order.id !== action.payload);
    },
    clearOrder() {
      return [];
    },
  },
});
export default OrderSlice;
export const OrderActions = OrderSlice.actions;
