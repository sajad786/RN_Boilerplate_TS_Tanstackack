import { configureStore } from "@reduxjs/toolkit";
import counter from "./reducers/counter";
// import reducer from './reducers'


const store = configureStore({
    reducer:counter,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false})

})

export default  store