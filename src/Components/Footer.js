
import React from "react";
import {
  Container,
  Row,
  Col
} from "shards-react";
import './Footer.css';

export default class NavBar extends React.Component {
  render() {
    return (
        <div className='footer'>
          <Container>
            <Row>
             <Col>
              <h5 className="makewhite">Developer Fail Story</h5>
              <p> Made with <span style={{color: "red"}}>&#9829;</span> by<a href="https://twitter.com/kyle___t" target='_blank' rel="noreferrer"> Kyle</a></p>
             </Col>
             <Col>
              <h6 className="makewhite">Navigation</h6>
              <a href='/feed' className="makeblue">Feed</a>
              <br/>
              <a href='/write' className="makeblue">Write</a>
             </Col>
             <Col>
              <h6 className="makewhite">Platform</h6>
              <a href='/about' className="makeblue">About</a>
              <br/>
              <a href='/about#Ourstory' className="makeblue">Our Story</a>
              <br/>
              <a href='https://twitter.com/kyle___t' target='_blank' rel="noreferrer">Contact</a>
             </Col>
           </Row>
          </Container>
        </div>
    );
  }
}
