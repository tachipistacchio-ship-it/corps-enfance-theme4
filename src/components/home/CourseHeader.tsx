'use client';

import { Clock, BookOpen, Target } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-2xl mb-8">
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        <div className="bg-white/20 p-3 sm:p-4 rounded-xl backdrop-blur-sm mx-auto sm:mx-0">
          <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
        </div>
        
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
            Nourrices et Crèches : Histoire de la Garde d&apos;Enfants
          </h1>
          
          <p className="text-blue-100 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
            Découvrez l&apos;évolution historique des modes de garde d&apos;enfants en France, 
            des nourrices du 19ème siècle aux crèches modernes.
          </p>
          
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4">
            <div className="bg-white/20 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Target className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">Expert</span>
              </div>
            </div>
            
            <div className="bg-white/20 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">4h 15min</span>
              </div>
            </div>
            
            <div className="bg-white/20 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">3 sections</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}