import { ADD_SUMMONERS } from "../types";

export const summoners = (state = [], action) => {
	switch (action.type) {
		case ADD_SUMMONERS:
			return action.summoners;
		default: 
			return {...state};
	};
};
