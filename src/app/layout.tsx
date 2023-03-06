import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vinicius Anchieta',
  description:
    'Vinicius Anchieta is a highly skilled software engineer with a passion for innovation and a constant drive to learn new technologies. With expertise in HTML, CSS, JavaScript, and TypeScript, Vinicius is proficient in using ReactJS, NextJS, React Native, Material-UI, and Tailwind CSS to create attractive and intuitive user interfaces. He is also highly skilled in unit testing, ensuring the functionality and reliability of the applications he creates.',
  keywords:
    'Vinicius Anchieta, software engineer, full-stack development, ReactJS, NextJS, React Native, Material-UI, Tailwind CSS, unit testing, AWS, NestJS, NodeJS, Bootstrap, SEO, web analytics, Finexps, generate component for react',
  authors: [
    {
      name: 'Vinicius Anchieta',
      url: 'https://viniciusanchieta.dev'
    }
  ],
  openGraph: {
    url: 'https://viniciusanchieta.dev',
    title: 'Vinicius Anchieta',
    description:
      'Vinicius Anchieta is a highly skilled software engineer with a passion for innovation and a constant drive to learn new technologies. With expertise in HTML, CSS, JavaScript, and TypeScript, Vinicius is proficient in using ReactJS, NextJS, React Native, Material-UI, and Tailwind CSS to create attractive and intuitive user interfaces. He is also highly skilled in unit testing, ensuring the functionality and reliability of the applications he creates.',
    images: [
      {
        url: '/cover.png',
        alt: 'Vinicius Anchieta'
      }
    ]
  },
  icons: [
    {
      url: '/favicon.png',
      sizes: '32x32',
      type: 'image/png'
    }
  ]
};

const inter = Inter({ weight: ['300', '600'], subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`bg-main px-16 sm:px-8 xl:w-1078px xl:px-0 m-auto ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
