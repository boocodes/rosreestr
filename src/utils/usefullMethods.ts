


export function isArrayEmpty(array:any){
    if(array?.length){
       return false;
    }
    else{
        return true;
    }
}

export function isObjectEmpty(obj:any){
    for (var i in obj) {
        if (obj?.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}

export function getBooleanFromTextBoolean(textBoolean: string){
    if(textBoolean === "false" || textBoolean === "False" || textBoolean === "FALSE"){
        return false;
    }
    else if(textBoolean === "true" || textBoolean === "True" || textBoolean === "TRUE"){
        return true;
    }
    else{
        return false;
    }
}