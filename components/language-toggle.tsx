'use client';

import * as React from 'react';
import { Languages } from 'lucide-react';
import { GB, TR } from 'country-flag-icons/react/3x2';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LanguageToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={'icon'}>
          <Languages className="h-[18px] w-[18px]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[6.5rem] text-sm" align="center">
        <DropdownMenuItem>
          <TR title="United States" className="w-4 h-4 mr-2" /> Türkçe
        </DropdownMenuItem>
        <DropdownMenuItem>
          <GB title="United States" className="w-4 h-4 mr-2" /> English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
