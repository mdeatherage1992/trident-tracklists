import React from 'react';
import { Link } from 'react-router-dom';
// import Form from './Form';
// import Welcome from './Welcome';
// import Home from './Home';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const WelcomeBar = () => {
  return (
    <div>
    <div>
      <ul>
        <Link to='/tracklists'>Home</Link><br />
        <Link to='/tracklist/new'>New Tracklist</Link><br />
        <Link to='/tracklists/popular'>Our Weekly Pick</Link><br />
      </ul>
      </div>


  </div>
  );
};

export default WelcomeBar;
