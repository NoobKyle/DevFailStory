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
import './user.css';

export default class User extends React.Component {

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

      <Container>
        <Row>
            <Col sm="12" md="4" lg="8">
              <Card className='feedarea'>
                  <CardBody>

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
