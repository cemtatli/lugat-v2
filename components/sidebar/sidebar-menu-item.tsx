import React from 'react';
import Link from 'next/link';
import {
  SiNextdotjs,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiVuedotjs,
  SiAngular,
  SiGit,
  SiMdnwebdocs,
} from 'react-icons/si';

const SidebarMenuItem = () => {
  interface Link {
    title: string;
    href: string;
    icon: any;
  }

  const links: Link[] = [
    {
      title: 'HTML',
      href: 'html',
      icon: <SiHtml5 />,
    },
    {
      title: 'CSS',
      href: 'css',
      icon: <SiCss3 />,
    },
    {
      title: 'JavaScript',
      href: 'javascript',
      icon: <SiJavascript />,
    },
    {
      title: 'TypeScript',
      href: 'typescript',
      icon: <SiTypescript />,
    },
    {
      title: 'React',
      href: 'react',
      icon: <SiReact />,
    },
    {
      title: 'Vue.js',
      href: 'vuejs',
      icon: <SiVuedotjs />,
    },
    {
      title: 'Angular',
      href: 'angular',
      icon: <SiAngular />,
    },
    {
      title: 'Next.js',
      href: 'nextjs',
      icon: <SiNextdotjs />,
    },
    {
      title: 'Git',
      href: 'git',
      icon: <SiGit />,
    },

    {
      title: 'Web Development',
      href: 'web-development',
      icon: <SiMdnwebdocs />,
    },
    {
      title: 'Web Design',
      href: '/webdesign',
      icon: <SiNextdotjs />,
    },
    {
      title: 'Internet',
      href: '/internet',
      icon: <SiNextdotjs />,
    },
  ];

  return (
    <div className="text-sm flex flex-col items-start gap-y-4">
      {links.map((link, index) => (
        <Link key={index} href={link.href} className="flex items-center gap-2">
          <div className="w-5 h-5"> {link.icon}</div>
          <span>{link.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default SidebarMenuItem;
