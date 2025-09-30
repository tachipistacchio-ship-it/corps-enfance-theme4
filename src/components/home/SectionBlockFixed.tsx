'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  index: number;
}

export default function SectionBlock({ 
  title, 
  description, 
  href, 
  icon: Icon, 
  color, 
  bgColor,
  index 
}: SectionBlockProps) {
  const buttonBgClassMap: Record<string, string> = {
    'text-blue-600': 'bg-blue-600',
    'text-green-600': 'bg-green-600',
    'text-purple-600': 'bg-purple-600',
    'text-orange-600': 'bg-orange-600',
    'text-red-600': 'bg-red-600',
    'text-indigo-600': 'bg-indigo-600',
    'text-teal-600': 'bg-teal-600',
  };

  const buttonBg = buttonBgClassMap[color] || 'bg-gray-900';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4 flex-1 w-full">
            <div className={`${bgColor} p-2 sm:p-3 rounded-full flex-shrink-0`}>
              <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${color}`} />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                {title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>
          
          <Link
            href={href}
            className={`${buttonBg} text-white shadow-md hover:shadow-lg hover:opacity-95 px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 group-hover:scale-105 text-sm sm:text-base w-full sm:w-auto text-center flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20`}
          >
            Commencer
          </Link>
        </div>
      </div>
    </motion.div>
  );
}