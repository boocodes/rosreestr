import {RootState} from "../../store";

export function getUserData(state:RootState){
    return state.user;
}