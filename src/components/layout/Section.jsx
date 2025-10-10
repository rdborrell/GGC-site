import React from 'react';
import { spacing, layout } from '../../theme';

/**
 * Section component - provides consistent section styling with optional container
 */
const Section = ({ 
  children, 
  id, 
  className = '', 
  containerClassName = '',
  centered = true,
  withPadding = true,
  bgColor = 'bg-primary'
}) => {
  const paddingClass = withPadding ? spacing.paddingX : '';
  const flexClass = centered ? layout.flexCenter : layout.flexStart;

  return (
    <section id={id} className={`${bgColor} ${paddingClass} ${flexClass} ${className}`}>
      <div className={`${spacing.boxWidth} ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
