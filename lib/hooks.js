// lib/hooks.js
import { useEffect, useState } from 'react';

export function usePersistentState(key, initial) {
  const [state, setState] = useState(initial);
  useEffect(() => {
    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
      if (raw != null) setState(JSON.parse(raw));
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') localStorage.setItem(key, JSON.stringify(state));
    } catch {}
  }, [key, state]);
  return [state, setState];
}
