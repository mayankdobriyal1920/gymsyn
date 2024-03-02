import { combineReducers } from 'redux';
import userSlice from "./reducers/user.slice";

const rootReducer = combineReducers({
    userSignIn:userSlice
});

export default rootReducer;