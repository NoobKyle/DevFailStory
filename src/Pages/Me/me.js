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
import './me.css';

import { useSelector, useDispatch } from "react-redux";
import { Me } from "../../Store/modules/user/actions";

import Navbar from '../../Components/NavBar';

const MePage: React.FC = () => {

  const dispatch = useDispatch();

  const me = useSelector(state => state.user.me);

  useEffect(() => {
    dispatch(Me());
  },[dispatch]);

  async function logout(){
    await sessionStorage.removeItem("me");
    await window.location.replace("/");
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
                            <h3>{me.username}</h3>
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
                      {me.articles.map((article, index) =>(
                        <Card key={index} className='postcard'>
                            <CardImg top src="https://source.unsplash.com/random" className='postimage'/>
                            <CardBody>
                              <h4>{article.Title}</h4>
                              <p>{article.Description}</p>
                            </CardBody>
                         </Card>
                      ))}
                    </div>

                  </CardBody>
              </Card>
            </Col>
        </Row>
      </Container>

    </div>
    );
  }

export default MePage;
