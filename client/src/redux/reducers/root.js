import { combineReducers } from "redux";
import { team } from "./team";
import { summoners } from "./summoners"

export const root =  combineReducers({
	team,
	summoners
});
