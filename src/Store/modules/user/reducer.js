import Produce from "immer"

const INITIAL_STATE = {
	signed: false,
	data: {},
	me: {
		username : 'NoUser',
		articles : []
	},
	write: {}
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
				let userData = action.data;
				draft.me = userData.user;
				break;
			case "ARTICLE_SAVE":
				draft.write = action.data;
				break;
			default:
		}
	});
}
