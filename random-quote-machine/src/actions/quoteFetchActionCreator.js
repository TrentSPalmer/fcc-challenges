export const RECEIVED_QUOTE = "RECEIVED_QUOTE";
export const REQUESTING_QUOTE = "REQUESTING_QUOTE";

export const receivedQuoteAction = quote => {
  return {
    type: RECEIVED_QUOTE,
    newQuote: quote
  };
};

export const requestingQuoteAction = () => {
  return {
    type: REQUESTING_QUOTE
  };
};

export const quoteFetchActionCreator = () => {
  return function (dispatch) {
    dispatch(requestingQuoteAction());
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(response => response.json())
      .then(quotes => {
        dispatch(
          receivedQuoteAction(
            quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)]
          )
        );
      });
  };
};
