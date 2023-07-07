import React from 'react'
import {
  Github,
  LinkedinIcon,
  Codepen,
  Mail,
  TwitterIcon,
  Mic,
  Headphones,
  BookOpen,
  Cloudy,
} from "lucide-react";
import Link from 'next/link';
import { buttonVariants } from '../ui/button';

const SidebarMenuItem = () => {

  interface Link {
    title: string;
    icon: React.ReactNode;
    href: string;
  }

  const links: Link[] = [
    {
      title: "HTML",
      icon: <Mail width={20} />,
      href: "",
    },
    {
      title: "CSS",
      icon: <TwitterIcon width={20} />,
      href: "",
    },
    {
      title: "JavaScript",
      icon: <Github width={20} />,
      href: "",
    },
    {
      title: "React",
      icon: <LinkedinIcon width={20} />,
      href: "",
    },
    {
      title: "Vue.js",
      icon: <Codepen width={20} />,
      href: "",
    },
    {
      title: "Angular",
      icon: <BookOpen width={20} />,
      href: "",
    },
    {
      title: "Next.js",
      icon: <Cloudy width={20} />,
      href: "",
    },
    {
      title: "Git",
      icon: <Mic width={20} />,
      href: "",
    },
    {
      title: "Web Development",
      icon: <Headphones width={20} />,
      href: "",
    },
    {
      title: "Web Development",
      icon: <Headphones width={20} />,
      href: "",
    },
    {
      title: "Web Design",
      icon: <Headphones width={20} />,
      href: "",
    },
  ];

  return (
    <div className='text-sm flex flex-col items-start gap-y-4'>
      {
        links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
          >
            {link.title}
          </Link>
        ))
      }
    </div>
  )
}

export default SidebarMenuItem