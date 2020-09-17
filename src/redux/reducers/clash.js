import { ADD_TOURNAMENT } from "../types/clash";
import { ADD_TEAM } from "../types/clash";

const initialState = {
	team: {},
	tournaments: {}
};

export const clash = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TOURNAMENT:
			return {...state, tornament: action.tournament};
		case ADD_TEAM:
			return {...state, team: action.team};
		default: 
			return state;
	};
};
