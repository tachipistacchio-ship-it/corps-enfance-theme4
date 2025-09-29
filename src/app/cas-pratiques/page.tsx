'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { CheckCircle, AlertCircle, Lightbulb, FileText } from 'lucide-react';

interface CasePractice {
  id: number;
  title: string;
  situation: string;
  question: string;
  userAnswer: string;
  correction: string;
  tips: string[];
}

const cases: CasePractice[] = [
  {
    id: 1,
    title: "Choix du mode de garde au 19ème siècle",
    situation: "Madame Dubois, épouse d'un industriel parisien en 1880, doit choisir entre une nourrice sur lieu dans le Morvan et une nourrice à domicile pour son nouveau-né.",
    question: "Analysez les avantages et inconvénients de chaque solution en tenant compte du contexte historique et social.",
    userAnswer: "",
    correction: "**Nourrice sur lieu (Morvan) :**\n\n**Avantages :**\n- Coût plus économique\n- Air pur de la campagne (croyance de l'époque)\n- Réputation des nourrices du Morvan\n- Libération complète de la mère\n\n**Inconvénients :**\n- Séparation prolongée de l'enfant\n- Contrôle difficile des conditions\n- Risques du transport\n- Mortalité infantile élevée\n\n**Nourrice à domicile :**\n\n**Avantages :**\n- Surveillance directe\n- Maintien du lien parent-enfant\n- Contrôle de l'hygiène et des soins\n- Statut social (signe de richesse)\n\n**Inconvénients :**\n- Coût très élevé\n- Logement de la nourrice\n- Possible conflit domestique\n- Dépendance vis-à-vis d'une personne",
    tips: [
      "Pensez au contexte social : la bourgeoisie parisienne du 19ème siècle",
      "Considérez les croyances de l'époque sur l'air de la campagne",
      "N'oubliez pas l'aspect économique et le statut social"
    ]
  },
  {
    id: 2,
    title: "Évolution réglementaire - Loi de 1977",
    situation: "Marie, ancienne nourrice non déclarée depuis 1970, doit s'adapter à la nouvelle loi de 1977 créant le statut d'assistante maternelle.",
    question: "Quelles sont les principales transformations qu'elle doit opérer pour se conformer à la nouvelle réglementation ?",
    userAnswer: "",
    correction: "**Transformations obligatoires :**\n\n**1. Obtention de l'agrément :**\n- Demande auprès des services de PMI\n- Visite du domicile et évaluation\n- Vérification des conditions d'accueil\n- Casier judiciaire vierge\n\n**2. Formation initiale :**\n- Formation aux premiers secours\n- Notions de développement de l'enfant\n- Hygiène et sécurité\n- Aspects réglementaires\n\n**3. Formalisation des relations :**\n- Contrat de travail écrit\n- Déclaration à l'URSSAF\n- Cotisations sociales\n- Assurance responsabilité civile\n\n**4. Contrôles réguliers :**\n- Visites de la PMI\n- Renouvellement de l'agrément\n- Formation continue\n- Respect du nombre d'enfants autorisés",
    tips: [
      "La loi de 1977 marque la professionnalisation du métier",
      "L'agrément est la clé de voûte du nouveau système",
      "Pensez à la protection sociale nouvellement acquise"
    ]
  },
  {
    id: 3,
    title: "Développement des crèches - Stratégie municipale",
    situation: "En 1985, le maire d'une ville de 50 000 habitants souhaite développer l'offre de crèches pour répondre aux besoins des familles bi-actives.",
    question: "Proposez une stratégie de développement en identifiant les différents types de crèches et leurs spécificités.",
    userAnswer: "",
    correction: "**Stratégie de développement des crèches :**\n\n**1. Crèches collectives municipales :**\n- 2-3 structures de 60 places chacune\n- Répartition géographique équilibrée\n- Personnel qualifié (EJE, auxiliaires)\n- Projet pédagogique structuré\n\n**2. Crèches familiales :**\n- Réseau de 30-40 assistantes maternelles\n- Encadrement par une directrice\n- Regroupements réguliers\n- Formation continue\n\n**3. Soutien aux crèches parentales :**\n- Aide à la création (locaux, subventions)\n- Formation des parents\n- Accompagnement administratif\n- 2-3 structures de 20 places\n\n**4. Partenariats entreprises :**\n- Crèches d'entreprise ou inter-entreprises\n- Réservation de places\n- Financement mixte public-privé\n\n**Avantages de cette diversification :**\n- Réponse adaptée aux différents besoins\n- Optimisation des coûts\n- Maillage territorial complet",
    tips: [
      "Diversifiez les types de structures pour répondre à tous les besoins",
      "Pensez au maillage territorial et à l'accessibilité",
      "Considérez les partenariats public-privé"
    ]
  },
  {
    id: 4,
    title: "Analyse sociologique - Les nourrices ivoiriennes",
    situation: "Fatou, jeune ivoirienne de 25 ans, arrive à Paris en 2000 pour travailler comme nourrice chez une famille bourgeoise. Elle découvre les attentes et contraintes de ce métier dans un contexte migratoire.",
    question: "Analysez les enjeux sociologiques de cette situation : motivations, attentes des employeurs, et défis rencontrés.",
    userAnswer: "",
    correction: "**Motivations de Fatou :**\n\n**Économiques :**\n- Envoi d'argent à la famille restée en Côte d'Ivoire\n- Salaire supérieur aux opportunités locales\n- Espoir d'amélioration du niveau de vie\n\n**Sociales :**\n- Projet migratoire familial\n- Réseau de compatriotes déjà installées\n- Perspective d'évolution professionnelle\n\n**Attentes des employeurs :**\n\n**Qualités recherchées :**\n- Dévouement et disponibilité totale\n- Compétences 'naturelles' supposées\n- Discrétion et soumission\n- Coût modéré par rapport aux alternatives\n\n**Défis et contradictions :**\n\n**Pour Fatou :**\n- Écart entre attentes et réalité du travail\n- Isolement social et culturel\n- Statut précaire (sans-papiers souvent)\n- Surqualification par rapport au poste\n\n**Enjeux sociologiques :**\n- Reproduction des inégalités Nord-Sud\n- Stéréotypes raciaux et de genre\n- Externalisation du care domestique\n- Questions de reconnaissance professionnelle",
    tips: [
      "Analysez les rapports de domination (classe, race, genre)",
      "Considérez le contexte migratoire et économique global",
      "Réfléchissez aux stéréotypes sur les compétences 'naturelles'"
    ]
  },
  {
    id: 5,
    title: "Évolution pédagogique des crèches",
    situation: "En 1990, la directrice d'une crèche municipale souhaite moderniser les pratiques pédagogiques en s'inspirant des apports de Dolto et des nouvelles approches du développement de l'enfant.",
    question: "Quelles transformations concrètes peut-elle mettre en œuvre pour passer d'un modèle traditionnel à une approche moderne ?",
    userAnswer: "",
    correction: "**Transformations pédagogiques :**\n\n**1. Conception de l'enfant :**\n- Passage de l'enfant 'objet de soins' à 'sujet compétent'\n- Reconnaissance des capacités précoces\n- Respect du rythme individuel\n- Valorisation de l'autonomie\n\n**2. Aménagement des espaces :**\n- Espaces différenciés (repos, jeu, repas)\n- Matériel adapté à la taille des enfants\n- Coins d'intimité et de retrait\n- Environnement sécurisant mais stimulant\n\n**3. Pratiques professionnelles :**\n- Abandon des pratiques autoritaires\n- Dialogue avec l'enfant (verbalisation)\n- Observation fine des besoins\n- Travail en équipe pluridisciplinaire\n\n**4. Relation avec les parents :**\n- Accueil personnalisé et progressif\n- Échanges quotidiens sur l'enfant\n- Respect des pratiques familiales\n- Soutien à la parentalité\n\n**5. Formation du personnel :**\n- Sensibilisation aux théories du développement\n- Formation à l'observation\n- Réflexion sur les pratiques\n- Supervision d'équipe\n\n**Obstacles potentiels :**\n- Résistance au changement\n- Coût de la formation\n- Nécessité de temps d'adaptation",
    tips: [
      "Pensez à l'influence de Dolto sur la conception de l'enfant",
      "Considérez l'évolution des pratiques professionnelles",
      "N'oubliez pas l'importance de la formation du personnel"
    ]
  }
];

