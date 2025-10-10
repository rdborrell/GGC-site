import React from 'react';
import MeetingTimes from './MeetingTimes';
import { FaChurch, FaBible, FaHeart } from 'react-icons/fa';

/**
 * Hero component - Modern, welcoming hero section with gradient
 */
const Hero = () => {
  const values = [
    { icon: <FaChurch className="w-6 h-6" />, text: 'Know Christ' },
    { icon: <FaHeart className="w-6 h-6" />, text: 'Love Christ' },
    { icon: <FaBible className="w-6 h-6" />, text: 'Share Christ' },
  ];

  return (
    <section 
      id="hero" 
      className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 sm:py-32"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent">
              Grace Gospel Church
            </span>
          </h1>
          
          {/* Values badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-soft border border-primary-100/50"
              >
                <span className="text-primary-500">{value.icon}</span>
                <span className="text-text-primary font-medium">{value.text}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-12">
            A gospel-centered, Bible-believing, historically orthodox Christian Church located in Summersville, WV. 
            Join us this week to proclaim the name of Jesus!
          </p>
        </div>

        {/* Meeting Times Card */}
        <div className="max-w-2xl mx-auto">
          <MeetingTimes />
        </div>
      </div>
    </section>
  );
};

export default Hero;
