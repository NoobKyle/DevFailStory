import { Dispatch } from 'redux'
import axios from "axios";

var Endpoint;
if (process.env.NODE_ENV === 'production') {
	Endpoint = process.env.REACT_APP_PRODUCTION_API;
}else{
	Endpoint = process.env.REACT_APP_LOCAL_API;
}

export const GetData = () => {
	return ( dispatch:Dispatch ) => {
		var data

    console.log('Process: Fetching Feed')
    axios.get(`${Endpoint}/articles`)
    .then(res => {
        data = res.data;

    dispatch({
        type: "GET_FEED",
        data: data,
      });
    })
	};
};

export const GetArticle = (slug) => {
	return ( dispatch:Dispatch ) => {
		var data

    console.log('Process: Fetching Article')
		// http://localhost:1337/articles?Slug=meeting-elon-musk
    axios.get(`${Endpoint}/articles?Slug=${slug}`)
    .then(res => {
        data = res.data[0];

    dispatch({
        type: "GET_ARTICLE",
        data: data,
      });
    })
	};
};

export const GetUser = (name) => {
	return ( dispatch:Dispatch ) => {
		var data

    console.log('Process: Fetching User')
    axios.get(`${Endpoint}/users?username=${name}`)
    .then(res => {
        data = res.data[0];

    dispatch({
        type: "GET_USER",
        data: data,
      });
    })
	};
};
