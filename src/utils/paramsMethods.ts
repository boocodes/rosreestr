import {useState} from "react";

export function getLastElemOfPath(path:string){
    let indexOfLastSlash:number = path.lastIndexOf("/");
    return path.slice(indexOfLastSlash+1, path.length);
}