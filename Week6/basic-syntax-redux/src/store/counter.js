import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: "counter", 
    initialState: {counter: 0, showCounter: true},
    reducers: {
        increment (state) {
            state.counter++
        },
        decrement (state) {
            state.counter--
        },
        toggle (state) {
            state.showCounter= !state.showCounter
            state.counter = 0
        }

    }
})

export default counterSlice;
