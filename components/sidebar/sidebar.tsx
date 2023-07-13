import React from 'react';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import SidebarMenu from '@/components/sidebar/sidebar-menu';

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-y-4 pt-4 px-2 h-full">
      <Input placeholder="Search something.." />
      <Separator />
      <SidebarMenu />
    </div>
  );
};

export default Sidebar;
