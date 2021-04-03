import React from "react";
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
            <p>Success Stories Are Great -- Failure Stories Are Even Better</p>
          </div>
        </div>
      </div>
    );
  }
}
