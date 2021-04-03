import React from "react";
import {
  Button
} from "shards-react";
import './about.css';

import Navbar from '../../../Components/NavBar';

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="aboutcontainer">
          <h4>About</h4>
          <h2>Developer Fail Story</h2>
          <hr width="50%" />

          <div className='shortstory'>
            <h5>Mission</h5>
            <p>Behind every success story is an embarrassing first effort,
             a stumble, a setback or a radical change of direction. It’s
             these first clumsy steps on the road to fame and fortune that
             has brought this platform to life, a collection of case studies
             on the lessons learned thanks to failure.</p>
          </div>

          <div className='quoteline'>
            <p>Success Stories Are Great - Failure Stories Are Even Better</p>
          </div>

          <h5>Building Dev fail Story</h5>
          <p className='shortstory'>Hey, My name is
          <a href='https://twitter.com/kyle___t' className='mytwitter'> Kyle</a>
          , a 17 year old Full-Stack Developer and tech fanatic who build dev
           fail story after reading an article about how a local developer
          accidentaly deleted all contents of a production database at a company he
          was working at. He later then found out that the 'mistake' was actually
          the result of a zero-day vulnerability which then later led to him earning
          a fortune after reporting it.
          <br/>
          <br/>
          I then noticed that of all the amazing developers around the world,
          there is one thing missing...
          <br/>
          <br/>
          Their amazing 'failure' stories.
          <br/>
          <br/>
          So my mission to build a platform where developers around the world can
          share and learn from other developer stories had began and this was the
          birth of dev fail story.
          </p>

          <div className='quoteline'>
            <hr/>
          </div>
        </div>
      </div>
    );
  }
}
