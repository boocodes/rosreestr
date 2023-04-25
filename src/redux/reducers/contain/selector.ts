import {RootState} from "../../store";


export function selectContains(state:RootState){
    return state.contain.containArr;
}