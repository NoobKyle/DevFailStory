import { Dispatch } from 'redux'
import axios from "axios";


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

export const GetUser = (id) => {
	return ( dispatch:Dispatch ) => {
		var data

    console.log('Process: Fetching User')
    axios.get(`http://localhost:1337/users/${id}`)
    .then(res => {
        data = res.data;

    dispatch({
        type: "GET_USER",
        data: data,
      });
    })
	};
};
