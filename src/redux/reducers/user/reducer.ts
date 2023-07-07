import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IInitialState{
    username: string;
    lastname: string;
    firstname: string;
    company: string;
    region: string;
}

const initialState = {
    username: "",
    lastname: "",
    firstname: "",
    company: "",
    region: "",
}

// actions interfaces
interface IChangeUserDataByFirstRegistrationStep{
    firstname: string;
    lastname: string;
    company: string;
    region: string;
}







export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeUserDataByFirstRegistrationStep: (state, {payload}:PayloadAction<IChangeUserDataByFirstRegistrationStep>)=>{
            return {...state, ...payload}
        },
    }
})


export const {changeUserDataByFirstRegistrationStep} = userReducer.actions;
export default userReducer.reducer;