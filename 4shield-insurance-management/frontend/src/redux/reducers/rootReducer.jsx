import { combineReducers } from "redux";
import claimsReducer from "./claimsReducer";

const rootReducer = combineReducers({
	claims: claimsReducer,
});

export default rootReducer;
