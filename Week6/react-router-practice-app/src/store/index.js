import { configureStore } from "@reduxjs/toolkit";
import quotesSlice from "./add-quote";
// import getQuoteSlice from './get-quote';


const store = configureStore({
    reducer : {
        addQuote : quotesSlice.reducer,
        // getQuote: getQuoteSlice.reducer,
    }
});



export default store ;
