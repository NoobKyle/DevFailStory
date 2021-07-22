import Produce from "immer"

const initialState = {
	signed: false,
	data: {},
	me: {
		username : 'NoUser',
		articles : []
	},
	write: {
      title: 'No Title',
      description: 'No Title',
			headerurl: 'No Url',
      content: 'No Content'
    },
	error: false,
	loading: false
};

export default function userReducer(state = initialState, action){
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
			case "ERROR":
				draft.error = action.data;
				break;
			case "LOADING":
				draft.loading = action.data;
				break;
			default:
		}
	});
}
