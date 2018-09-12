import React from 'react';
import './Tracklists.css';


const Tracklists = (props) => (
<div>
<h1> Tracklists</h1>
{props.tracklists.map(tracklist =>
  <div className="tracklistCard">
  <h3>Title: {tracklist.title}</h3>
  <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src={tracklist.url}> </iframe>
  <p>Genre: {tracklist.genre}</p>
  <p>Tracklist: {tracklist.tracklist}</p>

</div>
)}
</div>
);

export default Tracklists;
