import React from 'react';
import SidebarMenuItem from './sidebar-menu-item';
import { Separator } from '../ui/separator';

const SidebarMenu = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <Separator />
      <SidebarMenuItem />
    </div>
  );
};

export default SidebarMenu;
