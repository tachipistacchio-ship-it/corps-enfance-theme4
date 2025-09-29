'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import NextSectionButton from '@/components/content/NextSectionButton';
import StartSectionButton from '@/components/content/StartSectionButton';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quelle loi a créé le statut d'assistante maternelle ?",
    options: [
      "Loi du 17 mai 1975",
      "Loi du 17 mai 1977", 
      "Loi du 17 mai 1979",
      "Loi du 17 mai 1981"
    ],
    correct: 1,
    explanation: "La loi du 17 mai 1977 a créé le statut d'assistante maternelle, professionnalisant ainsi le métier de garde d'enfants à domicile."
  },
  {
    id: 2,
    question: "Quelle région était particulièrement réputée pour fournir des nourrices à Paris ?",
    options: [
      "La Bretagne",
      "Le Morvan",
      "La Normandie", 
      "L'Auvergne"
    ],
    correct: 1,
    explanation: "Le Morvan était la région emblématique fournissant des nourrices à Paris, réputées pour leur robustesse et la qualité de leur lait."
  },
  {
    id: 3,
    question: "Qui a créé la première crèche française en 1844 ?",
    options: [
      "Jean-Baptiste Firmin Marbeau",
      "Marie Pape-Carpantier",
      "Pauline Kergomard",
      "Émile Durkheim"
    ],
    correct: 0,
    explanation: "Firmin Marbeau a créé la première crèche française à Paris en 1844, marquant le début de l'accueil collectif des jeunes enfants."
  },
  {
    id: 4,
    question: "Quel était l'avantage principal de la 'nourrice sur lieu' ?",
    options: [
      "Meilleur contrôle parental",
      "Coût plus économique",
      "Proximité géographique",
      "Formation spécialisée"
    ],
    correct: 1,
    explanation: "La nourrice sur lieu était plus économique car l'enfant était envoyé chez la nourrice à la campagne, évitant les frais de logement en ville."
  },
  {
    id: 5,
    question: "Que signifie l'acronyme mnémotechnique 'NACré' pour retenir l'évolution des modes de garde ?",
    options: [
      "Nourrices → Assistantes → Crèches",
      "Naissance → Accueil → Croissance", 
      "Nutrition → Affection → Créativité",
      "Naturel → Artificiel → Collectif"
    ],
    correct: 0,
    explanation: "NACré aide à retenir l'évolution chronologique : Nourrices (19e) → Assistantes maternelles (20e) → Crèches (développement moderne)."
  },
  {
    id: 6,
    question: "Quelle était la principale cause de l'augmentation du recours aux nourrices au 19ème siècle ?",
    options: [
      "L'industrialisation et l'urbanisation",
      "Les épidémies de choléra",
      "Les guerres napoléoniennes",
      "L'amélioration des transports"
    ],
    correct: 0,
    explanation: "L'industrialisation et l'urbanisation ont transformé les structures familiales, poussant les familles bourgeoises à recourir massivement aux nourrices."
  },
  {
    id: 7,
    question: "Quelle loi de 1874 a instauré la surveillance publique des enfants placés ?",
    options: [
      "Loi Ferry",
      "Loi Roussel",
      "Loi Waldeck-Rousseau",
      "Loi Combes"
    ],
    correct: 1,
    explanation: "La loi Roussel de 1874 a instauré la surveillance publique des enfants placés en nourrice, suite aux préoccupations sur la mortalité infantile."
  },
  {
    id: 8,
    question: "Selon le texte de Maupassant, quelles qualités étaient recherchées chez une nourrice idéale ?",
    options: [
      "Jeunesse et beauté",
      "Robustesse et santé",
      "Éducation et raffinement",
      "Expérience et références"
    ],
    correct: 1,
    explanation: "Maupassant décrit la nourrice idéale comme robuste et en bonne santé, capable de nourrir l'enfant avec un lait de qualité."
  },
  {
    id: 9,
    question: "Qui a influencé l'évolution des qualités recherchées chez les nourrices à partir des années 1950 ?",
    options: [
      "Françoise Dolto",
      "Benjamin Spock",
      "Jean Piaget",
      "Maria Montessori"
    ],
    correct: 1,
    explanation: "Benjamin Spock a influencé l'évolution des critères, mettant l'accent sur les qualités psychologiques et relationnelles plutôt que physiques."
  },
  {
    id: 10,
    question: "Qu'est-ce qui caractérise les 'Maisons vertes' créées sous l'influence de Dolto ?",
    options: [
      "Des crèches écologiques",
      "Des lieux d'accueil parents-enfants",
      "Des centres de formation",
      "Des dispensaires pédiatriques"
    ],
    correct: 1,
    explanation: "Les Maisons vertes sont des lieux d'accueil et d'écoute pour les parents et leurs jeunes enfants, favorisant les liens précoces."
  },
  {
    id: 11,
    question: "Quelle institution a été créée en 1945 pour encadrer les assistantes maternelles ?",
    options: [
      "La CAF",
      "La PMI (Protection Maternelle et Infantile)",
      "L'URSSAF",
      "La DDASS"
    ],
    correct: 1,
    explanation: "La PMI, créée en 1945, assure l'encadrement, la formation et le contrôle des assistantes maternelles."
  },
  {
    id: 12,
    question: "Quel était le rôle des 'bureaux des nourrices' à Paris ?",
    options: [
      "Former les nourrices",
      "Mettre en relation familles et nourrices",
      "Contrôler la qualité du lait",
      "Fixer les salaires"
    ],
    correct: 1,
    explanation: "Les bureaux des nourrices servaient d'intermédiaires entre les familles parisiennes et les nourrices, organisant le recrutement."
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 1000);
    } else {
      // Calculate final score
      const finalScore = newAnswers.reduce((acc, answer, index) => {
        return acc + (answer === questions[index].correct ? 1 : 0);
      }, 0);
      setScore(finalScore);
      setTimeout(() => {
        setShowResults(true);
      }, 1000);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setQuizStarted(false);
    setScore(0);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'Excellent ! Vous maîtrisez parfaitement le sujet.';
    if (percentage >= 60) return 'Bien ! Quelques révisions vous permettront d\'atteindre l\'excellence.';
    return 'Il est recommandé de revoir les sections du cours avant de continuer.';
  };

  // Écran de démarrage du quiz
  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-4xl">
          <BackToPlanButton />
          
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Quiz : Nourrices et Crèches
            </h1>
            
            <div className="mb-8">
              <StartSectionButton 
                title="Commencer le Quiz"
                description="Testez vos connaissances sur l'histoire des nourrices et des crèches"
              />
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Informations sur le quiz</h3>
              <ul className="text-left space-y-1 text-base text-gray-700">
                <li>• <strong>{questions.length} questions</strong> à choix multiples</li>
                <li>• <strong>Temps illimité</strong> pour réfléchir</li>
                <li>• <strong>Résultats détaillés</strong> avec explications</li>
                <li>• <strong>Possibilité de recommencer</strong> le quiz</li>
              </ul>
            </div>
            
            <button
              onClick={() => setQuizStarted(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Démarrer le Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-4xl">
          <BackToPlanButton />
          
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
              Résultats du Quiz
            </h1>
            
            <div className="mb-6 sm:mb-8">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
                <span className={getScoreColor()}>{score}</span>
                <span className="text-gray-400">/{questions.length}</span>
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-4">
                {Math.round((score / questions.length) * 100)}%
              </div>
              <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto">
                {getScoreMessage()}
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-left">
              {questions.map((question, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === question.correct;
                
                return (
                  <div key={question.id} className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <div className="flex items-start gap-2 sm:gap-3 mb-2">
                      {isCorrect ? (
                        <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm sm:text-base text-gray-900 mb-1">
                          Question {index + 1}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 mb-2">
                          {question.question}
                        </p>
                        {!isCorrect && (
                          <div className="text-xs sm:text-sm">
                            <p className="text-red-600 mb-1">
                              Votre réponse : {question.options[userAnswer]}
                            </p>
                            <p className="text-green-600 mb-1">
                              Bonne réponse : {question.options[question.correct]}
                            </p>
                            <p className="text-gray-600 italic">
                              {question.explanation}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
              >
                <RotateCcw className="h-4 w-4 sm:h-5 sm:w-5" />
                Recommencer le quiz
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
              >
                Retour au plan de cours
              </button>
            </div>

            <div className="mt-6">
              <NextSectionButton 
                href="/cas-pratiques"
                title="Cas Pratiques"
                description="Appliquez vos connaissances avec des exercices concrets"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const hasAnswered = selectedAnswers[currentQuestion] !== undefined;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                Quiz : Nourrices et Crèches
              </h1>
              <div className="text-sm sm:text-base text-gray-500">
                Question {currentQuestion + 1} sur {questions.length}
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
              <div 
                className="bg-blue-600 h-2 sm:h-3 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-relaxed">
              {question.question}
            </h2>
            
            <div className="space-y-2 sm:space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswers[currentQuestion] === index;
                const isCorrect = index === question.correct;
                const showResult = hasAnswered;
                
                let buttonClass = "w-full text-left p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 text-sm sm:text-base";
                
                if (showResult) {
                  if (isCorrect) {
                    buttonClass += " bg-green-50 border-green-500 text-green-800";
                  } else if (isSelected && !isCorrect) {
                    buttonClass += " bg-red-50 border-red-500 text-red-800";
                  } else {
                    buttonClass += " bg-gray-50 border-gray-200 text-gray-600";
                  }
                } else {
                  buttonClass += " bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-800";
                }
                
                return (
                  <button
                    key={index}
                    onClick={() => !hasAnswered && handleAnswer(index)}
                    disabled={hasAnswered}
                    className={buttonClass}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center text-xs sm:text-sm font-medium">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="flex-1">{option}</span>
                      {showResult && isCorrect && (
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {hasAnswered && (
            <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">Explication :</h3>
              <p className="text-blue-700 text-sm sm:text-base leading-relaxed">
                {question.explanation}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}