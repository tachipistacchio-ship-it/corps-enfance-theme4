import BackToPlanButton from '@/components/content/BackToPlanButton';

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <BackToPlanButton />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 lg:mb-12 text-center">
            Les modes de garde de la première enfance : Les nourrices
          </h1>
          
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
            <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-800 mb-4 sm:mb-6">
                Introduction
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                À partir du XIXe siècle, même si les règles de la puériculture invitent les mères à être auprès 
                de leur enfant jusqu'à ce que ces derniers fréquentent l'école, bon nombre d'entre elles doivent 
                et/ou veulent les confier rapidement à une tierce personne.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                La croissance urbaine, les habitudes de ne pas s'encombrer des tout-petits, la nécessité de 
                travailler dehors pour les femmes de milieux modestes expliquent la vogue grandissante au XIXe 
                siècle des nourrices, généralement à la campagne. Quant aux femmes des milieux aisés, elles 
                confient leur enfant à des nourrices pour pouvoir répondre aux attentes de leur milieu 
                (vie mondaine notamment).
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-base text-gray-700 font-medium">
                  <strong>Questions centrales :</strong> Qui sont ces nourrices à qui l'on confie les très jeunes enfants ? 
                  D'où viennent-elles ? Où vivent-elles ? À quel milieu social appartiennent-elles ? 
                  Quelles qualités attend-on d'elles ?
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-800 mb-4 sm:mb-6">
                Un phénomène ancien qui s'accroît au XIXe siècle
              </h2>
              
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Le métier de nourrice est l'un des plus vieux du monde. Déjà dans l'Antiquité à Rome et durant 
                  tout l'Ancien Régime, les mères appartenant aux couches supérieures de la société n'allaitaient pas. 
                  Pour diverses raisons, les parents préféraient recourir aux services d'une femme récemment accouchée.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Contrats historiques</h3>
                  <p className="text-base text-gray-700">
                    Des contrats de nourrissage datant du XVe siècle ont été retrouvés : ils sont signés par deux hommes, 
                    le géniteur et le nourricier (les femmes n'ont pas voix au chapitre). Le mari de la nourrice s'impliquait donc. 
                    La parenté de lait prenait place à côté de la parenté de sang : entre frère et sœur de lait, le mariage était 
                    interdit ; en revanche, l'entraide réciproque en cas de besoin s'imposait pour toute la vie.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Statistiques alarmantes</h3>
                  <ul className="space-y-2 text-base text-gray-700">
                    <li><strong>Paris 1780 :</strong> Sur 21 000 enfants nés, seuls 1 000 sont nourris par leur mère</li>
                    <li><strong>Vers 1865 :</strong> 10% des enfants étaient emmenés en nourrice à la campagne</li>
                    <li><strong>Mortalité infantile :</strong> Entre 156‰ et 175‰ jusqu'à la fin du Second Empire</li>
                    <li><strong>1914 :</strong> 1/10e des enfants sont placés en nourrice</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Répartition géographique (1887-1888)</h3>
                  <p className="text-base text-gray-700 mb-2">Nombre d'enfants mis en nourrice hors de la ville pour 100 naissances :</p>
                  <ul className="space-y-1 text-base text-gray-700">
                    <li>• <strong>Lyon :</strong> 47,9% (½ des enfants de la région)</li>
                    <li>• <strong>Paris :</strong> 29,3% (1/3 des enfants de la Seine)</li>
                    <li>• <strong>Bordeaux :</strong> 9,6%</li>
                    <li>• <strong>Lille :</strong> 2,8%</li>
                    <li>• <strong>Autres départements :</strong> seulement 8%</li>
                  </ul>
                </div>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Les placements en nourrice vont diminuer tout au long du XXe siècle. Progressivement, l'enfant reste 
                  chez ses parents et ne se voit confié à une tierce personne que durant la journée.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-800 mb-4 sm:mb-6">
                Des nourrices pour qui ?
              </h2>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                Outre les familles de l'aristocratie, le placement en nourrice touche les familles plus modestes 
                dans lesquelles les femmes ont une occupation. Les différenciations se mettent en place entre les 
                modes de garde avec une sorte de hiérarchie en trois groupes :
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">1. Les enfants abandonnés</h3>
                  <p className="text-base text-gray-700">
                    Environ un tiers des enfants nés hors mariage sont confiés à des nourrices par l'Assistance Publique, 
                    loin, très loin généralement, de leur lieu de naissance.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">2. Les enfants des classes ouvrières</h3>
                  <p className="text-base text-gray-700">
                    Ils sont envoyés en nourrice à l'extérieur. Dans les familles qui ne peuvent envoyer le bébé en nourrice, 
                    l'enfant des classes populaires est la plupart du temps laissé à lui-même dans la journée car les parents travaillent.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">3. Les enfants des classes moyennes aisées</h3>
                  <p className="text-base text-gray-700">
                    Ils ont des nourrices à domicile. Mais la majorité des enfants sont quand même élevés par leur mère 
                    qui n'est pas impliquée dans une activité professionnelle !
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-4">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Conditions difficiles pour les classes populaires</h3>
                <p className="text-base text-gray-700 mb-2">
                  Dans les villes industrielles, le travail des enfants paraît alors un moindre mal. À Lille, les usines 
                  font travailler les enfants à partir de 6 ans durant la première moitié du XIXe siècle, certains commencent même à 4 ans.
                </p>
                <p className="text-base text-gray-700">
                  <strong>Solutions de garde précaires :</strong> grands-mères (rarement), fillettes qui ne s'occupent guère de l'enfant, 
                  ou gardiennes qui gardent des enfants moyennant finance. En 1850, il existe une cinquantaine de gardiennes à Lille. 
                  Dans le Nord, les mères épuisées administrent parfois un "dormant" (sirop à base de stupéfiant) à leur enfant.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}