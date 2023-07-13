'use client';
import React from 'react';
import Link from 'next/link';

import { ThemeToggle } from '../theme-toggle';
import { LanguageToggle } from '../language-toggle';
import { Separator } from '../ui/separator';
import { ProjectInfoSheet } from './project-info-sheet-';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-end space-x-2.5 ">
      <div className="hidden md:flex h-5 items-center space-x-5 font-medium text-sm">
        <ProjectInfoSheet />
        <Separator orientation="vertical" />
        <Link href={'https://twitter.com/'} target="blank">
          Twitter
        </Link>
        <Separator orientation="vertical" />
        <Link href={'https://github.dev/cemtatli/lugat'} target="blank">
          GitHub
        </Link>
        <Separator orientation="vertical" />
      </div>
      <LanguageToggle />
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
