import React from 'react';

/**
 * Maps component - Embeds Google Maps location
 */
const Maps = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.038901899144!2d-80.81967700000001!3d38.3712215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884955fb6730d33f%3A0xda2c4c67cab0ae8e!2s564%20Hookersville%20Rd%2C%20Summersville%2C%20WV%2026651!5e0!3m2!1sen!2sus!4v1760116174711!5m2!1sen!2sus";
  
  return (
    <div className="w-full max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
      <iframe
        src={mapSrc}
        width="100%"
        height="331"
        className="border-0"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Grace Gospel Church"
      />
    </div>
  );
};

export default Maps;