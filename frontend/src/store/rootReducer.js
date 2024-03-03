import { combineReducers } from 'redux';
import userSlice from "./reducers/user.slice";
import addMemberModalSlice from "./reducers/add.member.modal.slice";

const rootReducer = combineReducers({
    userSignIn:userSlice,
    addMemberModal:addMemberModalSlice
});

export default rootReducer;