import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './App.css';

import Landing from './Pages/LandingPage/landing';
import Login from './Pages/Login/login';
import Signup from './Pages/Signup/signup';
import Feed from './Pages/Feed/feed';
import Story from './Pages/Story/story';
import User from './Pages/User/user';
import Write from './Pages/Write/write';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch> 
              <Route exact path="/">
                <Redirect to="/landing" />
              </Route>
              <Route path="/landing">
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
              <Route path="/story">
                  <Story/>
              </Route>
              <Route path="/user">
                  <User/>
              </Route>
              <Route path="/write">
                  <Write/>
              </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
