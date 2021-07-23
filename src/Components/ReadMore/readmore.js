import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, } from "shards-react";
import './readmore.css';

const ReadMore: React.FC = () => {

  const articles = useSelector(state => state.feed.data);

  return (
    <div>
        <Container fluid className='readmorecontainer'>
          <h5>Read More</h5>
          <Row>
            <Col sm="12" md="4" lg="4" className="smallercontainer">
              <h5>This is the title</h5>
              <p className="smalltext">The Description for the post would be here</p>
            </Col>
            <Col sm="12" md="4" lg="4" className="smallercontainer">
              <h5>This is the title</h5>
              <p className="smalltext">The Description for the post would be here</p>
            </Col>
            <Col sm="12" md="4" lg="4" className="smallercontainer">
              <h5>This is the title</h5>
              <p className="smalltext">The Description for the post would be here</p>
            </Col>
          </Row>
        </Container>
    </div>
    );
  }

export default ReadMore;
