import {NavigateFunction} from "react-router-dom";


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

export async function loginUserMethod (method:string, body:IPromiseArgBodyData, url:string, navigate:NavigateFunction){
    await fetchMethod(method, body, url)
        .then((response)=>{
            if(response.ok){
                navigate("/welcome")
                console.log("ok")
            }
            else{
                navigate("/bebr")
                console.log("not ok")
            }
        })
}

