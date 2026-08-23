import type { Metadata } from 'next';
import './globals.css';
import { portfolioConfig } from '@/config/portfolio.config';

export const metadata: Metadata = {
  title: `${portfolioConfig.personal.name} - Software Engineer`,
  description: `${portfolioConfig.personal.name} — Full-Stack Developer specializing in Next.js, TypeScript, and Node.js.`,
  keywords: [
    'Khushi Agrawal',
    'Full Stack Developer',
    'Software Engineer',
  ],
  authors: [{ name: portfolioConfig.personal.name, url: portfolioConfig.socials.github }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans min-h-screen selection:bg-light-muted selection:text-white dark:selection:bg-dark-border">
        {children}
      </body>
    </html>
  );
}
