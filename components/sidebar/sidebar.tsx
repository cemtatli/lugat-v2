import React from 'react';
import { Separator } from '@/components/ui/separator';
import SidebarMenu from '@/components/sidebar/sidebar-menu';
import SearchBar from '@/components/ui/searchbar';

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col gap-y-4 pt-4 px-2 w-60 shrink-0 h-full border-r">
      <SearchBar />
      <Separator />
      <SidebarMenu />
    </div>
  );
};

export default Sidebar;
