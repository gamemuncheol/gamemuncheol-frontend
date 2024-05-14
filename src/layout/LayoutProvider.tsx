'use client';

import Footer from '@/components/@common/footer/Footer';
import Header from '@/components/@common/header/Header';
import Navbar from '@/components/@common/navbar/Navbar';
import { usePathname } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';

export const LayoutProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname() || '';

  const CommonHideComponent = () => {
    const pagesToHide = ['/login'];
    return pagesToHide.includes(pathname);
  };

  return (
    <SessionProvider>
      {!CommonHideComponent() && <Header />}

      <main>
        {!CommonHideComponent() && <Navbar />}
        {children}
      </main>

      {!CommonHideComponent() && <Footer />}
    </SessionProvider>
  );
};
