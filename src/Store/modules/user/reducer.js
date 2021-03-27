import Produce from "immer"

const INITIAL_STATE = {
	signed: false
};

export default function user(state = INITIAL_STATE, action){
	return Produce(state, draft => {
		switch( action.type ){
			case "@auth/LOGIN":
				draft.signed = true;
				break;
			case "@auth/LOGOUT":
				draft.signed = false;
				break
			default:
		}
	});
}
