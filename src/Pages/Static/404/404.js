import React from "react";
import './404.css';

import Navbar from '../../../Components/NavBar';

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="notfoundcontainer">
          <h2>404</h2>
          <h4>Oops! , Page not found.</h4>

          <br/>
          <h3><a href='/login'> -Login- </a></h3>
        </div>
      </div>
    );
  }
}
