import React from 'react';

/**
 * Facebook component - Embeds Facebook page plugin
 */
const Facebook = () => {
  const facebookPageUrl = 'https://www.facebook.com/profile.php?id=100087298636337';
  const encodedUrl = encodeURIComponent(facebookPageUrl);
  
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <iframe
        src={`https://www.facebook.com/plugins/page.php?href=${encodedUrl}&tabs=timeline&width=366&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
        width="100%"
        height="331"
        className="border-0 overflow-hidden"
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title="Grace Gospel Church Facebook Page"
        loading="lazy"
      />
    </div>
  );
};

export default Facebook;
