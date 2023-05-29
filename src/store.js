import { combineReducers, createStore, applyMiddleware } from "redux";
import contactsReducer from "./reducers/contact";
import thunk from "redux-thunk";

const allReducer = combineReducers({ contactsReducer });
const store = createStore(allReducer, applyMiddleware(thunk));
export default store;
