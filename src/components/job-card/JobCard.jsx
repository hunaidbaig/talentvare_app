import React from 'react';
import TeamLogo from '../../assets/team_logo.png';
import './style.css'
import LocationSvg from '../icons/LocationSvg';
import ClockSvg from '../icons/ClockSvg';
import BookmarkSvg from '../icons/BookmarkSvg';
import Button from '../ui/Button';

function JobCard({ job }) {
  return (
    <div className="job-card">
      {job.promoted && <h5 className="promoted">Promoted</h5>}
      <div className="job-info">
        <div className='card-header'>
          <img src={TeamLogo} alt="team" className="team-logo" />
          <div>
            <h3>{job.title}</h3>
            <p className="company">Teams</p>
          </div>
        </div>

        <div className='detail-item'>
          <LocationSvg />
          <p className="location">{job.location}</p>
        </div>
        <div className='detail-item'>
          <ClockSvg />
          <p className="date">{job.date} | <span> </span> <a href="#" className='applicants'>{job.applicants}</a></p>
        </div>
      </div>
      <div className='detail-item btn'>
        <Button variant="full-width">Apply Now</Button>
        <BookmarkSvg />
      </div>
    </div>
  )
}

export default JobCard