import React, {Component} from 'react';
import Tracklists from './Tracklists';
import './App.css';
import './Tracklists.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import Loginscreen from './Loginscreen';
import SideNavBar from '../component/nav/SideNavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TracklistForm from './TracklistForm';
import Home from './Home';
import Form from './Form';
import Welcome from './Welcome';

class App extends Component {
  render () {
    return (
      <div>

    <div className="App">
    <Welcome />
    </div>
    </div>

    );
  }


}

export default App;
