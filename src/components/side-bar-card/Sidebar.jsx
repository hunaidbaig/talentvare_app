import React from 'react';
import profileBg from '../../assets/profile-bg.png';
import profilePic from '../../assets/profile-card.png';
import './style.css';
import CalendarAccordion from './CalendarAccordion';

const SidebarCard = () => {
  return (
    <div className="sidebar-card">
      <div className="header-image">
        <img src={profileBg} alt="Background" />
        <img src={profilePic} alt="Profile" className="profile-avatar" />
      </div>
      <div className="user-info">
        <h2>Albert Flores</h2>
        <p className="title">
          Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
        </p>
        <p className="location">Clinton, Maryland</p>
      </div>

      <div className="stats">
        <div className="stat-item">
          <span>Profile Visitors</span>
          <span className="stat-value">140</span>
        </div>
        <div className="stat-item">
          <span>Resume Viewers</span>
          <span className="stat-value">20</span>
        </div>
        <div className="stat-item">
          <span>My Jobs</span>
          <span className="stat-value">88</span>
        </div>
      </div>

      {/* <div className="calendar-section">
        <h3>My calendar</h3>
        <p className="calendar-label">Upcoming Interviews</p>
      </div> */}
      <CalendarAccordion />
    </div>
  );
};

export default SidebarCard;
