import React, {Component} from 'react';
import { connect } from 'react-redux'
import './Tracklists.css';
import TracklistCard from '../component/TracklistCard';
import TracklistForm from './TracklistForm';
import {getTracklists} from '../actions/tracklists';
class Tracklists extends Component {

componentDidMount() {
  debugger;
  this.props.getTracklists()
}


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
const mapStateToProps = (state) => {
  return ({
    tracklists: state.tracklists
  })
}
export default connect(mapStateToProps, {getTracklists})(Tracklists);


// <div className="tracklistCard">
// <h3>Title: {tracklist.title}</h3>
// <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src={tracklist.url}> </iframe>
// <p>Genre: {tracklist.genre}</p>
// <p>Tracklist: {tracklist.tracklist}</p>
//
// </div>
// )}

// componentDidMount() {
//   this.props.dispatch({
//     type:'GET_TRACKLISTS_SUCCESS',
//     tracklists: [{title: "new Title", url:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/493745535&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
//     tracklist: "[01]Paul-Wall[02]Rae-Jon", Genre: "Techno"}]
//   })
// }
