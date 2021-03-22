import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Form,
  FormInput,
  FormGroup
} from "shards-react";
import './login.css';

export default class Login extends React.Component {

  render() {
    return (
    <div>
      <Navbar type="light" expand="md" className='navigationbar'>
        <NavbarBrand href="/" className='ml-auto'><strong>Developer-Fail-Story</strong></NavbarBrand>
        <Nav navbar className='ml-auto'>
            <NavItem>
              <NavLink active>
                BETA v1.0
              </NavLink>
            </NavItem>
        </Nav>
        <div className='ml-auto'></div>
      </Navbar>

      <h3 className='headertext'>Share and learn from the developer failure stories</h3>
      <p className='headersubtext'>A community for lifelong learners to share and discover their journeys towards learning something new.</p>
      <br />

      <h3 className='headertext'>Login</h3>
      <Form className='loginForm'>
          <FormGroup>
            <label htmlFor="#username">Username</label>
            <FormInput id="#username" placeholder="Username" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="#password">Password</label>
            <FormInput type="password" id="#password" placeholder="Password" />
          </FormGroup>
          <Button outline type='submit' href='/feed'>Enter</Button>
      </Form>

      <br />
      <br />
      <a href='/signup'>Signup</a>
    </div>
    );
  }
}
