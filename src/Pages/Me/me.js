import React, { useEffect } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  CardImg,
} from "shards-react";
import { useParams } from "react-router-dom";
import './me.css';

import { useSelector, useDispatch } from "react-redux";
import { GetUser } from "../../Store/modules/feed/actions";

import Navbar from '../../Components/NavBar';

const Me: React.FC = () => {

  const dispatch = useDispatch();

  const user = useSelector(state => state.feed.searchedUser);

  var { id } = useParams();

  useEffect(() => {
    dispatch(GetUser(id))
  },[dispatch, id]);

  function logout(){
    sessionStorage.removeItem("me");
    setTimeout(function(){ window.location.replace("/"); }, 4000);
  }

  return (
    <div>
      <Navbar />

      <Container>
        <Row>
            <Col sm="12" md="12" lg="12">
              <Card className='feedarea'>
                  <CardBody>
                    <div className="profileHeader">
                        <img src="https://source.unsplash.com/random"  className="profileImage" alt=""/>
                        <div>
                            <h3>{user.username}</h3>
                            <h6>489 Followers</h6>
                            <a href="/feed">Follow</a>
                        </div>

                        <div className="socialLinks">
                            <a href="https://twitter.com/kyle___t">Twitter</a>
                            <a href="https://twitter.com/kyle___t">Blog</a>
                        </div>
                    </div>

                    <div className="navigation">
                        <Nav>
                          <NavItem>
                            <NavLink active href="#">
                              Active
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#">Link</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#">Another Link</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="/write">Write +</NavLink>
                          </NavItem>
                          <NavItem className="ml-auto">
                            <NavLink onClick={() => { logout() }}>Logout -</NavLink>
                          </NavItem>
                        </Nav>
                    </div>

                    <hr />

                    <div className="postsContainer">


                      <Card >
                          <CardImg top src="https://source.unsplash.com/random" />
                          <CardBody>
                            <h4>User Profile Page</h4>
                            <p>This will be the profile page of a user.</p>
                          </CardBody>
                       </Card>
                    </div>

                  </CardBody>
              </Card>
            </Col>
        </Row>
      </Container>

    </div>
    );
  }

export default Me;
