import { REQUESTING_QUOTE } from "../actions/quoteFetchActionCreator";
import { RECEIVED_QUOTE } from "../actions/quoteFetchActionCreator";

export default (state = { fetching: false, quote: "" }, action) => {
  switch (action.type) {
    case REQUESTING_QUOTE:
      return { fetching: true, quote: "" };
    case RECEIVED_QUOTE:
      return { fetching: false, quote: action.newQuote };
    default:
      return state;
  }
};
