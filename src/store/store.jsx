import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../store/postSlice";
const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});
export { store };
