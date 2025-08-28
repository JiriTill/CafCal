export default function manifest() {
  return {
    name: 'Caffeine Calculator',
    short_name: 'Caffeine Calc',
    description:
      'Plan your safe daily caffeine intake, cups per day, pregnancy limits, and last-cup time.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#0b0f17',
    theme_color: '#0b0f17',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
    ],
  };
}
