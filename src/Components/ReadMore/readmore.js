import React from "react";
import {
  CardBody,
  Container,
  Row,
  Col,
  CardTitle,
  CardImg,
} from "shards-react";
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare, FiSave } from 'react-icons/fi';
import './readmore.css';

const ReadMore: React.FC = () => {
  return (
    <div>
        <Container className='readmorecontainer'>
          <h5>Read More</h5>
          <Row>
            <Col className="smallercontainer">
              <img src='https://source.unsplash.com/random'/>
              <br/>
              <h5>This is the title</h5>
              <p className="smalltext">The Description for the post would be here</p>
            </Col>
            <Col className="smallercontainer">
              <img src='https://source.unsplash.com/random'/>
              <br/>
              <h5>This is the title</h5>
              <p className="smalltext">The Description for the post would be here</p>
            </Col>
            <Col className="smallercontainer">
              <img src='https://source.unsplash.com/random'/>
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
