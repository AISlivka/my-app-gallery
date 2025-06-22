import { useMediaQuery } from '@vueuse/core';

export function useMedia() {
  const isMobile = useMediaQuery('(max-width: 743px)');

  const isTablet = useMediaQuery('(min-width: 744px) and (max-width: 1022px)');

  const isDesktop = useMediaQuery('(min-width: 1023px)');

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}
