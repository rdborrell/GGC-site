// src/components/YoutubePage.js
import React from 'react';
import styles from '../style';

const YoutubePage = () => {
  return (
    <div className={`bg-transparent ${styles.pageContainer} pt-24`}>
      <div className='w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <h1 style={{ display: 'flex', justifyContent: 'center' }} className='flex-1 font-poppins font-semibold ss:text-[32px] text-[25px] text-white ss:leading-[100.8px] leading-[75px]'>
              View Grace Gospel Church's latest sermons here!
            </h1>
            <h1>YouTube Playlist Page</h1>
            <div className={`${styles.videoContainer}`}>
              <iframe
                width="100%"
                height="600"
                src="https://www.youtube.com/embed/videoseries?list=PLLdzfsmr-docGFvwPTFkIP1rmbk1EegJR"
                title="YouTube playlist player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YoutubePage;
