import Link from 'next/link';
import { Play } from 'lucide-react';

interface StartSectionButtonProps {
  title: string;
  description?: string;
}

export default function StartSectionButton({ title, description }: StartSectionButtonProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 max-w-md">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="bg-white/20 rounded-full p-2">
            <Play className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        {description && (
          <p className="text-blue-100 text-sm mb-4">{description}</p>
        )}
        <div className="bg-white/10 rounded-lg py-2 px-4 inline-block">
          <span className="text-sm font-medium">Cliquez pour commencer</span>
        </div>
      </div>
    </div>
  );
}