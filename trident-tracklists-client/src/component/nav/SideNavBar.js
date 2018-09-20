
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const SideNavBar = () => {
  return (
    <div className='mySidenav'>
      <ul>
        <Link to='/'>Home</Link><br />
        <Link to='/tracklist/new'>New Tracklist</Link>
      </ul>
    </div>
  );
};

export default SideNavBar;
