
import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "shards-react";
import "./NavBar.css"

export default class NavBar extends React.Component {
  render() {
    return (
        <Navbar type="dark" expand="md" className='navigationbar' style={{position: "sticky", top: "0", zIndex: "1"}}>
          <NavbarBrand href="/feed" className='ml-auto'><strong className="makewhite">Developer-Fail-Story</strong></NavbarBrand>
          <Nav navbar className='ml-auto'>
              <NavItem>
                <NavLink active style={{fontSize: "1rem"}} className="makewhite">
                  BETA v1.0
                </NavLink>
              </NavItem>
          </Nav>
          <div className='ml-auto'></div>
        </Navbar>
    );
  }
}
