import { Dispatch } from 'redux'
import axios from "axios";
let result;

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

async function getData2(){
		await axios.get(`https://jsonplaceholder.typicode.com/users`)
			.then(res => {
				result = res.data;
				console.log(result)
			})
	}

export const GetData = () => {
	    return ( dispatch:Dispatch ) => {
	        var data

          console.log('Process: Fetching Feed')
          axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
              data = res.data;

          dispatch({
              type: "GET_FEED",
              data: data,
            });
      	})
	  	};
  	};
