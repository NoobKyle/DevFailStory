import React, { useState } from "react";
import {
  Button,
  Form,
  FormInput,
  FormGroup
} from "shards-react";
import './login.css';

import { useDispatch } from "react-redux";
import { Login } from "../../Store/modules/user/actions";

import Navbar from '../../Components/NavBar';

const LoginPage: React.FC = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function LoginFunction(e){
      e.preventDefault();
      console.log('Email: '+ email + ' ' + 'Password: ' + password)
      dispatch(Login(email,password));

      setTimeout(function(){ window.location.replace("/feed"); }, 3000);
    }

    return (
    <div>
      <Navbar />

      <h3 className='headertext'>Login</h3>
      <Form className='loginForm'>
          <FormGroup>
            <label htmlFor="#username">Username</label>
            <FormInput id="#username" placeholder="Username" value={email} onChange={f => {setEmail(f.target.value)}}/>
          </FormGroup>
          <FormGroup>
            <label htmlFor="#password">Password</label>
            <FormInput type="password" id="#password" placeholder="Password" value={password} onChange={i => {setPassword(i.target.value)}}/>
          </FormGroup>
          <Button outline type='submit' onClick={e => {LoginFunction(e)}}>Enter</Button>
      </Form>

      <br />
      <br />
      <a href='/signup'>Signup</a>
    </div>
    );
  }

export default LoginPage;
