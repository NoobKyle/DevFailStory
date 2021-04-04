
import React from "react";
import {
  Card, CardBody
} from "shards-react";

export default class OnBoardCard extends React.Component {
  render() {
    return (
        <Card className='feedarea'>
            <CardBody>
              <h5>Start Writing Today</h5>
              <p>Tell the full story, no filter, yes it was me, I deleted the db...
              <br/>
              The best mistake I have ever made in my life.
              <br/>
              Now is your chance to tell your story to a large audience, Join
              the hype and start writing today.
              </p>
              <a href='/write' style={{'text-decoration': 'underline'}}>Write</a>
            </CardBody>
        </Card>
    );
  }
}
