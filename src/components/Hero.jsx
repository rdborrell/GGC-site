import React from 'react';
import MeetingTimes from './MeetingTimes';
import { FaChurch, FaBible, FaHeart } from 'react-icons/fa';
import { churchAudience } from '../assets';

const HERO_BG = churchAudience;

/**
 * Hero component - Modern, welcoming hero section with background image
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
      className="
        relative isolate 
        py-20 sm:py-32
        bg-warmWhite         /* fallback color while image loads */
      "
    >
      {/* Background image layer */}
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_BG}
          alt=""
          aria-hidden="true"
          className="
            h-full w-full object-cover
            opacity-25
          "
        />
        {/* Readability scrim over the image */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-warmWhite/85 via-warmWhite/70 to-warmWhite/92
          "
        />
      </div>

      {/* Decorative background blobs stay above the image but below content */}
      <div className="absolute inset-0 -z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-100 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-gold-50 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-700 via-primary-600 to-gold-700 bg-clip-text text-transparent">
              Grace Gospel Church
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="flex items-center space-x-2 px-4 py-2 bg-warmWhite/90 backdrop-blur-sm rounded-full shadow-soft border border-gold-200/50"
              >
                <span className="text-primary-600">{value.icon}</span>
                <span className="text-text-primary font-medium">{value.text}</span>
              </div>
            ))}
          </div>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-12">
            A gospel-centered, Bible-believing, historically orthodox Christian Church located in Summersville, WV.
            Join us this week to proclaim the name of Jesus!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <MeetingTimes />
        </div>
      </div>
    </section>
  );
};

export default Hero;
