import { configureStore } from "@reduxjs/toolkit";
// import GlobalSlice from "../features/GlobalSlice";
import UserDetailsSlice from "../reducers/UserDetailsSlice";
import budgetReducer from "../reducers/budgetReducer";

export const store = configureStore({
    reducer: {
        budget  : budgetReducer,
    },
  })