import Produce from "immer";

const INITIAL_STATE = {
	data: []
};

export default function feed(state = INITIAL_STATE, action){
	return Produce(state, draft => {
		switch( action.type ){
			case "GET_FEED":
			console.log(action.payload)
				draft.data = action.data;
				break;
			case "@auth/LOGOUT":
				draft.signed = false;
				break
			default:
		}
	});
}
