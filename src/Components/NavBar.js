
import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "shards-react";

export default class NavBar extends React.Component {
  render() {
    return (
        <Navbar type="light" expand="md" className='navigationbar'>
          <NavbarBrand href="/feed" className='ml-auto'><strong>Developer-Fail-Story</strong></NavbarBrand>
          <Nav navbar className='ml-auto'>
              <NavItem>
                <NavLink active>
                  BETA v1.0
                </NavLink>
              </NavItem>
          </Nav>
          <div className='ml-auto'></div>
        </Navbar>
    );
  }
}
