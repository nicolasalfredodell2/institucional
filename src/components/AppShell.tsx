'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const HIDDEN_ROUTES = [
  '/memoria/ddc0afb7f9d068538bf5a4bf2cd63aecb07092df87483053c0eae4e2d8c531a5',
  '/memoria/ddc0afb7f9d068538bf5a4bf2cd63aecb07092df87483053c0eae4e2d8c531a4',
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showingComponents = !HIDDEN_ROUTES.includes(pathname);
  const isShowHeaderNotices = pathname.includes('/inicio') || pathname === '/';

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="container-fluid fade-in">
      {showingComponents && <Navbar />}
      {showingComponents && <Header />}
      <div className={isShowHeaderNotices ? 'margins' : 'mt-5'}>
        {children}
      </div>
      {showingComponents && <Footer />}
    </div>
  );
}
