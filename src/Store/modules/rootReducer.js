import { combineReducers } from "redux"

import userReducer from "./user/reducer";
import feed from "./feed/reducer";

export default combineReducers({
	userReducer, feed
});
