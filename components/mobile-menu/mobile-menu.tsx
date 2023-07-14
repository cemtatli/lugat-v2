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
import { ThemeToggle } from '../theme-toggle';
import { LanguageToggle } from '../language-toggle';
import { Separator } from '../ui/separator';

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu aria-label="menu" strokeWidth={1.75} className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you are done.
          </SheetDescription>
          <SheetFooter>
            <Separator />
            <div className="flex items-center justify-center gap-x-4 py-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </SheetFooter>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
