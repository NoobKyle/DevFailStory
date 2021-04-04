import React from "react";
import {
  Button
} from "shards-react";
import './landing.css';

import Navbar from '../../../Components/NavBar';
import Footer from '../../../Components/Footer';

export default class Landing extends React.Component {
  render() {
    return (
    <div>
      <Navbar />

      <h3 className='headertext'>Share and learn from developer failure stories</h3>
      <p className='headersubtext'>A community for developers to make discoveries through story telling.</p>
      <Button outline href='/login'>Explore the BETA</Button>
      <br />
      <img src='./header.jpg' className='headerim g' alt=""></img>

      <h4>Share Your Journey</h4>
      <p className='explainertext'>Tell us about that one time you pushed code to production on a Friday afternoon and the whole app crashed. <br/>
      Or the time the new intern wiped out the production database due to wrong configuration and no backups where available.</p>

      <h4>Unpack New Skills</h4>
      <p className='explainertext'>Save yourself $$$ by learning from other developers mistakes on how they blew it from not setting limits on firebase.
      </p>

      <br />
      <h4 className="quotetext">“It’s fine to celebrate success, but it is more important to heed the lessons of failure.” -Bill Gates</h4>

      <Footer />
    </div>
    );
  }
}
