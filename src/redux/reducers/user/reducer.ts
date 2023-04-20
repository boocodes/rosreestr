import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IUserInterface{
    authFlag: boolean;
}

interface IChangeUserAuthFlag {
    authFlag: boolean;
}

const initialState = {
    authFlag: false,
}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeUserAuthFlag: (state, {payload}:PayloadAction<IChangeUserAuthFlag>) => {
            return {...state, ...payload};
        }
    }
})


export const {changeUserAuthFlag} = userReducer.actions;
export default userReducer.reducer;
