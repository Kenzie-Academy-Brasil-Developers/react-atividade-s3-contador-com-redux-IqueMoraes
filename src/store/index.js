import { combineReducers, createStore } from "redux";
import CounterReducer from "./modules/Counter/reducer";

const reducer = combineReducers({ counter: CounterReducer });

const store = createStore(reducer);

export default store;
