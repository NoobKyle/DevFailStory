import Produce from "immer";

const INITIAL_STATE = {
	data: [],
	article: {
		owner: "No User"
	},
	searchedUser: {
		articles: []
	}
};

export default function feed(state = INITIAL_STATE, action){
	return Produce(state, draft => {
		switch( action.type ){
			case "GET_FEED":
				draft.data = action.data;
				break;
			case "GET_ARTICLE":
				draft.article = action.data;
				break
			case "GET_USER":
				draft.searchedUser = action.data;
				break
			default:
		}
	});
}
