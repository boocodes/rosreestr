import {RootState} from "../../store";


export function selectModalWindowsFlags(state:RootState){
    return state.modalWindow;
}