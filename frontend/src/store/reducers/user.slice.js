import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  userInfo: localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo') || `{}`)
  : null,
  loading:false,
  error:null,
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userSignInRequest: (state, action) => {
      // Update userInfo when user signs in
      state.userInfo = action.payload;
    },
    userSignInSuccess: (state, action) => {
      // Update userInfo when user signs in
      console.log('action.payload',action.payload)
      state.userInfo = action.payload;
    },
    userSignInFail: (state) => {
      // Clear userInfo when user signs out
      state.userInfo = null;
    },
    userSignOut: (state) => {
      // Clear userInfo when user signs out
      state.userInfo = null;
    },
  },
});

export const {userSignInRequest,userSignInSuccess,userSignInFail,userSignOut} = userSlice.actions;
export default userSlice.reducer;