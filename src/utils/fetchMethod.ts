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
    contain_private: string;
    user_id: string;
    contain_author_login: string;
}

interface IPromiseGetContain{
    user_id: string;
    user_password: string;
}

interface IPromiseGetContainByUsernameAndContainName{
    login: string;
    contain_title: string;
    master_user_id: string;
}


interface IPromiseRegistrateArgBodyData{
    firstname: string;
    lastname: string;
    mail: string;
    login: string;
    password: string;
}


interface IPromiseGetViewPageByLogin{
    login: string;
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
          if(data.message !== "Error, user not found"){
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
                navigate("/container/" + body.contain_author_login + "/" + body.contain_title);
                return true;
            }
            else{
                return false;
            }
        })
}

export async function getSelfContains(
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
            if(response){
                console.log(response);
                dispatch(addContain({containArr: response.message}))
                return true;
            }
            else{
                console.log(response);
                dispatch(addContain({containArr: []}));
                return false;
            }

        })
}

export async function getContainByUsernameAndContainName(
    method: "POST",
    body: IPromiseGetContainByUsernameAndContainName,
    url: string,
    dispatch: ThunkDispatch<any, undefined, AnyAction> & Dispatch<AnyAction>,
    changeContainerViewPage: any,
    changeContainClosedFlag: any,
    changeContainNotFoundFlag: any,
    ){
    await fetchMethod(method, body, url)
        .then((data)=>{
            if(data.ok){
                return data.json();
            }
            else{
                return false
            }
        })
        .then((response)=>{
            if(response){
                if(response.message !== "Repository closed"){
                    dispatch(changeContainerViewPage({containViewPage: response.message}));
                    dispatch(changeContainClosedFlag({containClosedFlag: false}));
                    dispatch(changeContainNotFoundFlag({containNotFoundFlag: false}));
                }
                else{
                    dispatch(changeContainerViewPage({containViewPage: {}}));
                    dispatch(changeContainClosedFlag({containClosedFlag: true}));
                    dispatch(changeContainNotFoundFlag({containNotFoundFlag: false}));
                }
            }
            else{
                dispatch(changeContainerViewPage({containViewPage: {}}));
                dispatch(changeContainClosedFlag({containClosedFlag: false}));
                dispatch(changeContainNotFoundFlag({containNotFoundFlag: true}));
            }


        })
}


export async function getViewPageByLogin(
    method: "POST",
    body: IPromiseGetViewPageByLogin,
    url: string,
    dispatch: ThunkDispatch<any, undefined, AnyAction> & Dispatch<AnyAction>,
    changeViewPageUserData: any,
    ){
    await fetchMethod(method, body, url)
        .then((data)=>{
            if(data.ok){
                return data.json();
            }
            else{
                return false
            }
        })
        .then((response)=>{
            if(response){
                if(response.message !== "User not found"){
                    dispatch(changeViewPageUserData({viewPageUserData: response.message}))
                    return true;
                }
                else{
                    dispatch(changeViewPageUserData({viewPageUserData: {}}));
                    return false;
                }
            }
            else{
                dispatch(changeViewPageUserData({viewPageUserData: {}}));
                return false;
            }
        })
}