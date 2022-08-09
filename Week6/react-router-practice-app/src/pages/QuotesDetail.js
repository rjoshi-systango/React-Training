import { Link } from 'react-router-dom';
import { Route, useParams, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';


let DUMMY_QUOTES = [
    {id: "q1", author: "MAX", text: "Learning React is fun!"},
    {id: "q2", author: "Maximillian", text: "Learning React is great!"},
]
  
const QuotesDetail = () => {
    const params = useParams();
    const match = useRouteMatch();


    let quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

    if(!quote) {
        return <p>No data found.</p> 
    }

    return (
        <div>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            
            <Route path={match.url} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.params.quoteId}/comments`} >Load comments</Link>
                </div>
            </Route>

            <Route path={`/quotes/${params.quoteId}/comments`} exact>
            <div className='centered'>
                    <Link className='btn--flat' to={match.url} >Hide comments</Link>
                </div>
            </Route>

            <Route path={`${match.url}/comments`} >
                <Comments />
            </Route>
        </div>
    )
}

export default QuotesDetail;