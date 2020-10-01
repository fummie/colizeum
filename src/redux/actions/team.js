import { ADD_TEAM } from "../types"

export const addTeam = team => ({
	type: ADD_TEAM,
	team: team
});
