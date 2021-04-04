import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css'

import Landing from './Pages/Static/LandingPage/landing';
import Login from './Pages/Login/login';
import Signup from './Pages/Signup/signup';
import Feed from './Pages/Feed/feed';
import Story from './Pages/Story/story';
import User from './Pages/User/user';
import Me from './Pages/Me/me';
import Write from './Pages/Write/write';
import NotFound from './Pages/Static/404/404';
import About from './Pages/Static/About/about';

import App from './App';

const PrivateRoutes: React.FC = () => {

  const [signed, setSigned] = useState(false);

  useEffect(() => {
    if(sessionStorage.getItem("me")){
      setSigned(true);
    }
  })

  return (
    <div>
    {signed ?  <App />  : (<div className='App'> <Login/> </div>) }
    </div>
  );
}

export default PrivateRoutes;
