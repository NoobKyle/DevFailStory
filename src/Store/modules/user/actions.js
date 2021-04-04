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
