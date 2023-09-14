import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { cartData } = cartSlice.actions;
export default cartSlice.reducer;
