import React from "react";
import {
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Form,
  FormInput,
  FormGroup,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  CardTitle,
  CardImg,
  CardHeader,
  CardFooter
} from "shards-react";
import './feed.css';

import Navbar from '../../Components/NavBar';
import FeedNav from '../../Components/FeedNav';
import OurStoryCard from '../../Components/OurStoryCard';

export default class Feed extends React.Component {
  render() {

      let stories = [1,2,3,4,5];


    return (
    <div>
      <Navbar />

      <Container>
        <Row>
            <Col sm="12" md="4" lg="8">
              <Card className='feedarea'>
                  <CardBody>
                      <FeedNav />
                      <hr />

                      {stories.map((story, index) => (
                          <div key={index} style={{ width: "100%" }} className='feedcards'>
                              <CardImg src="https://source.unsplash.com/random/300x200" style={{ width: "15%", height: "100%", margin: "1rem"}}/>
                              <CardTitle style={{ margin: "1.5rem"}}>{story}</CardTitle>
                                <div style={{ margin: "1.5rem"}}>
                                    <CardTitle style={{ margin: "0"}}>Lorem Ipsum</CardTitle>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                          </div>
                        ))}

                  </CardBody>
              </Card>
            </Col>

            <Col>
                <Row>
                    <OurStoryCard />
                </Row>

              <Row className='onboardSection'>
                  <Card className='feedarea'>
                      <CardBody>
                        <h5>Top Stories</h5>
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
}
