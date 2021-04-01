import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./modules/rootReducer";

const thunk = require('redux-thunk').default
const enhancer = process.env.NODE_ENV === "development" ? composeWithDevTools( applyMiddleware(thunk)) : null;

const store = createStore(rootReducer, enhancer);

export default store;