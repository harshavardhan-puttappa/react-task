import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import employeeReducer from "./reducers/employeeReducer";
const middleware = [thunk];

const store = createStore(employeeReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
