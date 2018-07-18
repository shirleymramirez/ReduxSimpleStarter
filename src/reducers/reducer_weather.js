import { FETCH_WEATHER } from '../actions/index';


export default function(state = [], action) {
	switch(action.type) {
		case FETCH_WEATHER:
			//concat doesn't change the existing array it creates a new array that contains all the old stuff 
			//and the new stuff here
			//we are mutating our state, returning a new  version of our state
			// return state.concat([action.payload.data]); --> one way of doing the other is using spread operator (...)

			return [action.payload.data, ...state];
	}

	return state;
}