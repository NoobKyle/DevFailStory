import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';

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

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
              <Route exact path="/">
                <Redirect to="/landing" />
              </Route>
              <Route exact path="/landing">
                  <Landing />
              </Route>
              <Route path="/login">
                  <Login/>
              </Route>
              <Route path="/signup">
                  <Signup/>
              </Route>
              <Route path="/feed">
                  <Feed/>
              </Route>
              <Route path="/story/:id">
                  <Story/>
              </Route>
              <Route path="/user/:name">
                  <User/>
              </Route>
              <Route path="/write">
                  <Write/>
              </Route>
              <Route path="/me">
                  <Me/>
              </Route>
              <Route path="/about">
                  <About/>
              </Route>
              <Route path="*">
                  <NotFound/> 
              </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
