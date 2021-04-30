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
      dispatch(Login(email,password))
      .then(() => {
        window.location.replace("/feed");
      })
    }

    return (
    <div>
      <Navbar />

      <h3 className='headertext'>Login</h3>
      <Form className='loginForm'>
          <FormGroup>
            <label htmlFor="#username">Email</label>
            <FormInput id="#username" placeholder="Email" value={email} onChange={f => {setEmail(f.target.value)}}/>
          </FormGroup>
          <FormGroup>
            <label htmlFor="#password">Password</label>
            <FormInput type="password" id="#password" placeholder="Password" value={password} onChange={i => {setPassword(i.target.value)}}/>
          </FormGroup>
          <Button outline type='submit' onClick={e => {LoginFunction(e)}}>Enter</Button>
      </Form>

      <br />
      <br />
      <a href='/signup' style={{"font-weight":"bold", "text-decoration":"underline"}}>Signup</a>
    </div>
    );
  }

export default LoginPage;
