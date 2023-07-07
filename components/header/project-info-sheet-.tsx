"use client"

import React, { useEffect, useState } from 'react'
import { Star, GitForkIcon } from "lucide-react";
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription
} from "@/components/ui/sheet"
import { Separator } from "../ui/separator";

export function ProjectInfoSheet() {
  const [starCount, setStarCount] = useState(0);
  const [forkCount, setForkCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/cemtatli/lugat');
        const data = await response.json();
        setStarCount(data.stargazers_count);
        setForkCount(data.forks_count);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Label className="cursor-pointer">Project</Label>
      </SheetTrigger>
      <SheetContent side={'top'} className="w-3/4 lg:w-1/2  mx-auto border mt-10 rounded-md">
        <SheetHeader>
          <SheetTitle className="flex gap-x-5 h-8 mb-2.5"> Proje Hakkında
            <Separator orientation="vertical" />
            <div className="flex space-x-4">
              <Label className="text-sm !flex items-center gap-1.5">
                <Star className=' w-4 h-4' />{`Star (${starCount})`}
              </Label>
              <Label className="text-sm !flex items-center gap-1.5">
                <GitForkIcon className=' w-4 h-4' />{`Fork (${forkCount})`}
              </Label>
            </div>
          </SheetTitle>
        </SheetHeader>
        <Separator />
        <SheetDescription className="pt-2.5">
          Başta Frontend terimleri olmak üzere,tüm geliştiricilerin bilmesi gereken terimleri Türkçe anlamlarıyla açıklayan ve örneklerle destekleyen açık kaynaklı bir sözlük projesisidir. Projeye yeni özellikler veya terimler ekleyerek katkı sağlayabilirsiniz.
        </SheetDescription>
      </SheetContent>
    </Sheet>

  )
}
