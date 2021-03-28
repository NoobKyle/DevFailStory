import { Dispatch } from 'redux'
import axios from "axios";

export function feed(){
	return {
		type: "@feed/ALL"
		};
	}
export function article(string){
	return {
		type: "@auth/LOGOUT",
		payload: string
		};
	}

export const GetData = () => {
	return ( dispatch:Dispatch ) => {
		var data

    console.log('Process: Fetching Feed')
    axios.get(`http://localhost:1337/articles`)
    .then(res => {
        data = res.data;

    dispatch({
        type: "GET_FEED",
        data: data,
      });
    })
	};
};

export const GetArticle = (id) => {
	return ( dispatch:Dispatch ) => {
		var data

    console.log('Process: Fetching Article')
    axios.get(`http://localhost:1337/articles/${id}`)
    .then(res => {
        data = res.data;

    dispatch({
        type: "GET_ARTICLE",
        data: data,
      });
    })
	};
};
