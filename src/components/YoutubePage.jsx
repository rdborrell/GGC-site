import React from 'react';
import { PageLayout, Section } from './layout';
import { Footer } from './index';

/**
 * YoutubePage component - Displays YouTube sermon playlist
 */
const YoutubePage = () => {
  return (
    <PageLayout>
      <Section className="bg-gradient-to-br from-gold-50 via-lightCream to-primary-50 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Latest Sermons
          </h1>
          <p className="text-lg text-text-secondary mb-12 max-w-3xl mx-auto">
            Watch our latest sermons and messages from Grace Gospel Church. 
            Subscribe to stay updated with new content!
          </p>
          
          {/* Responsive iframe container */}
          <div className="relative w-full max-w-5xl mx-auto aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-soft-lg"
              src="https://www.youtube.com/embed/videoseries?list=PLLdzfsmr-docGFvwPTFkIP1rmbk1EegJR"
              title="Grace Gospel Church Sermons Playlist"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </Section>
      <Footer />
    </PageLayout>
  );
};

export default YoutubePage;
