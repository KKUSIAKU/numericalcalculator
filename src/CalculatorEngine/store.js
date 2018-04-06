import { applyMiddleware,  createStore } from "redux";
import logger from "redux-logger";
import reducer from "./reducers.js"; 

const initialState = {
  lastChar:"",
  ce_count: 0,
  equal_state: false,
  operators: ["+", "-", "/", "*"],
  equal: false,
  expression:"0",
};

var store; //createStore(reducer,initialState); 

if( process.env.NODE_ENV !=="production" ) {
  store = createStore(reducer, initialState, applyMiddleware(logger));
} else {
  store = createStore(reducer, initialState);
}

export default store;