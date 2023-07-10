import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../store/postSlice";
import userReducer from "../store/userSlice";
const store = configureStore({
  reducer: {
    posts: postReducer,
    user: userReducer,
  },
});
export { store };
