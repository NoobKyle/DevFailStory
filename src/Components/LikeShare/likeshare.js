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
import './likeshare.css';

const LikeShare: React.FC = () => {
  return (
    <div>
      <hr/>
        <Container className='likesharecontainer'>
          <Row>
            <Col><AiOutlineHeart/></Col>
            <Col><FiShare/></Col>
            <Col><FiSave/></Col>
          </Row>
        </Container>
    </div>
    );
  }

export default LikeShare;
