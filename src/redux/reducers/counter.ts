import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface counterState {
    count: number
}
const initialState: counterState = {
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.count = action.payload
        },
        decrement: (state, action: PayloadAction<number>) => {
            state.count = action.payload
        }
    }
})

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer