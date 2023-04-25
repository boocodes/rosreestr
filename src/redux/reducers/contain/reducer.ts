import {createSlice, PayloadAction} from "@reduxjs/toolkit";



interface IContainArr{
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
    containArr: IContainArr[];
}

interface InitialState{
    containArr: IContainArr[] | [];
}

const initialState:InitialState = {
    containArr : [],
}



export const containReducer = createSlice(({
    initialState,
    name: "contain",
    reducers: {
        addContain: (state, {payload}:PayloadAction<IAddContain>)=>{
            return {...state, ...payload}
        },
    }
}))



export const {addContain} = containReducer.actions;
export default containReducer.reducer;