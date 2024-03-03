import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isOpen:false,
    dropdownData:{}
}
const addMemberModalSlice = createSlice({
    name: 'addMemberModal',
    initialState,
    reducers: {
        setAddMemberModal: (state, action) => {
            // Update userInfo when user signs in
            state.isOpen = action?.payload?.isOpen;
            state.dropdownData = action?.payload?.dropdownData;
        },
    },
});


export const {setAddMemberModal} = addMemberModalSlice.actions;
export default addMemberModalSlice.reducer;

export const actionToOpenCloseAddMemberModalPopup = (isOpen = false,dropdownData = {}) => async (dispatch) => {
    dispatch(setAddMemberModal({isOpen,dropdownData}));
}