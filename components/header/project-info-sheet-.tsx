'use client';

import React, { useEffect, useState } from 'react';
import { Star, GitForkIcon } from 'lucide-react';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
  SheetFooter,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar } from '../ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import { Skeleton } from '../ui/skeleton';

export function ProjectInfoSheet() {
  const [starCount, setStarCount] = useState(0);
  const [forkCount, setForkCount] = useState(0);
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/cemtatli/lugat'
        );
        const data = await response.json();
        setStarCount(data.stargazers_count);
        setForkCount(data.forks_count);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/cemtatli/lugat/contributors'
        );
        const data = await response.json();
        setContributors(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Label className="cursor-pointer">Project</Label>
      </SheetTrigger>
      <SheetContent
        side={'top'}
        className="w-[90%] lg:w-1/2 mx-auto border mt-10 rounded-md text-white"
      >
        <SheetHeader className="flex-col flex justify-start">
          <SheetTitle className="flex gap-x-5 md:h-8 mb-2 mt-6 md:mt-0">
            lugat
            <div className="flex gap-4">
              <Separator orientation="vertical" />
              <Link
                href={'https://github.com/cemtatli/lugat/stargazers'}
                target="blank"
                className="text-sm !flex items-center gap-1.5"
              >
                <Star className=" w-4 h-4" />
                {`Star (${starCount})`}
              </Link>
              <Separator orientation="vertical" />
              <Link
                href={'https://github.com/cemtatli/lugat/forks'}
                target="blank"
                className="text-sm !flex items-center gap-1.5"
              >
                <GitForkIcon className=" w-4 h-4" />
                {`Fork (${forkCount})`}
              </Link>
            </div>
          </SheetTitle>
        </SheetHeader>
        <Separator />
        <SheetDescription className="py-2.5">
          Başta Frontend terimleri olmak üzere,tüm geliştiricilerin bilmesi
          gereken terimleri Türkçe anlamlarıyla açıklayan ve örneklerle
          destekleyen açık kaynaklı bir sözlük projesisidir. Projeye yeni
          özellikler veya terimler ekleyerek katkı sağlayabilirsiniz.
          <Separator className="my-5" />
          <h3 className="text-base font-medium">Katkıda Bulunanlar</h3>
          <div className="flex items-center gap-x-8 mt-4 flex-wrap">
            {contributors.map((contributor: any) => (
              <div key={contributor.id}>
                <div className="flex items-center justify-center flex-col gap-1">
                  <Link target="blank" href={contributor.html_url}>
                    <Avatar>
                      <AvatarImage src={contributor.avatar_url} />
                      <Skeleton className="h-10 w-10" />
                    </Avatar>
                  </Link>
                  <span className="text-sm ">{contributor.login}</span>
                </div>
              </div>
            ))}
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
