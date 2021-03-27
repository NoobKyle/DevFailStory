
import React from "react";
import {
  Card, CardBody
} from "shards-react";

export default class OnBoardCard extends React.Component {
  render() {
    return (
        <Card className='feedarea'>
            <CardBody>
              <h5>Write Your Own Story</h5>
              <p>This is why the next 12 months, I will be pulling back
              the curtain on my business and providing a raw, real and
              vulnerable look inside my entrepreneurial journey building
              my new agency, Predictable Growth.
              </p>
            </CardBody>
        </Card>
    );
  }
}
