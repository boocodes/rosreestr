import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IModalWindowsInitialState {
    wrongPasswordOrLogin: boolean;
}

const initialState:IModalWindowsInitialState = {
    wrongPasswordOrLogin: false,
}


export const modalWindowReducer = createSlice(({
    initialState,
    name: 'modalWindow',
    reducers: {
        changeWrongPasswordOrLoginFlag: (state, {payload}:PayloadAction<boolean>) =>{
            return Object.assign(state, {wrongPasswordOrLogin: payload})
        },
    }
}))


export const {changeWrongPasswordOrLoginFlag} = modalWindowReducer.actions;
export default modalWindowReducer.reducer;