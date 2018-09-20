import React, {Component} from 'react';
import Tracklists from './Tracklists';
import './App.css';
import './Tracklists.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import Loginscreen from './Loginscreen';
import SideNavBar from '../component/nav/SideNavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TracklistForm from './TracklistForm'
import Home from './Home'
import Form from './Form'

class App extends Component {
  render () {
    return (
      <div>
      <Router>
      <div className='overflow'>
        <SideNavBar />
        <Switch>
          <Route exact path= '/index' component={Home} />
          <Route exact path='/tracklist/new'component={Form}/>
        </Switch>
      </div>
    </Router>

    <div className="App">
    <Tracklists />
    </div>
    </div>

    );
  }


}

export default App;
