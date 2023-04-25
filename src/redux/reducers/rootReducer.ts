import {combineReducers} from "@reduxjs/toolkit";
import userReducer from "./user/reducer";
import modalWindowReducer from "./modalWindows/reducer";
import containReducer from "./contain/reducer";


const rootReducer = combineReducers({
    user: userReducer,
    modalWindow: modalWindowReducer,
    contain: containReducer,
})


export default rootReducer;