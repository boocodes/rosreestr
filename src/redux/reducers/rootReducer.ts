import {combineReducers} from "@reduxjs/toolkit";
import userReducer from "./user/reducer";
import modalWindowReducer from "./modalWindows/reducer";

const rootReducer = combineReducers({
    user: userReducer,
    modalWindow: modalWindowReducer,
})


export default rootReducer;