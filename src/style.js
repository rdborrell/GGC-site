/**
 * @deprecated This file is maintained for backward compatibility.
 * Please use the new theme system from '../theme' instead.
 * 
 * Migration guide:
 * - Import from '../theme' instead of './style'
 * - Use individual modules: spacing, typography, layout, components
 * 
 * Example:
 * // Old way
 * import styles from './style';
 * <div className={styles.paddingX}>
 * 
 * // New way
 * import { spacing } from './theme';
 * <div className={spacing.paddingX}>
 */

import { spacing, layout as themeLayout, components, typography } from './theme';

// Re-export theme values with legacy naming for backward compatibility
const styles = {
  // Spacing
  boxWidth: spacing.boxWidth,
  paddingX: spacing.paddingX,
  paddingY: spacing.paddingY,
  padding: spacing.padding,
  marginX: spacing.marginX,
  marginY: spacing.marginY,
  
  // Layout
  flexCenter: themeLayout.flexCenter,
  flexStart: themeLayout.flexStart,
  flexEnd: themeLayout.flexEnd,
  
  // Typography
  heading2: typography.heading2,
  paragraph: typography.paragraph,
  
  // Components
  videoContainer: components.videoContainer,
  pageContainer: components.pageContainer,
  navbar: components.navbar,
  rightMargin: 'mr-4'
};

export const layout = {
  section: themeLayout.section,
  sectionReverse: themeLayout.sectionReverse,
  sectionImgReverse: themeLayout.sectionImgReverse,
  sectionImg: themeLayout.sectionImg,
  sectionInfo: themeLayout.sectionInfo,
};

export default styles;
