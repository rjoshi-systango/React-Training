import QuoteList from "../components/quotes/QuoteList";
import { getQuote } from '../store/add-quote';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";


const AllQuotes = () => {
    const quotesList = useSelector(state => state.addQuote.quotes);
    const dispatch = useDispatch();
    console.log(quotesList);
    useEffect(() => {
        dispatch(getQuote());
    }, [dispatch])
    
    return (
        <>
        {(quotesList.length > 0) &&  <QuoteList  quotes={quotesList} />}
        </>
    //  <p>f</p>   
    )
}

export default AllQuotes;