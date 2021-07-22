
import React from "react";
import {
  Nav,
  NavItem,
  NavLink,
} from "shards-react";

const FeedNav: React.FC = () => {
    return (
        <Nav>
          <NavItem>
            <NavLink disable href="#">
              Today
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disable href="/write">Write</NavLink>
          </NavItem>
          <NavItem className='ml-auto' style={{'text-decoration':'underline'}}>
            <NavLink href="/me"> My Account</NavLink>
          </NavItem>
        </Nav>
    );
  }

export default FeedNav;
