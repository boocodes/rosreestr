import {NavigateFunction} from "react-router-dom";
import {ActionCreatorWithPayload, AnyAction, Dispatch, PayloadAction, ThunkDispatch} from "@reduxjs/toolkit";
import {changeWrongPasswordOrLoginFlag} from "../redux/reducers/modalWindows/reducer";
import exp from "constants";


interface IPromiseType {
    "message": {
        firstname: string;
        lastname: string;
        mail: string;
        password: string;
        created: string;
        updated: string;
        login: string;
        workspace_id: string;
        user_id: string;
    }
}

interface IPromiseLoginArgBodyData{
    login: string;
    password: string;
}

interface IPromiseCreateContain{
    contain_title: string;
    contain_description: string;
    contain_private: boolean;
    user_id: string;
}

interface IPromiseGetContain{
    user_id: string;
    user_password: string;
}

interface IPromiseRegistrateArgBodyData{
    firstname: string;
    lastname: string;
    mail: string;
    login: string;
    password: string,
}


interface ILoginResponseSuccess {
    message: string
}
interface ILoginResponseFail {
    message: {
        firstname: string;
        lastname: string;
        mail: string;
        password: string;
        created: string;
        updated: string;
        login: string;
        workspace_id: string;
        user_id: string;
    }
}


export async function fetchMethod(method:string, body:any, url:string):Promise<Response>{
    const response = await fetch(url, {
        method,
        mode: 'cors',
        body: JSON.stringify(body)
    });
    return await response;
}

interface IChangeUserAuthFlag {
    authFlag: boolean;
}

export async function loginUserMethod (
    method:string,
    body:IPromiseLoginArgBodyData,
    url:string,
    navigate:NavigateFunction,
    dispatch:ThunkDispatch<any, undefined, AnyAction> & Dispatch<AnyAction>,
    changeUserAuthFlag: any,
    changeUserData: any,
    changeWrongPasswordOrLoginFlag: any,
    ){
    await fetchMethod(method, body, url)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
          if(data.message !== "Пользователь не найден"){
            dispatch(changeUserData(data.message));
            dispatch(changeUserAuthFlag({authFlag: true}))
            navigate("/workspace");
          }
          else{
              dispatch(changeUserAuthFlag({authFlag: false}));
              dispatch(changeWrongPasswordOrLoginFlag(true));
          }
        })
}

export async function registrateUserMethod(
    method: string,
    body: IPromiseRegistrateArgBodyData,
    url: string,
    navigate: NavigateFunction,
    ){
    await  fetchMethod(method, body, url)
        .then((data)=>{
            console.log(data);
            if(data.ok){
                navigate("/login");
            }
            else{
                return;
            }
        })
}

export async function createContainMethod(
    method: "POST",
    body: IPromiseCreateContain,
    url: string,
    navigate: NavigateFunction
    ){
    await fetchMethod(method, body, url)
        .then((data)=>{
            console.log(data);
            if(data.ok){
                navigate("/profile")
            }
            else{
                return;
            }
        })
}

export async function getContains(
    method: "POST",
    body: IPromiseGetContain,
    url: string,
    dispatch: ThunkDispatch<any, undefined, AnyAction> & Dispatch<AnyAction>,
    addContain: any,
    ){
    await fetchMethod(method, body, url)
        .then((data)=>{
            if(data.ok){
               return data.json();
            }
            else{
                return false;
            }
        })
        .then((response)=>{
            dispatch(addContain({containArr: response.message.records}))
        })
}