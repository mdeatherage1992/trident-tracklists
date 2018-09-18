import React, {Component} from 'react';
import Tracklists from './Tracklists';
import './App.css';
import './Tracklists.css';
import Auth from '../modules/Auth'

import {BrowserRouter as Router,Link,Redirect, Route} from 'react-router-dom';

// const tracklists = [
//   {
//   title: "new Tracks",
//    url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/497178522&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
//    genre: "Techno",
//    tracklist: "new stuff"
// },
// {
//   title: "old Tracks",
//    url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/493745535&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
//    genre: "Deep",
//    tracklist: "new tunes"
// }
// ]



class App extends Component {

    constructor() {
      super();
      this.state = {
        auth: Auth.isUserAuthenticated(),
      }
    }

  render () {
    return (
      <Router>
      <div className="App">
      <Tracklists />
      </div>
      </Router>
    );
  }
}

export default App;

// var collection = {
//   tracklists: [
//
//   ],
//   tracklistFormData: [
//     {
//       title:
//       url:
//       genre:
//       tracklist:
//     }
//   ],
//   currentTracklist: {
//
//   }
// }


// fetch('http://localhost:3001/api/tracklists')
// .then(response => response.json())
// // .then(tracklists => this.setState({tracklists}))
