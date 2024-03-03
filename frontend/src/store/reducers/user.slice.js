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


export const actionToValidateOtpAndLoginUser = () => async (dispatch) => {
  let data = {
    id:'324-ewr-2345-223r-245',
    name:'Mayank Dobriyal',
    is_owner:1,
    gym_data:null
  }
  localStorage.setItem('userInfo',JSON.stringify(data));
  dispatch(userSignInSuccess({...data}));
}
export const actionToAddNewUserGymDetailData = () => async (dispatch) => {
  let data = {
    id:'324-ewr-2345-223r-245',
    name:'Mayank Dobriyal',
    is_owner:1,
    gym_data:{id:"dfdfregt-123213-egrg-4535",name:"Power gym",address:"New Delhi India"}
  }
  localStorage.setItem('userInfo',JSON.stringify(data));
  dispatch(userSignInSuccess({...data}));
}