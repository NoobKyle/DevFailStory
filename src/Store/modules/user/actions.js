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
