import React from "react";
import {
  Button
} from "shards-react";
import './landing.css';

import Navbar from '../../Components/NavBar';

export default class Landing extends React.Component {
  render() {
    return (
    <div>
      <Navbar />

      <h3 className='headertext'>Share and learn from the developer failure stories</h3>
      <p className='headersubtext'>A community for lifelong learners to share and discover their journeys towards learning something new.</p>
      <Button outline href='/login'>Explore the BETA</Button>
      <br />
      <img src='./header.jpg' className='headerimg' alt=""></img>

      <h4>Share Your Journey</h4>
      <p className='explainertext'>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
      and typesetting industry Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s when an unknown printer took a galley of
      type and scrambled it to make a type specimen book it has?
      </p>

      <h4>Unpack New Skills</h4>
      <p className='explainertext'>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
      and typesetting industry Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s when an unknown printer took a galley of
      type and scrambled it to make a type specimen book it has?
      </p>
    </div>
    );
  }
}
