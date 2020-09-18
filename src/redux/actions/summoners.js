import { ADD_SUMMONER } from "../types"

export const addSummoner = summoner => ({
	type: ADD_SUMMONER,
	summoner: summoner
});
