import React from 'react';
import { spacing } from '../../theme';

/**
 * Container component - provides consistent max-width and centering
 */
const Container = ({ children, className = '' }) => {
  return (
    <div className={`${spacing.boxWidth} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
