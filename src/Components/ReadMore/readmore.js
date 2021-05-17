import React, { useEffect } from "react";
import {
  Card,
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
            </Col>
            <Col className="smallercontainer">
              <img src='https://source.unsplash.com/random'/>
              <br/>
              <h5>This is the title</h5>
            </Col>
            <Col className="smallercontainer">
              <img src='https://source.unsplash.com/random'/>
              <br/>
              <h5>This is the title</h5>
            </Col>
          </Row>
        </Container>
    </div>
    );
  }

export default ReadMore;