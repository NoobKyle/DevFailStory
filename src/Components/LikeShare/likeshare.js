import React from "react";
import { Container, Row, Col } from "shards-react";
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare, FiSave } from 'react-icons/fi';
import './likeshare.css';

const LikeShare: React.FC = () => {
  const postURL = window.location.href;

  return (
    <div>
      <hr/>
        <Container className='likesharecontainer'>
          <Row>
            <Col><AiOutlineHeart/></Col>
            <Col>
              <a href={`https://twitter.com/intent/tweet?text=Hey!%20check%20out%20this%20awesome%20post%20I%20found%20on%20%23devfailstory%0D%0D${postURL}/ref=twitter`} target="_blank">
                <FiShare className="sharebutton"/>
              </a>
            </Col>
            <Col><FiSave/></Col>
          </Row>
        </Container>
    </div>
    );
  }

export default LikeShare;
