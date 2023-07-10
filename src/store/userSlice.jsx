import { createSlice } from "@reduxjs/toolkit";
let indexOfEditUser = 0;
const userSlice = createSlice({
  name: "user",
  initialState: {
    userArr: [],
  },
  reducers: {
    loadUserData: (state, action) => {
      let newUserArr = action.payload;

      state.userArr = newUserArr;
    },
    addNewUser: (state, action) => {
      let newUser = action.payload;
      state.userArr.push(newUser);
    },
    deleteUser: (state, action) => {
      const deleteUserId = action.payload;
      state.userArr = state.userArr.filter((data) => data.id !== deleteUserId);
    },
    editUser: (state, action) => {
      const editUserInfo = action.payload;
      const userIndex = state.userArr.findIndex(
        (data) => data.id === editUserInfo.id
      );
      indexOfEditUser = userIndex;
    },
    editUserInputs: (state, action) => {
      let updatedObj = action.payload;
      state.userArr[indexOfEditUser].name = updatedObj.name;
      state.userArr[indexOfEditUser].email = updatedObj.email;
      state.userArr[indexOfEditUser].phone = updatedObj.phone;
      state.userArr[indexOfEditUser].username = updatedObj.username;
    },
  },
});
export const {
  loadUserData,
  addNewUser,
  deleteUser,
  editUser,
  editUserInputs,
} = userSlice.actions;
export default userSlice.reducer;
