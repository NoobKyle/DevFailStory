import React from "react";
import Editor from "rich-markdown-editor";
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from "shards-react";
import './write.css';

import Navbar from '../../Components/NavBar';

export default class Write extends React.Component {
  render() {
    return (
    <div>
      <Navbar />

      <Container>
        <Row>
            <Col sm="12" md="4" lg="8">
              <Card className='writearea'>
                  <CardBody>
                    <Editor
                      defaultValue="Hello world!"
                      className='editorarea'
                      />

                  </CardBody>
              </Card>
            </Col>

            <Col>
                <Row>
              <Card className='feedarea'>
                  <CardBody>
                    <h5>Instructions</h5>
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
                        <h5>Growing Tips</h5>
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
