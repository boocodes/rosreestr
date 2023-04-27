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
    workspace_id?: string;
    lastname?: string;
    firstname?: string;
}

interface IViewPageUserData{
    firstname: string;
    lastname: string;
    mail: string;
    login: string;
    organisation: string;
    location: string;
    about: string;
    url_link_social: string;
    avatar_src: string;
    achievements: string;
}

interface InitialState {
    authFlag: boolean;
    mail: string;
    login: string;
    updated: string;
    created: string;
    user_id: string;
    workspace_id: string;
    lastname: string;
    firstname: string;
    about: string;
    location: string;
    organisation: string;
    url_link_social: string;
    avatar_scr: string;
    achievements: string;
    viewPageUserData: IViewPageUserData | {};
}



interface IChangeViewPageUserData {
    viewPageUserData: IViewPageUserData | {};
}


const initialState:InitialState = {
    authFlag: false,
    mail: "",
    login: "",
    updated: "",
    created: "",
    user_id: "",
    workspace_id: "",
    lastname: "",
    about: "",
    location: "",
    url_link_social: "",
    organisation: "",
    achievements: "",
    avatar_scr: "",
    firstname: "",
    viewPageUserData: {}
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
        },
        changeViewPageUserData: (state, {payload}:PayloadAction<IChangeViewPageUserData>)=>{
            // return Object.assign(state, payload);
            return {...state, ...payload};
        },
    }
})


export const {changeUserAuthFlag, changeUserData, changeViewPageUserData} = userReducer.actions;
export default userReducer.reducer;
