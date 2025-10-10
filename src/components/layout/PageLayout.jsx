import React from 'react';

/**
 * PageLayout component - provides consistent page-level structure
 */
const PageLayout = ({ children, className = '' }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="pt-20">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
