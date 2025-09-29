import BackToPlanButton from '@/components/content/BackToPlanButton';
import NextSectionButton from '@/components/content/NextSectionButton';
import StartSectionButton from '@/components/content/StartSectionButton';

export default function Section3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <BackToPlanButton />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 lg:mb-12 text-center">
            Section 3 : Histoire et Évolution des Crèches
          </h1>
          
          <StartSectionButton 
            title="Commencer la Section 3"
            description="Découvrez l'histoire et le développement des crèches en France"
          />
          
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-purple-800 mb-4 sm:mb-6">
                Les origines des crèches au XIXe siècle
              </h2>
              
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Les crèches apparaissent au XIXe siècle comme une réponse aux besoins de garde des enfants 
                  de la classe ouvrière. Contrairement aux nourrices, elles représentent une solution collective 
                  et urbaine à la prise en charge des tout-petits.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Les premières initiatives privées à Paris</h3>
                  <p className="text-base text-gray-700 mb-2">
                    Les premières crèches sont créées par des initiatives privées philanthropiques :
                  </p>
                  <ul className="space-y-1 text-base text-gray-700">
                    <li>• <strong>Financement :</strong> Banque Mallet et autres mécènes bourgeois</li>
                    <li>• <strong>Objectif :</strong> Permettre aux mères ouvrières de travailler</li>
                    <li>• <strong>Public cible :</strong> Enfants de 0 à 3 ans des classes populaires</li>
                    <li>• <strong>Localisation :</strong> Quartiers ouvriers de Paris</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">Une diffusion lente hors de Paris</h3>
                  <p className="text-base text-gray-700">
                    Contrairement aux nourrices qui sont un phénomène national, les crèches restent longtemps 
                    concentrées dans la capitale. Leur développement en province est très progressif et inégal, 
                    dépendant largement des initiatives locales et de l'industrialisation des régions.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">L'absence initiale de l'État</h3>
                  <p className="text-base text-gray-700">
                    Pendant longtemps, l'État n'intervient pas dans le développement des crèches. 
                    Cette absence de politique publique contraste avec la surveillance mise en place 
                    pour les nourrices (loi Roussel 1874). Les crèches restent des initiatives privées 
                    ou municipales isolées.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-purple-800 mb-4 sm:mb-6">
                Réglementation et reconnaissance progressive
              </h2>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Vers la reconnaissance d'utilité publique</h3>
                  <p className="text-base text-gray-700 mb-2">
                    Progressivement, les crèches obtiennent une reconnaissance officielle :
                  </p>
                  <ul className="space-y-1 text-base text-gray-700">
                    <li>• <strong>Réglementation :</strong> Mise en place de normes d'hygiène et de sécurité</li>
                    <li>• <strong>Utilité publique :</strong> Reconnaissance du service rendu à la société</li>
                    <li>• <strong>Subventions :</strong> Début du financement public partiel</li>
                    <li>• <strong>Contrôles :</strong> Surveillance par les services municipaux</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Une fréquentation limitée</h3>
                  <p className="text-base text-gray-700">
                    Malgré leur utilité reconnue, les crèches souffrent d'une fréquentation relativement faible. 
                    Plusieurs facteurs expliquent cette situation : coût encore élevé pour les familles les plus 
                    pauvres, méfiance culturelle, préférence pour les solutions familiales ou de voisinage.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">L'image d'établissement de charité</h3>
                  <p className="text-base text-gray-700">
                    Les crèches traînent longtemps une réputation d'établissements de charité destinés aux plus 
                    démunis. Cette image stigmatisante freine leur développement et leur acceptation sociale. 
                    Beaucoup de familles préfèrent d'autres solutions pour éviter cette stigmatisation.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-purple-800 mb-4 sm:mb-6">
                Évolution du personnel : des nourrices aux "dames gardiennes"
              </h2>
              
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  À la fin du XIXe siècle, le personnel des crèches évolue significativement. 
                  On passe progressivement des nourrices traditionnelles aux "dames gardiennes", 
                  marquant une première étape vers la professionnalisation.
                </p>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Les "dames gardiennes" : un nouveau profil</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">Profil recherché :</h4>
                      <ul className="space-y-1 text-base text-gray-700">
                        <li>• Femmes d'âge mûr</li>
                        <li>• Expérience maternelle</li>
                        <li>• Moralité irréprochable</li>
                        <li>• Capacité de surveillance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">Nouvelles missions :</h4>
                      <ul className="space-y-1 text-base text-gray-700">
                        <li>• Surveillance collective</li>
                        <li>• Hygiène et soins</li>
                        <li>• Activités d'éveil</li>
                        <li>• Relation avec les familles</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Impact de l'industrialisation</h3>
                  <p className="text-base text-gray-700">
                    L'industrialisation croissante modifie les besoins de garde. Les horaires de travail en usine 
                    nécessitent des solutions de garde plus structurées et prévisibles que les arrangements 
                    individuels avec les nourrices. Les crèches s'adaptent progressivement à ces nouvelles exigences.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-purple-800 mb-4 sm:mb-6">
                Révolution après 1945 : psychologie et psychanalyse
              </h2>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">L'influence de la psychanalyse</h3>
                  <p className="text-base text-gray-700 mb-2">
                    Après la Seconde Guerre mondiale, les théories psychanalytiques transforment radicalement 
                    la conception de la petite enfance et, par conséquent, le fonctionnement des crèches :
                  </p>
                  <ul className="space-y-1 text-base text-gray-700">
                    <li>• <strong>Importance de la relation :</strong> Accent mis sur la qualité du lien affectif</li>
                    <li>• <strong>Développement psychique :</strong> Prise en compte des besoins émotionnels</li>
                    <li>• <strong>Individualisation :</strong> Attention portée à chaque enfant</li>
                    <li>• <strong>Formation du personnel :</strong> Intégration de notions psychologiques</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">Mai 1968 et ses conséquences</h3>
                  <p className="text-base text-gray-700">
                    Les événements de Mai 1968 accélèrent les transformations dans le domaine de la petite enfance. 
                    Les revendications portent sur la démocratisation de l'accès aux crèches, l'amélioration de 
                    la qualité d'accueil, et une remise en question des pratiques autoritaires traditionnelles.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">L'influence religieuse en déclin</h3>
                  <p className="text-base text-gray-700">
                    Traditionnellement marquées par l'influence religieuse (notamment catholique), les crèches 
                    s'orientent progressivement vers une approche plus laïque et scientifique. Cette évolution 
                    s'accompagne d'une professionnalisation accrue du personnel et d'une modernisation des méthodes.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-purple-800 mb-4 sm:mb-6">
                L'ère Dolto et les "Maisons vertes"
              </h2>
              
              <div className="space-y-4">
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">Françoise Dolto : une révolution conceptuelle</h3>
                  <p className="text-base text-gray-700 mb-2">
                    Les idées de Françoise Dolto transforment profondément la conception de l'enfance :
                  </p>
                  <ul className="space-y-1 text-base text-gray-700">
                    <li>• <strong>L'enfant sujet :</strong> Reconnaissance de l'enfant comme personne à part entière</li>
                    <li>• <strong>Importance de la parole :</strong> Nécessité de parler à l'enfant et de l'écouter</li>
                    <li>• <strong>Respect du rythme :</strong> Adaptation aux besoins individuels</li>
                    <li>• <strong>Relation parents-enfants :</strong> Accompagnement de la parentalité</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Les "Maisons vertes" : un nouveau concept</h3>
                  <p className="text-base text-gray-700 mb-2">
                    Créées par Françoise Dolto, les Maisons vertes proposent un modèle innovant :
                  </p>
                  <ul className="space-y-1 text-base text-gray-700">
                    <li>• <strong>Accueil parents-enfants :</strong> Espaces de rencontre et d'échange</li>
                    <li>• <strong>Prévention :</strong> Détection précoce des difficultés</li>
                    <li>• <strong>Soutien à la parentalité :</strong> Accompagnement des familles</li>
                    <li>• <strong>Socialisation progressive :</strong> Préparation à la séparation</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Le concept du "bébé compétent"</h3>
                  <p className="text-base text-gray-700">
                    L'émergence du concept de "bébé compétent" révolutionne les pratiques en crèche. 
                    L'enfant n'est plus considéré comme un être passif à nourrir et surveiller, mais comme 
                    un individu capable d'interactions, d'apprentissages et de communication dès son plus jeune âge.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-purple-800 mb-4 sm:mb-6">
                Les crèches depuis les années 1980 : vers l'excellence éducative
              </h2>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Focus sur l'autonomie de l'enfant</h3>
                  <p className="text-base text-gray-700 mb-2">
                    Les crèches modernes mettent l'accent sur le développement de l'autonomie :
                  </p>
                  <ul className="space-y-1 text-base text-gray-700">
                    <li>• <strong>Aménagement de l'espace :</strong> Environnements adaptés à l'exploration</li>
                    <li>• <strong>Activités libres :</strong> Respect des initiatives de l'enfant</li>
                    <li>• <strong>Apprentissages progressifs :</strong> Acquisition de compétences pratiques</li>
                    <li>• <strong>Confiance en soi :</strong> Encouragement de l'estime de soi</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Le jeu comme outil éducatif central</h3>
                  <p className="text-base text-gray-700">
                    Le jeu devient l'outil pédagogique principal des crèches contemporaines. Il n'est plus 
                    considéré comme un simple divertissement mais comme le moyen privilégié d'apprentissage 
                    et de développement de l'enfant : motricité, socialisation, créativité, langage.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Inclusion des enfants en situation de handicap</h3>
                  <p className="text-base text-gray-700">
                    Les crèches développent progressivement des politiques d'inclusion pour accueillir 
                    les enfants en situation de handicap. Cette évolution nécessite des adaptations 
                    matérielles, une formation spécialisée du personnel et des partenariats avec 
                    les professionnels de santé.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">Professionnalisation des éducateurs de jeunes enfants</h3>
                  <p className="text-base text-gray-700 mb-2">
                    La création du diplôme d'éducateur de jeunes enfants marque l'aboutissement de la 
                    professionnalisation du secteur :
                  </p>
                  <ul className="space-y-1 text-base text-gray-700">
                    <li>• <strong>Formation de niveau Bac+3 :</strong> Cursus universitaire spécialisé</li>
                    <li>• <strong>Compétences multiples :</strong> Pédagogie, psychologie, santé, social</li>
                    <li>• <strong>Reconnaissance professionnelle :</strong> Statut et rémunération revalorisés</li>
                    <li>• <strong>Formation continue :</strong> Mise à jour régulière des connaissances</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                💡 Moyen mnémotechnique
              </h3>
              <p className="text-yellow-800">
                <strong>PDJE</strong> : <strong>P</strong>hilanthropie (origines) → <strong>D</strong>olto → <strong>J</strong>eu → <strong>E</strong>ducateurs (professionnalisation)
              </p>
            </div>
          </div>
          
          <NextSectionButton 
            href="/quiz" 
            title="Quiz" 
            description="Évaluation de vos connaissances"
          />
        </div>
      </div>
    </div>
  );
}