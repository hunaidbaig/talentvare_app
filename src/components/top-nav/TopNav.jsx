import React from 'react';
import logo from '../../assets/logo.png';
import profilePic from '../../assets/profile.png';
import SearchIcon from '../icons/SearchIconSvg';
import './style.css';
import Button from '../ui/Button';

const TopNavbar = () => {
  return (
    <div className='top-container'>
      <nav className="top-navbar">
        <div className="left-section">
          <img src={logo} alt="Logo" className="logo" />
          <ul className="nav-links">
            <li className="active">Find Jobs</li>
            <li>Top Companies</li>
            <li>Job Tracker</li>
            <li>My Calendar</li>
            <li>Documents</li>
            <li>Messages</li>
            <li>Notifications</li>
          </ul>
        </div>
        <div className="right-section">
          <div className="search-box">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
          <Button variant="primary">Resume Builder</Button>
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
      </nav>
    </div>
  );
};

export default TopNavbar;
