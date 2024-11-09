// import { Action, combineReducers } from "@reduxjs/toolkit";
import { combineReducers, Action } from "redux";
import counter, { counterState } from "./counter";
import types from "@redux/types";

export interface RootState {
    counter :counterState
}
const appReducer = combineReducers({
    counter
})

const rootReducer = (state:RootState | undefined, action:Action<any>) =>{
    if (action.type === types.CLEAR_REDUX_STATE) {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer;