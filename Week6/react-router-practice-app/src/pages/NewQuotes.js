import QuoteForm from "../components/quotes/QuoteForm";
import { addQuote, quotesAction }  from '../store/add-quote';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const NewQuotes = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const status = useSelector(state => state.addQuote.status);

    useEffect(() => {
        if(status === 'completed') {
            history.push('/quotes');
            dispatch(quotesAction.changeStatus(false));
        }
    }, [status, history, dispatch]);

    const addQuoteHandler = (quoteInfo) => {
        dispatch(addQuote(quoteInfo));
    }

    return (

        <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
    )
}

export default NewQuotes;