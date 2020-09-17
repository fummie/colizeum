import { ADD_TOURNAMENT } from "../types/clash";
import { ADD_TEAM } from "../types/clash"

export const addTournament = tournament => ({
	type: ADD_TOURNAMENT,
	tournament: tournament
});

export const addTeam = team => ({
	type: ADD_TEAM,
	team: team
});
