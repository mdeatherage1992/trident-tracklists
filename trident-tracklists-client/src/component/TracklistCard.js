import React from 'react';

const TracklistCard = ({tracklist}) => (
  <div key={tracklist.id} className="tracklistCard">
  <h3>Title: {tracklist.title}</h3>
  <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src={tracklist.url}> </iframe>
  <p>Genre: {tracklist.genre}</p>
  <p>Tracklist: {tracklist.tracklist}</p>

  </div>
)

export default TracklistCard;
