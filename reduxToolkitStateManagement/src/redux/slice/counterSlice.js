
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

const counterSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        increment: (state, action) => {
            console.log(state)
            state.count += 1;
        },

        decrement: (state, action) => {
            if(state.count > 0) state.count -= 1;
        }
    },
})

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;