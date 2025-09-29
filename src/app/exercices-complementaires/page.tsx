'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { BookOpen, Users, TrendingUp, FileText, CheckCircle, AlertCircle, Target } from 'lucide-react';

interface Exercise {
  id: number;
  title: string;
  type: 'analysis' | 'comparison' | 'timeline' | 'reflection';
  description: string;
  instructions: string[];
  expectedElements: string[];
  userResponse: string;
  showCorrection: boolean;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Analyse de l'évolution des critères de sélection des nourrices",
    type: 'analysis',
    description: "Analysez comment les critères de sélection des nourrices ont évolué du 19ème siècle aux années 1950.",
    instructions: [
      "Identifiez les critères physiques privilégiés au 19ème siècle",
      "Expliquez l'influence de Benjamin Spock sur les nouveaux critères",
      "Analysez cette évolution dans son contexte social et scientifique"
    ],
    expectedElements: [
      "Critères physiques du 19ème : robustesse, santé, qualité du lait",
      "Influence de Maupassant et de la littérature sur l'image de la nourrice idéale",
      "Évolution vers des critères psychologiques et relationnels",
      "Rôle de Benjamin Spock dans cette transformation",
      "Contexte : développement de la psychologie de l'enfant",
      "Passage d'une vision purement nutritionnelle à une approche globale"
    ],
    userResponse: "",
    showCorrection: false
  },
  {
    id: 2,
    title: "Comparaison des modes de garde : nourrices vs crèches",
    type: 'comparison',
    description: "Comparez les avantages et inconvénients des nourrices et des crèches selon les différentes classes sociales.",
    instructions: [
      "Analysez les choix de la bourgeoisie parisienne",
      "Étudiez les options disponibles pour les classes populaires",
      "Considérez les aspects économiques, sociaux et pédagogiques"
    ],
    expectedElements: [
      "Bourgeoisie : nourrice à domicile comme signe de statut",
      "Classes moyennes : arbitrage entre coût et contrôle",
      "Classes populaires : contraintes économiques et géographiques",
      "Évolution des crèches : de la charité au service public",
      "Aspects pédagogiques : individualisation vs socialisation",
      "Impact sur le développement de l'enfant selon les théories de l'époque"
    ],
    userResponse: "",
    showCorrection: false
  },
  {
    id: 3,
    title: "Chronologie de la professionnalisation",
    type: 'timeline',
    description: "Retracez les étapes clés de la professionnalisation des métiers de la petite enfance.",
    instructions: [
      "Identifiez les dates et lois importantes",
      "Expliquez les enjeux de chaque étape",
      "Analysez les résistances et les facteurs favorables"
    ],
    expectedElements: [
      "1874 : Loi Roussel - première surveillance publique",
      "1945 : Création de la PMI",
      "1977 : Loi créant le statut d'assistante maternelle",
      "Évolution du vocabulaire : nourrice → assistante maternelle",
      "Professionnalisation : formation, agrément, contrôles",
      "Enjeux : protection de l'enfant, reconnaissance professionnelle"
    ],
    userResponse: "",
    showCorrection: false
  },
  {
    id: 4,
    title: "Réflexion sur les enjeux contemporains",
    type: 'reflection',
    description: "Réfléchissez aux enjeux actuels des modes de garde à la lumière de cette histoire.",
    instructions: [
      "Identifiez les continuités et ruptures avec le passé",
      "Analysez les nouveaux défis (immigration, égalité, qualité)",
      "Proposez des pistes d'amélioration basées sur les leçons historiques"
    ],
    expectedElements: [
      "Continuités : inégalités sociales, enjeux de qualité",
      "Ruptures : professionnalisation, reconnaissance des droits de l'enfant",
      "Nouveaux défis : diversité culturelle, conciliation vie familiale/professionnelle",
      "Questions contemporaines : formation, rémunération, conditions de travail",
      "Leçons historiques : importance de la régulation publique",
      "Perspectives : vers une meilleure reconnaissance du secteur"
    ],
    userResponse: "",
    showCorrection: false
  }
];

export default function ExercicesComplementairesPage() {
  const [exerciseStates, setExerciseStates] = useState<Exercise[]>(exercises);

  const updateExercise = (id: number, updates: Partial<Exercise>) => {
    setExerciseStates(prev => 
      prev.map(ex => ex.id === id ? { ...ex, ...updates } : ex)
    );
  };

  const getTypeIcon = (type: Exercise['type']) => {
    switch (type) {
      case 'analysis': return <BookOpen className="h-5 w-5" />;
      case 'comparison': return <Users className="h-5 w-5" />;
      case 'timeline': return <TrendingUp className="h-5 w-5" />;
      case 'reflection': return <FileText className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: Exercise['type']) => {
    switch (type) {
      case 'analysis': return 'bg-blue-100 text-blue-800';
      case 'comparison': return 'bg-green-100 text-green-800';
      case 'timeline': return 'bg-purple-100 text-purple-800';
      case 'reflection': return 'bg-orange-100 text-orange-800';
    }
  };

  const getTypeName = (type: Exercise['type']) => {
    switch (type) {
      case 'analysis': return 'Analyse';
      case 'comparison': return 'Comparaison';
      case 'timeline': return 'Chronologie';
      case 'reflection': return 'Réflexion';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <BackToPlanButton />
        
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Target className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-teal-600" />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Exercices Complémentaires
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Analyses et réflexions approfondies sur l'histoire de la garde d'enfants
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {exerciseStates.map((exercise) => (
            <div key={exercise.id} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className={`p-2 sm:p-3 rounded-lg ${getTypeColor(exercise.type)} flex-shrink-0`}>
                  {getTypeIcon(exercise.type)}
                </div>
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(exercise.type)}`}>
                      {getTypeName(exercise.type)}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {exercise.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {exercise.description}
                  </p>
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                  Instructions :
                </h3>
                <ul className="space-y-2">
                  {exercise.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold text-sm sm:text-base flex-shrink-0">
                        {index + 1}.
                      </span>
                      <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        {instruction}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4 sm:mb-6">
                <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                  Votre réponse :
                </label>
                <textarea
                  value={exercise.userResponse}
                  onChange={(e) => updateExercise(exercise.id, { userResponse: e.target.value })}
                  className="w-full h-32 sm:h-40 lg:h-48 p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none text-sm sm:text-base"
                  placeholder="Rédigez votre analyse ici..."
                />
              </div>

              <div className="flex gap-3 mb-4 sm:mb-6">
                <button
                  onClick={() => updateExercise(exercise.id, { showCorrection: !exercise.showCorrection })}
                  className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm sm:text-base font-medium"
                >
                  {exercise.showCorrection ? (
                    <AlertCircle className="h-4 w-4" />
                  ) : (
                    <CheckCircle className="h-4 w-4" />
                  )}
                  <span className="hidden sm:inline">
                    {exercise.showCorrection ? 'Masquer la correction' : 'Voir les éléments attendus'}
                  </span>
                  <span className="sm:hidden">
                    {exercise.showCorrection ? 'Masquer' : 'Correction'}
                  </span>
                </button>
              </div>

              {exercise.showCorrection && (
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-teal-900 mb-3 sm:mb-4">
                    Éléments attendus dans la correction :
                  </h3>
                  <ul className="space-y-2">
                    {exercise.expectedElements.map((element, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-teal-800 leading-relaxed">
                          {element}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}