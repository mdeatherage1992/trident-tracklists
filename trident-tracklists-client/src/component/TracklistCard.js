import React from 'react';
import Like, { Component } from './Like';

const TracklistCard = ({tracklist}) => (
  <div key={tracklist.id} className="tracklistCard">
  <h3>Title: {tracklist.title}</h3>
  <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src={tracklist.url}> </iframe>
  <p>Genre: {tracklist.genre}</p>
  <p>Tracklist: {tracklist.tracklist}</p>
  <p> Likes: {tracklist.likes} </p>
  <div className="like">
  < Like />
  </div>
  </div>
)

export default TracklistCard;
