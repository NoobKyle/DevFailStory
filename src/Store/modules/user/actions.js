import { Dispatch } from 'redux';
import axios from 'axios';

var Endpoint;
if (process.env.NODE_ENV === 'production') {
	Endpoint = process.env.REACT_APP_PRODUCTION_API;
}else{
	Endpoint = process.env.REACT_APP_LOCAL_API;
}

export const Login = ( email, password ) => {
	return ( dispatch:Dispatch ) => {
		var data;

		console.log('Process: User Login');
		return new Promise((resolve, reject) => {
			axios({
				method: 'post',
				url: `${Endpoint}/auth/local`,
				data: {
					"identifier": `${email}`,
					"password": `${password}`
					}
				})
			.then(res => {
				data = res.data;

				sessionStorage.setItem("me", JSON.stringify(data));

				dispatch({
					type: "AUTH_LOGIN",
					data: data
				});

				resolve();
			})
		})
	};
};


export const Signup = ( username, email, password ) => {
	return ( dispatch:Dispatch ) => {
		var data;

		console.log('Process: User Signup');
		return new Promise((resolve, reject) => {
			axios({
				method: 'post',
	  		url: `${Endpoint}/auth/local/register`,
	  		data: {
					  "username": `${username}`,
					  "email": `${email}`,
					  "password": `${password}`
	  			}
				})
			.then(res => {
				data = res.data;

				sessionStorage.setItem("me", JSON.stringify(data));

				dispatch({
					type: "AUTH_LOGIN",
					data: data
				});

				resolve();
			})
		})
	};
};

export const Me = () => {
	return ( dispatch:Dispatch ) => {
	var data;
	let me = JSON.parse( sessionStorage.getItem('me') || `{'username': 'NoUser'}`);

	if( me.username !== 'NoUser'){
		console.log('Process: User Found');
		dispatch({
			 type: "GET_ME",
			 data: me,
		 });
	}else{
		// TODO - this route require a jwt token but user might not be logged in.
		console.log('Process: Fetching Calendar')
		axios.get(`${Endpoint}/users/me`)
		.then(res => {
			 data = res.data;

		dispatch({
			 type: "GET_ME",
			 data: data
			 });

		console.log('Process: Adding User to SessionStorage');
		sessionStorage.setItem('me', JSON.stringify(data));
		})
	}
 }
}


export const SaveArticle = ( title, description, content ) => {
	return ( dispatch:Dispatch ) => {
		console.log('Process : Saving Article');

		return new Promise((resolve, reject) => {
			var data = {
				title: title,
				description: title,
				content: content,
			}

			dispatch({
				type: "ARTICLE_SAVE",
				data: data
			});

			resolve();
		})
	}
};


export const PublishArticle = ( content ) => {
	return ( dispatch:Dispatch ) => {
		console.log('Process : Publishing Article');

		return new Promise((resolve, reject) => {

			var userData = JSON.parse(sessionStorage.getItem("me"));
			var userDetails = userData.user;

			axios({
				method: 'post',
	  		url: `${Endpoint}/articles`,
	  		data: {
					  "Title": `${content.title}`,
					  "Description": `${content.description}`,
					  "Content": `${content.content}`,
					  "Date": "2021-04-26",
					  "owner": {
					    "id": `${userDetails.id}`,
					    "username": `${userDetails.username}`,
					    "email": `${userDetails.email}`,
					    "provider": "string",
					    "password": "string",
					    "resetPasswordToken": "string",
					    "confirmationToken": "string",
					    "confirmed": true,
					    "blocked": true,
					    "role": "string",
					    "articles": [
					      "string"
					    ],
					    "created_by": "string",
					    "updated_by": "string"
					  },
					  "Likes": 0,
					  "published_at": "2021-04-26T19:48:01.865Z",
					  "created_by": "string",
					  "updated_by": "string"
					}
				})

			resolve();
		})
	}
};
