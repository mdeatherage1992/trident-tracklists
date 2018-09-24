import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Form from './Form';
import Popular from './Popular';

import WelcomeBar from './WelcomeBar';





class Welcome extends Component {

  render () {
    return (
  <div>
<div className="WelcomeContainer">
  <h1>Welcome to the Trident Tracklists</h1>
  <h2>Home to The Best Videos Under the Sea</h2>
  </div>
  <Router>
  <div>
  <WelcomeBar />
    <Switch>
      <Route exact path= '/tracklists' component={Home} />
      <Route exact path= '/tracklists/popular' component={Popular} />
      <Route exact path='/tracklist/new'component={Form}/>
    </Switch>
  </div>
</Router>
</div>


    );
  }
}

export default Welcome ;
