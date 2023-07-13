'use client';

import React from 'react';
import { Command, CommandInput } from './command';

const SearchBar = () => {
  return (
    <Command className="rounded-sm border border-b-0">
      <CommandInput className="h-10" placeholder="Search..." />
    </Command>
  );
};

export default SearchBar;
