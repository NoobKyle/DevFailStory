import { Dispatch } from 'redux'
import axios from "axios";

if (process.env.NODE_ENV == 'production') {
	var API = process.env.REACT_APP_PRODUCTION_API;
}else{
	var API = process.env.REACT_APP_LOCAL_API;
}

export const GetData = () => {
	return ( dispatch:Dispatch ) => {
		var data

    console.log('Process: Fetching Feed')
    axios.get(`${API}/articles`)
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
    axios.get(`${API}/articles?Slug=${slug}`)
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
    axios.get(`${API}/users?username=${name}`)
    .then(res => {
        data = res.data[0];

    dispatch({
        type: "GET_USER",
        data: data,
      });
    })
	};
};
