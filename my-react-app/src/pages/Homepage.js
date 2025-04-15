import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';

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
    <div style={{ textAlign: 'left', paddingLeft: '20px' }}>
      <h1>Welcome!</h1>
      <p>New York Countdown to 2025/4/18 {countdown}</p>
      <Link
        to="/calculator"
        style={{ fontSize: '18px', color: 'blue', textDecoration: 'underline' }}
      >
        Go to Calculator
      </Link>
    </div>
  );
}

export default Homepage;