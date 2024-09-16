import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

// ----------------------------------------------------------------------

export function usePathname() {
  const { pathname, search } = useLocation();

  return useMemo(() => ({ pathname, search }), [pathname, search]);
}
