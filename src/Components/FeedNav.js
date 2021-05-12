
import React from "react";
import {
  Nav,
  NavItem,
  NavLink,
} from "shards-react";

export default class FeedNav extends React.Component {
  render() {
    return (
        <Nav>
          <NavItem>
            <NavLink disable href="#">
              Today
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disable href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disable href="#">Another Link</NavLink>
          </NavItem>
          <NavItem className='ml-auto' style={{'text-decoration':'underline'}}>
            <NavLink href="/me"> My Account</NavLink>
          </NavItem>
        </Nav>
    );
  }
}
