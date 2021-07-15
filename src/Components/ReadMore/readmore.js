import React from "react";
import {
  Container,
  Row,
  Col,
} from "shards-react";
import './readmore.css';

const ReadMore: React.FC = () => {
  return (
    <div>
        <Container className='readmorecontainer'>
          <h5>Read More</h5>
          <Row>
            <Col className="smallercontainer">
              <img src='https://source.unsplash.com/random' alt=""/>
              <br/>
              <h5>This is the title</h5>
              <p className="smalltext">The Description for the post would be here</p>
            </Col>
            <Col className="smallercontainer">
              <img src='https://source.unsplash.com/random' alt=""/>
              <br/>
              <h5>This is the title</h5>
              <p className="smalltext">The Description for the post would be here</p>
            </Col>
            <Col className="smallercontainer">
              <img src='https://source.unsplash.com/random' alt=""/>
              <br/>
              <h5>This is the title</h5>
              <p className="smalltext">The Description for the post would be here</p>
            </Col>
          </Row>
        </Container>
    </div>
    );
  }

export default ReadMore;
