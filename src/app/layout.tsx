import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'RoadSafe Mobile Tire & Auto | 24/7 Mobile Tire Service',
    template: '%s | RoadSafe Mobile Tire & Auto',
  },
  description:
    'RoadSafe Mobile Tire & Auto provides 24/7 mobile tire repair, replacement, and roadside assistance in Hamilton, Burlington, and surrounding areas. We come to you!',
  keywords: [
    'mobile tire service',
    'tire repair',
    'tire replacement',
    'roadside assistance',
    'Hamilton',
    'Burlington',
    'Ontario',
    '24/7 tire service',
    'flat tire help',
    'mobile mechanic',
  ],
  authors: [{ name: 'RoadSafe Mobile Tire & Auto' }],
  creator: 'RoadSafe Mobile Tire & Auto',
  publisher: 'RoadSafe Mobile Tire & Auto',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://roadsafemobile.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'RoadSafe Mobile Tire & Auto | 24/7 Mobile Tire Service',
    description:
      'Professional mobile tire service in Hamilton & Burlington. Tire repair, replacement, rotation & more. We come to you 24/7!',
    url: 'https://roadsafemobile.com',
    siteName: 'RoadSafe Mobile Tire & Auto',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RoadSafe Mobile Tire & Auto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RoadSafe Mobile Tire & Auto | 24/7 Mobile Tire Service',
    description:
      'Professional mobile tire service in Hamilton & Burlington. We come to you 24/7!',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/logo.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#0A1F44',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="RoadSafe" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.svg" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>

        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://roadsafemobile.com',
              name: 'RoadSafe Mobile Tire & Auto',
              description:
                '24/7 mobile tire repair, replacement, and roadside assistance across the Greater Toronto Area.',
              url: 'https://roadsafemobile.com',
              telephone: '+1-905-555-1234',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Toronto',
                addressRegion: 'ON',
                addressCountry: 'CA',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 43.6532,
                longitude: -79.3832,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '00:00',
                closes: '23:59',
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Hamilton',
                },
                {
                  '@type': 'City',
                  name: 'Burlington',
                },
                {
                  '@type': 'City',
                  name: 'Oakville',
                },
              ],
              priceRange: '$$',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '50',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
