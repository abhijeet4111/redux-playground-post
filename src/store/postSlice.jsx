import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

let intexOfEditPost = 0;

const postSlice = createSlice({
  name: "posts",
  initialState: {
    postArr: [
      {
        postId: uuidv4(),
        caption: "learning redux 1",
        likes: 22,
      },
      {
        postId: uuidv4(),
        caption: "learning redux 2",
        likes: 24,
      },
    ],
  },
  reducers: {
    addLikes: (state, action) => {
      const postID = action.payload;
      const postIndex = state.postArr.findIndex(
        (data) => data.postId === postID
      );
      state.postArr[postIndex].likes += 1;
    },
    addPost: (state, action) => {
      const newObj = action.payload;
      state.postArr.push(newObj);
    },
    deletePost: (state, action) => {
      const deletePostId = action.payload;

      state.postArr = state.postArr.filter(
        (data) => data.postId !== deletePostId
      );
    },
    editPost: (state, action) => {
      const editPostInfo = action.payload;
      const postIndex = state.postArr.findIndex(
        (data) => data.postId === editPostInfo.postId
      );
      intexOfEditPost = postIndex;
    },
    editPostInput: (state, action) => {
      let newCaption = action.payload;
      state.postArr[intexOfEditPost].caption = newCaption;
    },
    getInitialData: (state, action) => {
      let newArr = action.payload;
      state.postArr = newArr;
    },
  },
});
export const {
  addLikes,
  addPost,
  deletePost,
  editPost,
  editPostInput,
  getInitialData,
} = postSlice.actions;
export default postSlice.reducer;
// {
//     postId: uuidv4(),
//     caption: "learning redux 1",
//     likes: 22,
//   },
//   {
//     postId: uuidv4(),
//     caption: "learning redux 2",
//     likes: 24,
//   },
