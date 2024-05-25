// src/components/Hero.js
import React from 'react';
import MeetingTimes from './MeetingTimes';
import styles from '../style';

const Hero = () => {
  return (
    <section id="hero" className={`bg-primary ${styles.paddingY}`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <h1 className="text-5xl font-bold text-yellow-500 leading-tight mb-4">
            Grace Gospel Church
          </h1>
          <p className="text-white mb-8">
            Grace Gospel Church exists to know Christ, love Christ, and share Christ with all those in the greater Nicholas County Area. We are a gospel-centered, Bible-believing, historically orthodox, Christian Church located in Summersville WV. Please join us this week at any of our gatherings to proclaim the name of Jesus!
          </p>
          <MeetingTimes />
        </div>
      </div>
    </section>
  );
}

export default Hero;
