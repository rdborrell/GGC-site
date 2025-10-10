// Consolidated theme exports
import colors from './colors';
import spacing from './spacing';
import typography from './typography';

// Layout utilities
export const layout = {
  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',
  flexEnd: 'flex justify-end items-end',
  
  section: 'flex md:flex-row flex-col sm:py-16 py-6',
  sectionReverse: 'flex md:flex-row flex-col-reverse sm:py-16 py-6',
  
  sectionImgReverse: 'flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative',
  sectionImg: 'flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative',
  
  sectionInfo: 'flex-1 flex justify-center items-start flex-col',
};

// Component-specific styles
export const components = {
  navbar: 'w-full flex py-6 justify-between items-center fixed top-0 left-0 bg-primary z-50',
  videoContainer: 'flex justify-center items-center mt-8',
  pageContainer: 'min-h-screen flex flex-col',
  button: 'bg-black text-white text-xl py-3 px-14 rounded cursor-pointer hover:bg-gray-800 transition-colors',
};

// Export theme object
export const theme = {
  colors,
  spacing,
  typography,
  layout,
  components,
};

// Re-export individual modules for convenience
export { colors, spacing, typography };

export default theme;
