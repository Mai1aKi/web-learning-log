import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';
import './Homepage.css';

function Homepage() {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const updateCountdown = () => {
      const now = moment.tz('America/New_York');
      const endTime = moment.tz('2025-04-18 11:00', 'America/New_York');
      const duration = moment.duration(endTime.diff(now));
      const formatted = `${duration.days()}d ${duration.hours()}h ${duration.minutes()}m ${duration.seconds()}s`;
      setCountdown(formatted);
    };

    updateCountdown(); // initial call
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage-container" style={{ textAlign: 'left', padding: '20px' }}>
      <h1 className="homepage-title">Welcome!</h1>
      <p className="homepage-subtitle"> to be continued...</p>
      <p className="countdown-box">New York Countdown to 2025/4/18: {countdown}</p>
      <Link to="/calculator" className="homepage-link">
        → Start Calculator
      </Link>
    </div>
  );
}

export default Homepage;