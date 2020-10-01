import { ADD_SUMMONERS } from "../types"

export const addSummoners = summoners => ({
	type: ADD_SUMMONERS,
	summoners: summoners
});
