import { type Metadata } from 'next';
import { slate } from 'tailwindcss/colors';

export const webConfig = {
  name: 'joke.dad',
  url: 'https://joke.dad',
  ogImage: '/og.jpg',
  description: 'Where the puns are dadly and the laughs are grand.',
  links: {
    github: 'https://github.com/senoe/joke.dad'
  }
};

export const webMetadata: Metadata = {
  metadataBase: new URL(webConfig.url),
  applicationName: webConfig.name,
  description: webConfig.description,
  manifest: '/site.webmanifest',
  themeColor: slate['900'],
  title: {
    default: webConfig.name,
    template: `%s | ${webConfig.name}`
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: webConfig.url,
    title: webConfig.name,
    siteName: webConfig.name,
    images: [webConfig.ogImage],
    description: webConfig.description
  },
  twitter: {
    card: 'summary_large_image',
    title: webConfig.name,
    images: [webConfig.ogImage],
    description: webConfig.description
  },
  appleWebApp: {
    title: webConfig.name
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    shortcut: '/favicon-16x16.png',
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' }
  },
  keywords: [
    'dad joke',
    'dad jokes',
    'dadjoke',
    'dadjokes',
    'joke.dad',
    'jokedad',
    'jokes.dad',
    'jokesdad'
  ]
};
