
import React from "react";
import {
  Card, CardBody
} from "shards-react";

export default class OurStoryCard extends React.Component {
  render() {
    return (
        <Card className='feedarea'>
            <CardBody>
              <h5>Our Story</h5>
              <p>My goal is for Dev Fail Story to be a source of inspiration,
              education, and community for advanced and aspiring
              developers on a global scale.
              </p>
              <a href='/about'>Learn more</a>
            </CardBody>
        </Card>
    );
  }
}
