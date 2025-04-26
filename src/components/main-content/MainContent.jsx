import React from 'react'
import TopNav from '../top-nav/TopNav';
import './style.css'
import SidebarCard from '../side-bar-card/Sidebar';
import { SearchBar } from './SearchBar';
import JobSection from '../job-sections/JobSection';

function MainContent() {
  return (
    <div className='main-container'>
        <TopNav />

        <section className='main-section'>
          <div className='container'>
            <SidebarCard />
            <main style={{  padding : '20px 0' }}>
              <header className="header">
                <h1>Find your Dream Job, <span className="highlight">Albert!</span></h1>
                <p>Explore the latest job openings and apply for the best opportunities available today!</p>
                <SearchBar />
              </header>

              <main>
                <JobSection title="Featured Jobs" type="featured" />
                <JobSection title="Recommended Jobs" type="recommended" />
                <JobSection title="Featured Jobs" type="featured" />
                <JobSection title="Recommended Jobs" type="recommended" />
              </main>
            </main>
          </div>
        </section>

    </div>
  )
}

export default MainContent