import {createSlice, PayloadAction} from "@reduxjs/toolkit";



interface IContainElem{
    title: string;
    contain_link: string;
    private: string;
    user_id: string;
    edited: string;
    created: string;
    contain_id: string;
    description: string;
}

interface IAddContain{
    containArr: IContainElem[];
}
interface IChangeContainerViewPage{
    containViewPage: IContainElem;
}


interface IContainViewPage{
    title: string;
    edited: string;
    created: string;
    description: string;
}

interface IChangeContainClosedFlag{
    containClosedFlag: boolean;
}

interface IChangeContainNotFoundFlag{
    containNotFoundFlag: boolean;
}


interface InitialState{
    containClosedFlag: boolean;
    containNotFoundFlag: boolean;
    containArr: IContainElem[] | [];
    containViewPage: IContainViewPage | {};
}

const initialState:InitialState = {
    containArr : [],
    containViewPage: {},
    containClosedFlag: false,
    containNotFoundFlag: false,
}



export const containReducer = createSlice(({
    initialState,
    name: "contain",
    reducers: {
        addContain: (state, {payload}:PayloadAction<IAddContain>)=>{
            return {...state, ...payload}
        },
        changeContainerViewPage: (state, {payload}:PayloadAction<IChangeContainerViewPage>)=>{
            return {...state, ...payload};
        },
        changeContainClosedFlag: (state, {payload}:PayloadAction<IChangeContainClosedFlag>)=>{
            return {...state, ...payload};
        },
        changeContainNotFoundFlag: (state, {payload}:PayloadAction<IChangeContainNotFoundFlag>)=>{
            return {...state, ...payload};
        },

    }
}))



export const {addContain, changeContainerViewPage, changeContainClosedFlag, changeContainNotFoundFlag} = containReducer.actions;
export default containReducer.reducer;