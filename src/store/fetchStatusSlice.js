import { createSlice } from "@reduxjs/toolkit";
const fetchStatusSlice = createSlice({
  name: "fetchstatus",
  initialState: {
    fetching: false,
    fetchingdone: false,
  },
  reducers: {
    markfetchingdone(state) {
      state.fetchingdone = true;
      state.fetching = false;
    },

    markfetchingstarted(state) {
      state.fetching = true;
    },
  },
});
export const fetchSliceActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
