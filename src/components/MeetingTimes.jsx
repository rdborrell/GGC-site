import React from 'react';
import { FaClock, FaUsers } from 'react-icons/fa';

/**
 * MeetingTimes component - Modern card design for service schedule
 */
const MeetingTimes = () => {
  const meetings = [
    {
      name: 'Sunday Service',
      time: 'Sunday 11:00 AM - 12:00 PM',
      icon: <FaClock className="w-6 h-6" />,
      color: 'primary'
    },
    {
      name: 'Community Group',
      time: 'Tuesday 5:30 PM - 7:30 PM',
      icon: <FaUsers className="w-6 h-6" />,
      color: 'accent'
    }
  ];

  return (
    <div className="bg-warmWhite rounded-2xl shadow-soft-lg border border-gold-200/50 p-8">
      <h2 className="text-3xl font-bold text-text-primary mb-6 text-center">
        Join Us This Week
      </h2>
      
      <div className="space-y-4">
        {meetings.map((meeting, index) => (
          <div 
            key={index} 
            className="group flex items-start space-x-4 p-5 bg-gradient-to-r from-eggshell to-gold-50 rounded-xl hover:shadow-soft transition-all duration-300 border border-transparent hover:border-gold-200"
          >
            <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-${meeting.color}-100 flex items-center justify-center text-${meeting.color}-600 group-hover:scale-110 transition-transform`}>
              {meeting.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-text-primary mb-1">
                {meeting.name}
              </h3>
              <p className="text-text-secondary">
                {meeting.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-center text-text-light text-sm mt-6">
        All are welcome! We look forward to seeing you.
      </p>
    </div>
  );
};

export default MeetingTimes;
