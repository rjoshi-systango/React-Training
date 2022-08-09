import { createSlice } from "@reduxjs/toolkit";

const quotesSlice = createSlice({
    name: 'quotes',
    initialState: {
        quotes: [],
        status: false
    },
    reducers: {
        getData(state, action) {
            state.quotes = action.payload;
        },
        changeStatus(state, action){
            state.status = action.payload;
        },
        addNewQuote(state, action) {
            console.log("reducer on add new quote");
            state.status = action.status;
        },
        addCommentonQuote(state ,action) {
            console.log("comment add succesfully");
        },
    }
});


export const getQuote = () => {
    return async(dispatch) => {
        const getData = async() => {
            const response = await fetch('https://react-project-sending-http-default-rtdb.firebaseio.com/quotes.json');

            if(!response.ok) {
                throw new Error(response.error || "Something went wrong");
            }

            let data = await response.json();
            // console.log(data);
            return data;
        }
        dispatch(quotesAction.changeStatus('pending'));
        try {
            const quotesList =  await getData();
            const transformedData = [];
            for (const key in quotesList) {
                const quoteObj = {
                  id: key,
                  ...quotesList[key],
                };
                transformedData.push(quoteObj)
            }
            dispatch(quotesAction.getData(transformedData))
            // dispatch(quotesAction.changeStatus('completed'));
        }
        catch(error) {
            console.log(error);
            // dispatch(quotesAction.changeStatus('error'));
            
        }
    }
}


export const addQuote = (quote) => {
    return  async (dispatch) => {
        const sendData = async() => {
            const response = await fetch('https://react-project-sending-http-default-rtdb.firebaseio.com/quotes.json',{
                method: "POST",
                body: JSON.stringify(quote),
            })
            if(!response.ok){
                throw new Error(response.error || "Something went wrong");
            }
        }
        dispatch(quotesAction.changeStatus('pending'));
        try{
            await sendData();
            dispatch(quotesAction.changeStatus('completed'));

        }
        catch(error){
            console.log(error);
            dispatch(quotesAction.changeStatus('error'));

        }
    }
}


export const quotesAction = quotesSlice.actions;

export default quotesSlice;