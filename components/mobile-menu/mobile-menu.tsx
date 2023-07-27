'use client';

import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import Logo from '@/components/header/logo';
import { ProjectInfoSheet } from '../header/project-info-sheet-';
import { Button } from '../ui/button';

export function MobileMenu() {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Menu
            aria-label="menu"
            strokeWidth={1.5}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you are done.
            </SheetDescription>
            <Button variant={'outline'} className="mt-4">
              <ProjectInfoSheet />
            </Button>
            <SheetFooter>
              <Separator />
            </SheetFooter>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
