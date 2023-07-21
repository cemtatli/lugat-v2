import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { ThemeProvider } from '@/context/theme-provider';
import Header from '@/components/header/header';
import Layout from '@/layout/main-layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lugat | Türkçe Terimler',
  description:
    'Lugat, Türkçe karşılıklarıyla birlikte birçok terimin anlamını içeren bir web sitesidir.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
