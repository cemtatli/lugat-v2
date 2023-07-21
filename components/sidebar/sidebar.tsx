import React from 'react';
import { Input } from '../ui/input';

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col gap-y-4 h-screen-fit pt-4 pr-2 w-60 shrink-0 border-r">
      <Input type="search" placeholder="Terimleri ara.." />
    </aside>
  );
};

export default Sidebar;
