import React from 'react';
import Sidebar from '@/components/sidebar/sidebar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="h-[calc(100vh-3.5rem)] container flex">
      <Sidebar />
      <div className="overflow-auto w-full h-full flex-1">{children}</div>
    </main>
  );
};

export default MainLayout;
