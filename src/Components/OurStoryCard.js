
import React from "react";
import {
 CardBody
} from "shards-react";

export default class OurStoryCard extends React.Component {
  render() {
    return (
        <div className='ourstorySection'>
            <CardBody>
              <h5>Our Story</h5>
              <p>My goal is for Dev Fail Story to be a source of inspiration,
              education, and a community for advanced and aspiring
              developers on a global scale.
              </p>
              <a href='/about' style={{'text-decoration': 'underline'}}>Learn more</a>
            </CardBody>
        </div>
    );
  }
}
