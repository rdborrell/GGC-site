// src/components/MeetingTimes.js
import React from 'react';

const MeetingTimes = () => {
  return (
    <div className="meeting-times p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Meeting Times</h2>
      <ul className="list-none">
        <li className="mb-2">
          <span className="font-semibold">Sunday Service:</span> Sunday 11:00 AM - 12:00 PM
        </li>
        <li className="mb-2">
          <span className="font-semibold">Community Group:</span> Tuesday 5:30 PM - 7:30 PM
        </li>
      </ul>
    </div>
  );
}

export default MeetingTimes;
