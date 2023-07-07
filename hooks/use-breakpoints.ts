import _useBreakpoint from 'use-breakpoint';

const BREAKPOINTS = {
  MOBILE: 0,
  TABLET: 768,
  LAPTOP: 1024,
  DESKTOP: 1440,
};
export const useBreakpoint = () => _useBreakpoint(BREAKPOINTS);