export default function CasPratiquesPage() {
  const [currentCase, setCurrentCase] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>(new Array(cases.length).fill(''));
  const [showCorrection, setShowCorrection] = useState<boolean[]>(new Array(cases.length).fill(false));

  const handleAnswerChange = (value: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentCase] = value;
    setUserAnswers(newAnswers);
  };

  const toggleCorrection = () => {
    const newShowCorrection = [...showCorrection];
    newShowCorrection[currentCase] = !newShowCorrection[currentCase];
    setShowCorrection(newShowCorrection);
  };

  const currentCaseData = cases[currentCase];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <BackToPlanButton />
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Cas Pratiques
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Mettez en pratique vos connaissances à travers des situations concrètes
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Navigation des cas */}
            <div className="bg-gray-50 p-3 sm:p-4 border-b">
              <div className="flex flex-wrap gap-2 justify-center">
                {cases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCase(index)}
                    className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                      currentCase === index
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-indigo-50'
                    }`}
                  >
                    Cas {index + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8">
              {/* Titre du cas */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
                    {currentCaseData.title}
                  </h2>
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  Cas {currentCase + 1} sur {cases.length}
                </div>
              </div>

              {/* Situation */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                  Situation
                </h3>
                <div className="bg-orange-50 p-3 sm:p-4 rounded-lg border border-orange-200">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {currentCaseData.situation}
                  </p>
                </div>
              </div>

              {/* Question */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                  Question à traiter :
                </h3>
                <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                    {currentCaseData.question}
                  </p>
                </div>
              </div>

              {/* Conseils */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                  Conseils
                </h3>
                <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg border border-yellow-200">
                  <ul className="space-y-1 sm:space-y-2">
                    {currentCaseData.tips.map((tip, index) => (
                      <li key={index} className="text-xs sm:text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-yellow-600 mt-0.5">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Zone de réponse */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                  Votre analyse :
                </h3>
                <textarea
                  value={userAnswers[currentCase]}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                  placeholder="Rédigez votre analyse ici..."
                  className="w-full h-32 sm:h-40 lg:h-48 p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-sm sm:text-base"
                />
              </div>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
                <button
                  onClick={toggleCorrection}
                  className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
                >
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  {showCorrection[currentCase] ? 'Masquer la correction' : 'Voir la correction'}
                </button>
                
                <div className="flex gap-2 sm:gap-3">
                  <button
                    onClick={() => setCurrentCase(Math.max(0, currentCase - 1))}
                    disabled={currentCase === 0}
                    className="flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-3 bg-gray-200 text-gray-700 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors text-sm sm:text-base"
                  >
                    Précédent
                  </button>
                  <button
                    onClick={() => setCurrentCase(Math.min(cases.length - 1, currentCase + 1))}
                    disabled={currentCase === cases.length - 1}
                    className="flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-3 bg-gray-200 text-gray-700 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors text-sm sm:text-base"
                  >
                    Suivant
                  </button>
                </div>
              </div>

              {/* Correction */}
              {showCorrection[currentCase] && (
                <div className="bg-green-50 p-4 sm:p-6 rounded-lg border border-green-200">
                  <h3 className="text-base sm:text-lg font-semibold text-green-800 mb-3 sm:mb-4 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    Correction détaillée
                  </h3>
                  <div className="prose prose-sm sm:prose-base max-w-none text-gray-700">
                    {currentCaseData.correction.split('\n').map((line, index) => {
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return (
                          <h4 key={index} className="font-semibold text-gray-900 mt-3 sm:mt-4 mb-1 sm:mb-2 text-sm sm:text-base">
                            {line.replace(/\*\*/g, '')}
                          </h4>
                        );
                      }
                      if (line.startsWith('- ')) {
                        return (
                          <li key={index} className="ml-4 text-xs sm:text-sm text-gray-700">
                            {line.substring(2)}
                          </li>
                        );
                      }
                      if (line.trim()) {
                        return (
                          <p key={index} className="mb-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
                            {line}
                          </p>
                        );
                      }
                      return <br key={index} />;
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}