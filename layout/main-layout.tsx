import React from 'react';
import Sidebar from '@/components/sidebar/sidebar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="h-screen-fit container flex">
      <Sidebar />
      {children}
    </main>
  );
};

export default MainLayout;
