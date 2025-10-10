import React from 'react';
import Facebook from './Facebook';
import Maps from './Maps';
import { sundayService } from '../assets';

/**
 * Social component - Connect section with Facebook and Maps
 */
const Social = () => {
  return (
    <div id="findUs" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-text-primary mb-4">
          Connect With Us
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full mx-auto mb-6"></div>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Stay updated with our latest sermons and events, or find directions to visit us in person.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Facebook Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-text-primary">
              Follow Us
            </h3>
          </div>
          <Facebook />
        </div>
        
        {/* Center Image */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-200 to-primary-200 rounded-2xl transform rotate-6"></div>
            <img 
              src={sundayService} 
              alt="Sunday Service at Grace Gospel Church" 
              className="relative w-full rounded-2xl shadow-soft-lg"
            />
          </div>
        </div>

        {/* Maps Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-text-primary">
              Visit Us
            </h3>
          </div>
          <Maps />
        </div>
      </div>
    </div>
  );
};

export default Social;
