// import Axios from 'axios';
import {handleWebSocketEvent} from "./helpers/WebSocketHelper";

// const api = Axios.create({
//   baseURL: `https://letscall.co.in/api/`
// })


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

