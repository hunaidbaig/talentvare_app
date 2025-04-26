import { useState } from 'react';
import './style.css';
import AccordionSvg from '../icons/AccorionSvg';

export default function CalendarAccordion() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => setIsOpen(!isOpen);

    return (
        <div className={`calendar-accordion ${isOpen ? 'open' : ''}`}>
            <div className="calendar-header" onClick={toggleAccordion}>
                <div>
                    <h3 className='calendar-heading'>My calendar</h3>
                    <p className="calendar-label">Upcoming Interviews</p>
                </div>
                <AccordionSvg rotation={ isOpen ? 180 : 0} />
            </div>

            <div className="calendar-content">
                <div className="calendar-card">Interview at ABC Co.</div>
                <div className="calendar-card">Meeting with HR</div>
                <div className="calendar-card">Call with Design Team</div>
            </div>
        </div>
    );
}
