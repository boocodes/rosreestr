import {RootState} from "../../store";


export function selectContains(state:RootState){
    return state.contain.containArr;
}

export function selectContainViewPage(state:RootState){
    return state.contain.containViewPage;
}

export function selectContainClosedFlag(state:RootState){
    return state.contain.containClosedFlag;
}

export function selectContainNotFoundFlag(state:RootState){
    return state.contain.containNotFoundFlag;
}