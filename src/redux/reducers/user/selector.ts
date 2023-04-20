import {RootState} from "../../store";

export function selectUserAuthFlag(state:RootState){
    return state.user.authFlag;
}