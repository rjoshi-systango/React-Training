// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import authSlice from "./auth";

//with toolkit



 
const store = configureStore({
    reducer : {
        counter: counterSlice.reducer,
        auth: authSlice.reducer, 
    } 
});


export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

/*Without toolkit */
// const counterReducer = (state = {counter: 0, showCounter: true}, action) => {
//     if(action.type === 'increment') {
//         return {
//             counter: state.counter + 1, 
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === "toggle") {
//         return {
//             counter: action.counter,
//             showCounter: !state.showCounter
//         }
//     }

//     return state;
// }

// const store = createStore(counterReducer);


// export default store;