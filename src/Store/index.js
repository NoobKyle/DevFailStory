import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./modules/rootReducer";

const thunk = require('redux-thunk').default;
const enhancer = composeWithDevTools( applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;
