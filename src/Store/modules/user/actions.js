import { Dispatch } from 'redux';
import axios from 'axios';

export function login(){
	return {
		type: "@auth/LOGIN"
		};
	}
export function logout(){
	return {
		type: "@auth/LOGOUT",
		payload: string
		};
	}

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
