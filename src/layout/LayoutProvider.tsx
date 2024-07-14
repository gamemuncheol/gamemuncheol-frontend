'use client';

import Footer from '@/components/@common/footer/Footer';
import Header from '@/components/@common/header/Header';
import Navbar from '@/components/@common/navbar/Navbar';
import { usePathname } from 'next/navigation';

export const LayoutProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname() || '';

  const CommonHideComponent = () => {
    const pagesToHide = ['/login', '/signup'];
    return pagesToHide.includes(pathname);
  };

  return (
    <div className="h-screen">
      {!CommonHideComponent() && <Header />}

      <main
        className={!CommonHideComponent() ? 'flex gap-5 overflow-x-hidden' : ''}
      >
        {!CommonHideComponent() && <Navbar />}
        {children}
      </main>

      {!CommonHideComponent() && <Footer />}
    </div>
  );
};
