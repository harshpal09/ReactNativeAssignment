import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  entries:[]
};

export const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    addEntry: (state, action) => {
      state.entries.push(action.payload);
    },
  },
});

export const { addEntry } = budgetSlice.actions;

export default budgetSlice.reducer;
