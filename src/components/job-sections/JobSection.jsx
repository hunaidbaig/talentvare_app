import React from 'react';
import './style.css'
import JobCard from '../job-card/JobCard';

function JobSection({ title, type }) {
  const jobs = Array(5).fill({
    title: 'UI/UX Designer',
    location: 'Seattle, USA (Remote)',
    date: '1 day ago',
    applicants: '22 applicants',
    promoted: type === 'featured',
  });

  return (
    <section className="job-section">
      <div className="job-section-header">
        <h2>{title}</h2>
        <a href="#">See {type === 'featured' ? 'Featured' : 'Recommended'} Jobs</a>
      </div>
      <div className="job-list">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </section>
  );
}

export default JobSection