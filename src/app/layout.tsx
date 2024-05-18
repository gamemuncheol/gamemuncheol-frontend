import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LayoutProvider } from '@/layout/LayoutProvider';
import TanStackQueryProvider from '@/layout/TanStackQueryProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanStackQueryProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </TanStackQueryProvider>
      </body>
    </html>
  );
}
