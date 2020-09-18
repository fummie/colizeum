import { ADD_TEAM } from "../types";

export const team = (state = {}, action) => {
	switch (action.type) {
		case ADD_TEAM:
			return action.state;
		default: 
			return {...state};
	};
};
