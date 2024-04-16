'use client';

import Footer from '@/components/@Common/Footer';
import Header from '@/components/@Common/Header';
import Navbar from '@/components/@Common/Navbar';
import { usePathname } from 'next/navigation';

export const LayoutProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  const CommonHideComponent = () => {
    const pagesToHide = ['/login'];
    return pagesToHide.includes(pathname);
  };

  return (
    <>
      {!CommonHideComponent() && <Header />}

      <main className="flex">
        {!CommonHideComponent() && <Navbar />}
        {children}
      </main>

      {!CommonHideComponent() && <Footer />}
    </>
  );
};
