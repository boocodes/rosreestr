import {NavigateFunction} from "react-router-dom";
import {ActionCreatorWithPayload, AnyAction, Dispatch, PayloadAction, ThunkDispatch} from "@reduxjs/toolkit";


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

interface IPromiseArgBodyData{
    login: string;
    password: string;
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


export async function fetchMethod(method:string, body:IPromiseArgBodyData, url:string):Promise<Response>{
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
    body:IPromiseArgBodyData,
    url:string,
    navigate:NavigateFunction,
    dispatch:ThunkDispatch<any, undefined, AnyAction> & Dispatch<AnyAction>,
    changeUserAuthFlag: any,
    changeUserData: any,
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
          }
        })
}

