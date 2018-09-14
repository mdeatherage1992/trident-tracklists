import React, {Component} from 'react';
import './Tracklists.css';
import TracklistCard from '../component/TracklistCard';
import TracklistForm from './TracklistForm';
class Tracklists extends Component {

  render () {
    return (
<div className="TracklistsContainer">
<h1> Tracklists</h1>
{this.props.tracklists.map(tracklist =>
  <TracklistCard key={tracklist.id}tracklist={tracklist} />)}

  <TracklistForm />
</div>
    );
  }
}

export default Tracklists;


// <div className="tracklistCard">
// <h3>Title: {tracklist.title}</h3>
// <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src={tracklist.url}> </iframe>
// <p>Genre: {tracklist.genre}</p>
// <p>Tracklist: {tracklist.tracklist}</p>
//
// </div>
// )}
