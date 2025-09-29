'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface NextSectionButtonProps {
  href: string;
  title: string;
  description?: string;
}

export default function NextSectionButton({ href, title, description }: NextSectionButtonProps) {
  return (
    <div className="mt-8 sm:mt-12 flex justify-center">
      <Link
        href={href}
        className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
      >
        <div className="flex flex-col items-start">
          <span className="text-sm opacity-90">Continuer vers</span>
          <span className="font-bold">{title}</span>
          {description && (
            <span className="text-xs opacity-80 mt-1">{description}</span>
          )}
        </div>
        <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  );
}