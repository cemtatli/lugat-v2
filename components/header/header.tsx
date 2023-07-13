import React from 'react';
import Navbar from '@/components/header/navbar';
import Logo from '@/components/header/logo';
import { MobileMenu } from '@/components/mobile-menu/mobile-menu';

const Header = () => {
  return (
    <header className="h-12 flex items-center justify-between border-b">
      <nav className="container flex items-center justify-between">
        <MobileMenu />
        <Logo />
        <Navbar />
      </nav>
    </header>
  );
};

export default Header;
