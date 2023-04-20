import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IUserInterface{
    authFlag: boolean;
}

interface IChangeUserAuthFlag {
    authFlag: boolean;
}
interface IChangeUserData {
    login?: string;
    mail?: string;
    updated?: string;
    created?: string;
    user_id?: string;
    workspaces_id?: string;
    lastname?: string;
    firstname?: string;
}

const initialState = {
    authFlag: false,
    mail: "",
    login: "",
    updated: "",
    created: "",
    user_id: "",
    workspaces_id: "",
    lastname: "",
    firstname: "",
}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeUserAuthFlag: (state, {payload}:PayloadAction<IChangeUserAuthFlag>) => {
            return {...state, ...payload};
        },
        changeUserData: (state, {payload}:PayloadAction<IChangeUserData>) => {
            return {...state, ...payload};
        }
    }
})


export const {changeUserAuthFlag, changeUserData} = userReducer.actions;
export default userReducer.reducer;
