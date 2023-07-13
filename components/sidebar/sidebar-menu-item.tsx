import React from 'react';

import Link from 'next/link';

const SidebarMenuItem = () => {
  interface Link {
    title: string;
    href: string;
  }

  const links: Link[] = [
    {
      title: 'HTML',

      href: '',
    },
    {
      title: 'CSS',

      href: '',
    },
    {
      title: 'JavaScript',

      href: '',
    },
    {
      title: 'React',

      href: '',
    },
    {
      title: 'Vue.js',

      href: '',
    },
    {
      title: 'Angular',

      href: '',
    },
    {
      title: 'Next.js',

      href: '',
    },
    {
      title: 'Git',

      href: '',
    },
    {
      title: 'Web Development',

      href: '',
    },
    {
      title: 'Web Development',

      href: '',
    },
    {
      title: 'Web Design',

      href: '',
    },
  ];

  return (
    <div className="text-sm flex flex-col items-start gap-y-4">
      {links.map((link, index) => (
        <Link key={index} href={link.href}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default SidebarMenuItem;
