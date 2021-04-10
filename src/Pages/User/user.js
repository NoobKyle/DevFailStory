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
import './user.css';

import { useSelector, useDispatch } from "react-redux";
import { GetUser } from "../../Store/modules/feed/actions";

import Navbar from '../../Components/NavBar';

const User: React.FC = () => {

  const dispatch = useDispatch();

  const user = useSelector(state => state.feed.searchedUser);

  var { name } = useParams();

  useEffect(() => {
    dispatch(GetUser(name))
  },[dispatch, name]);

  return (
    <div>
      <Navbar />

      <Container>
        <Row>
            <Col sm="12" md="4" lg="8">
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
                          <NavItem className="ml-auto">
                            <NavLink href="/write">+ Story</NavLink>
                          </NavItem>
                        </Nav>
                    </div>

                    <hr />

                    <div className="postsContainer">

                    {user.articles.map((article, index) => (
                      <Card key={index}>
                          <CardImg top src="https://source.unsplash.com/random" />
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

            <Col>
                <Row>
              <Card className='feedarea'>
                  <CardBody>
                    <h5>Our Story</h5>
                    <p>This is why the next 12 months, I will be pulling back
                    the curtain on my business and providing a raw, real and
                    vulnerable look inside my entrepreneurial journey building
                    my new agency, Predictable Growth.
                    </p>
                  </CardBody>
              </Card>
              </Row>

              <Row className='onboardSection'>
                  <Card className='feedarea'>
                      <CardBody>
                        <h5>Share your story</h5>
                        <p>This is why the next 12 months, I will be pulling back
                        the curtain on my business and providing a raw, real and
                        vulnerable look inside my entrepreneurial journey building
                        my new agency, Predictable Growth.
                        </p>
                        <p>This is why the next 12 months, I will be pulling back
                        the curtain on my business and providing a raw, real and
                        vulnerable look inside my entrepreneurial journey building
                        my new agency, Predictable Growth.
                        </p>
                        <p>This is why the next 12 months, I will be pulling back
                        the curtain on my business and providing a raw, real and
                        vulnerable look inside my entrepreneurial journey building
                        my new agency, Predictable Growth.
                        </p>
                      </CardBody>
                  </Card>
              </Row>
            </Col>
        </Row>
      </Container>

    </div>
    );
  }

export default User;
