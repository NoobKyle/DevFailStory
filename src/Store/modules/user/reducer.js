import Produce from "immer"

const INITIAL_STATE = {
	signed: false,
	data: {},
	me: {user: {
		username : 'NoUser',
		articles : []
	}}
};

export default function user(state = INITIAL_STATE, action){
	return Produce(state, draft => {
		switch( action.type ){
			case "AUTH_LOGIN":
				draft.signed = true;
				draft.data = action.data;
				break;
			case "AUTH_LOGOUT":
				draft.signed = false;
				break
			case "GET_ME":
				draft.me = action.data;
				break;
			default:
		}
	});
}
