import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css'

import Login from './Pages/Login/login';
import Signup from './Pages/Signup/signup';
import Landing from './Pages/Static/LandingPage/landing';
import About from './Pages/Static/About/about';
import Story from './Pages/Story/story';
import NotFound from './Pages/Static/404/404';

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
    {signed ?  <App />  : (<div className='App'>
      <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/landing" />
            </Route>
            <Route exact path="/landing">
              <Landing/>
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/story/:id/ref=twitter">
              <Story />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
      </Router>
     </div>) }
    </div>
  );
}

export default PrivateRoutes;
