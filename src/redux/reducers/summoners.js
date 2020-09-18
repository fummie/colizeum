import { ADD_SUMMONER } from "../types";

export const summoners = (state = [], action) => {
	switch (action.type) {
		case ADD_SUMMONER:
			const newState = [...state];
			newState.push(action.summoner);
			return newState
		default: 
			return {...state};
	};
};
