


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