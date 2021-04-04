import React, { useState } from "react";
import {
  Button,
  Form,
  FormInput,
  FormGroup
} from "shards-react";
import './signup.css';

import { useDispatch } from "react-redux";
import { Signup } from "../../Store/modules/user/actions";

import Navbar from '../../Components/NavBar';

const SignupPage: React.FC = () => {

    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function SignupFunction(e){
      e.preventDefault();
      dispatch(Signup(username, email, password));

      setTimeout(function(){ window.location.replace("/feed"); }, 4000);
    }

    return (
    <div>
      <Navbar />

      <h3 className='headertext'>Signup</h3>
      <Form className='loginForm'>
          <FormGroup>
            <label htmlFor="#username">Username</label>
            <FormInput id="#username" placeholder="Username" value={username} onChange={f => {setUsername(f.target.value)}} />
          </FormGroup>
          <FormGroup>
            <label htmlFor="#username">Email</label>
            <FormInput id="#username" placeholder="email@website.com" value={email} onChange={f => {setEmail(f.target.value)}} />
          </FormGroup>
          <FormGroup>
            <label htmlFor="#password">Password</label>
            <FormInput type="password" id="#password" placeholder="Password" value={password} onChange={i => {setPassword(i.target.value)}}/>
          </FormGroup>
          <Button outline type='submit' onClick={e => {SignupFunction(e)}}>Enter</Button>
      </Form>

      <br />
      <br />
      <a href='/login' style={{"font-weight":"bold", "text-decoration":"underline"}}>Login</a>
    </div>
    );
  }

export default SignupPage;
