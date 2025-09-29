'use client';

import { Users, TrendingUp, Brain, Target, Rocket, Baby, Award } from 'lucide-react';
import SectionBlock from './SectionBlock';

const sections = [
  {
    title: 'Introduction',
    description: 'Concepts de base et contexte historique',
    href: '/introduction',
    icon: Rocket,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'Section I - Les Nourrices',
    description: 'Histoire et évolution du métier de nourrice',
    href: '/section-1',
    icon: Users,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Section II - Les Assistantes Maternelles',
    description: 'Transformation du métier et cadre légal',
    href: '/section-2',
    icon: Baby,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Section III - Les Crèches',
    description: 'Développement des structures collectives',
    href: '/section-3',
    icon: TrendingUp,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    title: 'Quiz',
    description: 'Évaluation de vos connaissances',
    href: '/quiz',
    icon: Brain,
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    title: 'Cas Pratiques',
    description: 'Exercices d&apos;application pratique',
    href: '/cas-pratiques',
    icon: Award,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  },
  {
    title: 'Exercices Complémentaires',
    description: 'Analyses et réflexions approfondies',
    href: '/exercices-complementaires',
    icon: Target,
    color: 'text-teal-600',
    bgColor: 'bg-teal-100'
  }
];

export default function CoursePlan() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-6 sm:mb-8">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Plan du cours</h2>
        </div>
        <p className="text-gray-600 text-base sm:text-lg px-4">
          Suivez le parcours structuré pour maîtriser l&apos;histoire de la garde d&apos;enfants
        </p>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        {sections.map((section, index) => (
          <SectionBlock
            key={section.href}
            {...section}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}