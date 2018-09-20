import React, {Component} from 'react';
import Tracklists from './Tracklists';
import './App.css';
import './Tracklists.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import Loginscreen from './Loginscreen';
import SideNavBar from '../component/nav/SideNavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TracklistForm from './TracklistForm'
import Home from './Tracklists'


class App extends Component {
  render () {
    return (
      <div>
      <div className="App">
      </div>

      <Router>
      <div className='overflow'>
        <SideNavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/tracklists/new' component={TracklistForm} />
        </Switch>
      </div>
    </Router>
    </div>

    );
  }


}

export default App;
