import React from "react";
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from "shards-react";
import './story.css';

import Navbar from '../../Components/NavBar';

export default class Feed extends React.Component {
  render() {
    return (
    <div>
      <Navbar />

      <Container>
        <Row>
            <Col sm="12" md="4" lg="8">
              <Card className='feedarea'>
                  <CardBody>
                      <h3>Building a 100M+ Business</h3>
                      <br />
                      <h6>355 Likes</h6>
                      <h6><a href="/user">By Kyle Kadango</a></h6>
                      <br />
                      <br />
                      <p>This is why the next 12 months, I will be pulling back
                      the curtain on my business and providing a raw, real and
                      vulnerable look inside my entrepreneurial journey building
                      my new agency, Predictable Growth.
                      </p>
                      <p>This is why the next 12 months, I will be pulling back
                      the curtain on my business and providing a raw, real and
                      vulnerable look inside my entrepreneurial journey building
                      my new agency, Predictable Growth.This is why the next 12
                      months, I will be pulling back
                      the curtain on my business and providing a raw, real and
                      vulnerable look inside my entrepreneurial journey building
                      my new agency, Predictable Growth.This is why the next 12
                       months, I will be pulling back
                      the curtain on my business and providing a raw, real and
                      vulnerable look inside my entrepreneurial journey building
                      my new agency, Predictable Growth.
                      This is why the next 12 months, I will be pulling back
                      the curtain on my business and providing a raw, real and
                      vulnerable look inside my entrepreneurial journey building
                      my new agency, Predictable Growth.This is why the next 12
                      months, I will be pulling back
                      the curtain on my business and providing a raw, real and
                      vulnerable look inside my entrepreneurial journey building
                      my new agency, Predictable Growth.
                      </p>
                      <p>This is why the next 12 months, I will be pulling back
                      the curtain on my business and providing a raw, real and
                      vulnerable look inside my entrepreneurial journey building
                      my new agency, Predictable Growth.This is why the next 12
                      months, I will be pulling back
                      the curtain on my business and providing a raw, real and
                      vulnerable look inside my entrepreneurial journey building
                      my new agency, Predictable Growth.This is why the next 12
                       months, I will be pulling back
                      the curtain on my business and providing a raw, real and
                      vulnerable look inside my entrepreneurial journey building
                      my new agency, Predictable Growth.
                      This is why the next 12 months, I will be pulling back
                      the curtain on my business and providing a raw, real and
                      vulnerable look inside my entrepreneurial journey building
                      my new agency, Predictable Growth.This is why the next 12
                      months, I will be pulling back
                      the curtain on my business and providing a raw, real and
                      vulnerable look inside my entrepreneurial journey building
                      my new agency, Predictable Growth.
                      </p>
                      <p>This is why the next 12 months, I will be pulling back
                      the curtain on my business and providing a raw, real and
                      vulnerable look inside my entrepreneurial journey building
                      my new agency, Predictable Growth.
                      </p>

                      <div className="profile">
                        <img src="https://source.unsplash.com/random" style={{ width: "15%"}} alt="" />
                        <div>
                            <h4 style={{ padding: "1rem"}}>Kyle Kadango</h4>
                            <a href="https://twitter.com/kyle___t">Twitter</a>
                        </div>
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
}
