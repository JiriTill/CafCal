import './globals.css';
import Footer from '@/components/Footer';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const viewport = {
  themeColor: '#0b0f17',   // ✅ moved here
};

export const metadata = {
  metadataBase: new URL(SITE),
  title: 'Caffeine Calculator – How much coffee can I drink a day?',
  description:
    'Coffee dosage calculator: find your safe daily caffeine intake, cups per day, pregnancy limits, side effects, and last-cup time. EU/US/Canada guidance.',
  keywords: [
    'caffeine calculator',
    'how much coffee can I drink a day',
    'how much coffee can you drink a day',
    'how much coffee a person drink in a day',
    'how much coffee when pregnant',
    'how much caffeine per day is safe',
    'is 400 mg of caffeine too much at once',
    'caffeine overdose',
    'side effects of too much caffeine',
    'caffeine withdrawal symptoms',
    'side effects of coffee in females',
    'how much caffeine is dangerous',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Caffeine Calculator – How much coffee can I drink a day?',
    description:
      'Check your safe caffeine budget (mg/day), cups of coffee, pregnancy limits, and sleep-friendly timing — with evidence-based tips.',
    type: 'website',
    url: '/',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Caffeine Calculator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caffeine Calculator – How much coffee can I drink a day?',
    description:
      'Check your safe caffeine budget (mg/day), cups of coffee, pregnancy limits, and sleep-friendly timing.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192' },
      { url: '/icon-512.png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [{ rel: 'mask-icon', url: '/icon-maskable.png', type: 'image/png' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
