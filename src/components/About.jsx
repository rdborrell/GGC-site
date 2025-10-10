import React from 'react';
import { churchPicture } from '../assets';

/**
 * About component - Clean, modern about section
 */
const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">
            About Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
          <p className="text-lg text-text-secondary leading-relaxed">
            Grace Gospel Church exists to know Christ, love Christ, and share Christ with all those in the greater Nicholas County Area.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            We are a gospel-centered, Bible-believing, historically orthodox Christian Church located in Summersville, WV. Please join us this week at any of our gatherings to proclaim the name of Jesus!
          </p>
          
          {/* Feature badges */}
          <div className="flex flex-wrap gap-3 pt-4">
            <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
              Gospel-Centered
            </span>
            <span className="px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-medium">
              Bible-Believing
            </span>
            <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
              Orthodox
            </span>
          </div>
        </div>
        
        {/* Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl transform rotate-3"></div>
          <img 
            src={churchPicture} 
            alt="Grace Gospel Church building" 
            className="relative rounded-2xl shadow-soft-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
