import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IModalWindowsInitialState {
    wrongPasswordOrLogin: boolean;
    userAlreadyExist: boolean;
}

const initialState:IModalWindowsInitialState = {
    wrongPasswordOrLogin: false,
    userAlreadyExist: false,
}


export const modalWindowReducer = createSlice(({
    initialState,
    name: 'modalWindow',
    reducers: {
        changeWrongPasswordOrLoginFlag: (state, {payload}:PayloadAction<boolean>) =>{
            return Object.assign(state, {wrongPasswordOrLogin: payload});
        },
        changeUserAlreadyExistFlag: (state, {payload}:PayloadAction<boolean>)=>{
            return Object.assign(state, {userAlreadyExist: payload});
        }
    }
}))


export const {changeWrongPasswordOrLoginFlag, changeUserAlreadyExistFlag} = modalWindowReducer.actions;
export default modalWindowReducer.reducer;