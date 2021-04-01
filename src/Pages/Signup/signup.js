import React from "react";
import {
  Button,
  Form,
  FormInput,
  FormGroup
} from "shards-react";
import './signup.css';

import Navbar from '../../Components/NavBar';

export default class Signup extends React.Component {
  render() {
    return (
    <div>
      <Navbar />

      <h3 className='headertext'>Signup</h3>
      <Form className='loginForm'>
          <FormGroup>
            <label htmlFor="#username">Username</label>
            <FormInput id="#username" placeholder="Username" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="#password">Password</label>
            <FormInput type="password" id="#password" placeholder="Password" />
          </FormGroup>
          <Button outline type='submit'>Enter</Button>
      </Form>

      <br />
      <br />
      <a href='/login'>Login</a>
    </div>
    );
  }
}
