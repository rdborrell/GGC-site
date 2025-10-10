import React from 'react';
import { FaMobileAlt, FaGooglePlay, FaApple } from 'react-icons/fa';
import { playStoreBadge } from '../assets';

/**
 * ChurchCenter component - Modern app download section
 */
const ChurchCenter = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-gold-500 rounded-2xl flex items-center justify-center shadow-soft-lg">
            <FaMobileAlt className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Heading */}
        <div>
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Give Online with Church Center
          </h2>
          <p className="text-lg text-text-secondary">
            Download our app to easily give, stay connected, and manage your account on the go.
          </p>
        </div>

        {/* App Badges */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          {/* Google Play */}
          <a 
            href="https://play.google.com/store/apps/details?id=com.ministrycentered.churchcenter&hl=en_US&gl=US"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-warmWhite border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-soft transition-all duration-300"
          >
            <FaGooglePlay className="w-8 h-8 text-text-primary group-hover:text-primary-600 transition-colors" />
            <div className="text-left">
              <div className="text-xs text-text-light">GET IT ON</div>
              <div className="text-lg font-semibold text-text-primary">Google Play</div>
            </div>
          </a>

          {/* Apple App Store */}
          <a 
            href="https://apps.apple.com/us/app/church-center-app/id1357742931"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-warmWhite border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-soft transition-all duration-300"
          >
            <FaApple className="w-8 h-8 text-text-primary group-hover:text-primary-600 transition-colors" />
            <div className="text-left">
              <div className="text-xs text-text-light">Download on the</div>
              <div className="text-lg font-semibold text-text-primary">App Store</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChurchCenter;
