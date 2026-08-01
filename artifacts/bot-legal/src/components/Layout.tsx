import React, { ReactNode } from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      <NavBar />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
