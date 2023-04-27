import {useState} from "react";

export function getLastElemOfPath(path:string){
    let indexOfLastSlash:number = path.lastIndexOf("/");
    return path.slice(indexOfLastSlash+1, path.length);
}

export function getPreLastElemOfPath(path:string){
    let editablePath = path;
    let indexOfLastSlash:number = editablePath.lastIndexOf("/");
    editablePath = editablePath.slice(0, indexOfLastSlash);
    indexOfLastSlash = editablePath.lastIndexOf("/");
    return editablePath.slice(indexOfLastSlash+1, editablePath.length);
}