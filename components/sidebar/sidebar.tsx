import React from 'react'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'
import SidebarMenu from './sidebar-menu'

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-y-4 pt-4 px-2'>
      <Input placeholder='Search something..' />
      <Separator />
      <SidebarMenu />
    </div>
  )
}

export default Sidebar