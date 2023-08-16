import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    date: null,
    script: "",
    breakpoint: "",
    data: null,
  },
  {
    date: null,
    script: "",
    breakpoint: "",
    data: null,
  },
  {
    date: null,
    script: "",
    breakpoint: "",
    data: null,
  },
  {
    date: null,
    script: "",
    breakpoint: "",
    data: null,
  },
];

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateSlot: (state, action) => {
      const { index, newData } = action.payload;
      state[index] = { ...state[index], ...newData };
    },
  },
});

export const { updateSlot } = gameSlice.actions;

export default gameSlice.reducer;
