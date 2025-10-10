import React from 'react';

/**
 * PageLayout component - provides consistent page-level structure
 */
const PageLayout = ({ children, className = '' }) => {
  return (
    <div className={`bg-primary w-full overflow-hidden ${className}`}>
      <div className="pt-24">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
