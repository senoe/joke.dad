import { type Metadata } from 'next';
import { sky } from 'tailwindcss/colors';

export const webConfig = {
  name: 'joke.dad',
  url: 'https://joke.dad',
  description: 'Where the puns are dadly and the laughs are grand.',
  links: {
    github: 'https://github.com/senoe/joke.dad'
  }
};

export const webMetadata: Metadata = {
  metadataBase: new URL(webConfig.url),
  applicationName: webConfig.name,
  description: webConfig.description,
  themeColor: sky['500'],
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
    description: webConfig.description
  },
  twitter: {
    title: webConfig.name,
    description: webConfig.description
  },
  appleWebApp: {
    title: webConfig.name
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
