import React from 'react';
import Sidebar from '@/components/sidebar/sidebar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="h-[calc(100vh-3.5rem)] container flex">
      <aside className=" w-60 md:flex shrink-0 hidden border-r">
        <Sidebar />
      </aside>
      <div className="overflow-auto w-full h-full">{children}</div>
    </main>
  );
};

export default MainLayout;
