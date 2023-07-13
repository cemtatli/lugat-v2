import React from 'react';
import Navbar from '@/components/header/navbar';
import Logo from '@/components/header/logo';

const Header = () => {
  return (
    <header className="h-12 flex items-center justify-between border-b">
      <nav className="container flex items-center justify-between">
        <Logo />
        <Navbar />
      </nav>
    </header>
  );
};

export default Header;
