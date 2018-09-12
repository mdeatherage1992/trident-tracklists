import React, {Component} from 'react';
import Tracklists from './Tracklists';
import './App.css';

const tracklists = [
  {
  title: "new Tracks",
   url: "link.io",
   genre: "Techno",
   tracklist: "new stuff"
},
{
  title: "old Tracks",
   url: "links.io",
   genre: "Deep",
   tracklist: "new tunes"
}
]

class App extends Component {
  render () {
    return (
      <div className="App">
      <Tracklists tracklists={tracklists} />
      </div>
    );
  }
}

export default App;
