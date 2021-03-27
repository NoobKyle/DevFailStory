import React from "react";
import {
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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

      <h3 className='headertext'>Share and learn from the developer failure stories</h3>
      <p className='headersubtext'>A community for lifelong learners to share and discover their journeys towards learning something new.</p>
      <br />

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
