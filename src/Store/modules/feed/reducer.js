import Produce from "immer";

const initialState = {
	data: [],
	article: {
		owner: "No User"
	},
	searchedUser: {
		articles: []
	}
};

export default function feed(state = initialState, action){
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
			case "GET_READMORE":
				draft.data = action.data;
			default:
		}
	});
}
