import { Dispatch } from 'redux'
import axios from "axios";
import { readmore } from './helper';

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


// export const GetReadMore = () => {
// 	return ( dispatch:Dispatch ) => {
// 		var articles;
//
// 		for(var i = 1; i < 4; i++){
// 			console.log(`Process: Fetching ReadMore Num ${i}`);
// 			axios.get(`${Endpoint}/articles/${i}`)
// 			.then(res => {
// 					articles = res.data[0];
// 					console.log('close to completing for loop');
// 					console.log(articles)
// 				})
// 			}
//
// 		console.log('must complete for loop first');
// 		console.log(articles)
// 		dispatch({
// 		  type: "GET_READMOREE",
// 		  data: articles,
// 		});
// 	};
// };


export const GetReadMore = () => {
	return async ( dispatch:Dispatch ) => {

		var articles = await readmore(axios, Endpoint);

		await dispatch({
		  type: "GET_READMORE",
		  data: articles,
		});
	};
};
