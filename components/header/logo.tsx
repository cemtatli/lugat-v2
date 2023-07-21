import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-base md:text-lg font-semibold flex items-center justify-center gap-x-1.5"
    >
      <Sparkles
        className="md:h-5 w-[18px] h-[18px] md:w-5"
        strokeWidth={2}
        fill="currentColor"
      />
      lugat
    </Link>
  );
}
