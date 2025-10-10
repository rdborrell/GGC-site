import React from 'react';
import { PageLayout, Section } from './layout';
import { typography, spacing } from '../theme';

/**
 * YoutubePage component - Displays YouTube sermon playlist
 */
const YoutubePage = () => {
  return (
    <PageLayout>
      <Section className={spacing.paddingY}>
        <div className="text-center">
          <h1 className={`${typography.heading1} mb-8`}>
            Latest Sermons
          </h1>
          <p className={`${typography.paragraph} mb-12 max-w-3xl mx-auto`}>
            Watch our latest sermons and messages from Grace Gospel Church. 
            Subscribe to stay updated with new content!
          </p>
          
          {/* Responsive iframe container */}
          <div className="relative w-full max-w-5xl mx-auto" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/videoseries?list=PLLdzfsmr-docGFvwPTFkIP1rmbk1EegJR"
              title="Grace Gospel Church Sermons Playlist"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default YoutubePage;
