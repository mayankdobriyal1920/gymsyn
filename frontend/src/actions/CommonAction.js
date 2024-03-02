// import Axios from 'axios';
import {handleWebSocketEvent} from "./helpers/WebSocketHelper";
import {userSignInSuccess} from "../store/reducers/user.slice";

// const api = Axios.create({
//   baseURL: `https://letscall.co.in/api/`
// })


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
export const handleWebSocketEventCall = (data) => async (dispatch,getState) => {
  handleWebSocketEvent(dispatch,getState(),data);
}
// export const actionToExecuteUserSignIn = (loginData) => async (dispatch) => {
//   dispatch(userSignInRequest());
//   try {
//     api.post(`skype/login`,loginData).then(response=>{
//       let userData = response.data;
//       if(response.data){
//         if(response.data.success !== 1){
//           dispatch(userSignInFail({payload:'Wrong Password!'}));
//         } else {
//           // sendWebsocketRequest(JSON.stringify({
//           //   clientId:localStorage.getItem('clientId'),
//           //   data:userData.userData,
//           //   type: "logOutUserFromOtherDevices"
//           // }));
//           dispatch(userSignInSuccess({payload: userData.userData}));
//           localStorage.setItem('userInfo',JSON.stringify(userData.userData));
//           document.location.href = '/app';
//         }
//       }else{
//         dispatch(userSignInFail({payload:'Invalid Login!'}));
//       }
//     })
//   } catch (error) {
//     dispatch(userSignInFail({payload:
//           error.response && error.response.data.message
//               ? error.response.data.message
//               : error.message,
//     }));
//   }
// };

