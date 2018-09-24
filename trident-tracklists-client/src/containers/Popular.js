import React, {Component} from 'react';
import { connect } from 'react-redux'
import './Tracklists.css';
import TracklistCard from '../component/TracklistCard';
// import TracklistForm from './TracklistForm';
import {getTracklists} from '../actions/tracklists';
class Popular extends Component {

componentDidMount() {
  this.props.getTracklists()
}


  render () {
    return (
<div className="TracklistsContainer">
<h1> Tracklists</h1>
{this.props.tracklists.slice(0,1).map(tracklist =>
  <TracklistCard key={tracklist.id}tracklist={tracklist} />)}


</div>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
    tracklists: state.tracklists
  })
}
export default connect(mapStateToProps, {getTracklists})(Popular);
