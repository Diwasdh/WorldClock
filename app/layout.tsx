import type { Metadata } from 'next';
import { Monoton, Sansita } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'World Clock',
  description: 'A modern world clock application',
  icons: [
    { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' },
    { rel: 'icon', url: '/favicon.ico', sizes: 'any' },
  ],
};

export const monoton = Monoton({
  subsets: ['latin'],
  weight: '400',
});

export const sansita = Sansita({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sansita.className} antialiased min-h-screen flex flex-col`}
      >
        <Header extraFontClass={monoton.className} />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
