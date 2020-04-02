import { combineReducers } from "redux";
import colorCounterReducer from "./colorCounterReducer";
import asyncQuoteReducer from "./asyncQuoteReducer";

export default combineReducers({
  colorCount: colorCounterReducer,
  newQuote: asyncQuoteReducer,
});
