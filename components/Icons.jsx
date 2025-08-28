// components/Icons.jsx
function Svg({ className, children, strokeWidth = 1.8 }) {
  return (
    <svg
      className={className}
      width="1em" height="1em" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function IconClipboardList({ className = 'w-5 h-5 text-slate-300' }) {
  return (
    <Svg className={className}>
      <path d="M8 4h8M9 4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2" />
      <rect x="4" y="4" width="16" height="18" rx="2" />
      <path d="M8 11h8M8 15h8M8 19h8" />
    </Svg>
  );
}

export function IconCoffee({ className = 'w-5 h-5 text-slate-300' }) {
  return (
    <Svg className={className}>
      <path d="M3 8h12v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
      <path d="M15 9h2a3 3 0 1 1 0 6h-2" />
    </Svg>
  );
}

export function IconGlobe({ className = 'w-4 h-4 text-slate-300' }) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M2 12h20" />
      <path d="M12 3a9 9 0 0 1 0 18M12 3a9 9 0 0 0 0 18" />
    </Svg>
  );
}

export function IconUser({ className = 'w-4 h-4 text-slate-300' }) {
  return (
    <Svg className={className}>
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="8" r="4" />
    </Svg>
  );
}

export function IconClock({ className = 'w-4 h-4 text-slate-300' }) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Svg>
  );
}

export function IconCalculator({ className = 'w-4 h-4 text-slate-300' }) {
  return (
    <Svg className={className}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8" />
      <path d="M8 12h2M8 16h2M12 12h4M12 16h4" />
    </Svg>
  );
}
