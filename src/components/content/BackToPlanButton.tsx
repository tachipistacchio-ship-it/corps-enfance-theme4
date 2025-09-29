import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BackToPlanButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mb-4 sm:mb-6 text-sm sm:text-base font-medium"
    >
      <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      <span className="hidden sm:inline">Retour au plan du cours</span>
      <span className="sm:hidden">Retour</span>
    </Link>
  );
}