import { Dispatch } from 'redux';
import axios from 'axios';

export const Login = ( email, password ) => {
	return ( dispatch:Dispatch ) => {
		var data;

		console.log('Process: User Login');
		axios({
			method: 'post',
  		url: 'http://localhost:1337/auth/local',
  		data: {
    		"identifier": `${email}`,
    		"password": `${password}`
  			}
			})
		.then(res => {
			data = res.data;

			sessionStorage.setItem("me", JSON.stringify(data));
			console.log(sessionStorage.getItem("me"))

			dispatch({
				type: "AUTH_LOGIN",
				data: data
			});
		})
	};
};


export const Signup = ( username, email, password ) => {
	return ( dispatch:Dispatch ) => {
		var data;

		console.log('Process: User Signup');
		axios({
			method: 'post',
  		url: 'http://localhost:1337/auth/local/register',
  		data: {
				  "username": `${username}`,
				  "email": `${email}`,
				  "provider": "string",
				  "password": `${password}`,
				  "resetPasswordToken": "string",
				  "confirmationToken": "string",
				  "confirmed": false,
				  "blocked": false,
				  "role": "string",
				  "articles": [
				    "string"
				  ],
				  "created_by": "string",
				  "updated_by": "string"
  			}
			})
		.then(res => {
			data = res.data;

			sessionStorage.setItem("me", JSON.stringify(data));
			console.log(sessionStorage.getItem("me"))

			dispatch({
				type: "AUTH_LOGIN",
				data: data
			});
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
			 type: "GET_USER",
			 data: me,
		 });
	}else{
		// TODO - this route require a jwt token but user might not be logged in.
		console.log('Process: Fetching Calendar')
		axios.get(`http://localhost:1337/users/me`)
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

		var data = {
			title: title,
			description: title,
			content: content,
		}

		dispatch({
			type: "ARTICLE_SAVE",
			data: data
		});
	}
};
