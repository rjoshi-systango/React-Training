import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom'; 
import LoadingSpinner from '../UI/LoadingSpinner';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.slice().sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.text > quoteB.text ? 1 : -1;
    } else {
      return quoteA.text < quoteB.text ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history= useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  let isAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isAscending);


  const onClickSorting = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${(isAscending ? "desc" : "asc")}`
    })
    // history.push('/quotes?sort=' + );

  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={onClickSorting}>Sort {isAscending ? "Desending" : "Ascending"}</button>
      </div>
      {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
