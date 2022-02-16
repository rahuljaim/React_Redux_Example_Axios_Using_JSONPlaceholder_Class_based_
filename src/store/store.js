import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
const Initialstate = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  Initialstate,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : args => args,
  )
);
export default store;
