import BackToPlanButton from '@/components/content/BackToPlanButton';
import NextSectionButton from '@/components/content/NextSectionButton';

export default function Section2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <BackToPlanButton />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 lg:mb-12 text-center">
            Section 2 : Évolution des Qualités et Cadre Légal
          </h1>
          
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-800 mb-4 sm:mb-6">
                L'évolution des qualités recherchées chez les nourrices
              </h2>
              
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Citation de Guy de Maupassant - Mont-Oriol</h3>
                  <blockquote className="text-base text-gray-700 italic border-l-4 border-purple-400 pl-4">
                    "C'était une belle fille de vingt-cinq ans, haute, forte, fraîche, qui riait toujours et portait 
                    son enfant comme si elle n'eût rien eu dans les bras. Elle avait de gros seins durs, une taille 
                    robuste, des joues rouges et l'air heureux d'une paysanne qui mange bien."
                  </blockquote>
                  <p className="text-sm text-purple-700 mt-2">
                    Cette description illustre l'idéal de la nourrice au XIXe siècle : robuste, saine et joyeuse.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">La nourrice du Morvan : un modèle d'excellence</h3>
                  <p className="text-base text-gray-700 mb-2">
                    La nourrice du Morvan (département de la Nièvre) devient le symbole de la nourrice idéale. 
                    La femme morvandelle est recherchée pour ses qualités exceptionnelles :
                  </p>
                  <ul className="space-y-1 text-base text-gray-700">
                    <li>• <strong>Lait d'excellente qualité</strong> selon la réputation</li>
                    <li>• <strong>Robustesse physique</strong> liée à la vie rurale</li>
                    <li>• <strong>Motivation économique forte</strong> pour améliorer les revenus familiaux</li>
                    <li>• <strong>Jeunes mères</strong> ayant récemment accouché pour avoir du lait</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Le sacrifice maternel</h3>
                  <p className="text-base text-gray-700">
                    Ces femmes issues des milieux pauvres devaient quitter le bébé dont elles venaient d'accoucher. 
                    Malgré ce sacrifice douloureux, le salaire important leur permettait de subvenir largement aux 
                    besoins de leur famille et d'améliorer considérablement leur mode de vie.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-800 mb-4 sm:mb-6">
                Nouvelles qualités recherchées à partir des années 1950
              </h2>
              
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Avec l'évolution des connaissances en puériculture et psychologie, les critères de sélection 
                  des nourrices se transforment radicalement. Benjamin Spock, dans son ouvrage de référence, 
                  définit de nouveaux standards.
                </p>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Les nouvelles exigences selon Benjamin Spock</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Qualités psychologiques :</h4>
                      <ul className="space-y-1 text-base text-gray-700">
                        <li>• Affection naturelle pour les enfants</li>
                        <li>• Patience et douceur</li>
                        <li>• Stabilité émotionnelle</li>
                        <li>• Capacité d'adaptation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Compétences pratiques :</h4>
                      <ul className="space-y-1 text-base text-gray-700">
                        <li>• Expérience avec les enfants</li>
                        <li>• Connaissances en puériculture</li>
                        <li>• Hygiène irréprochable</li>
                        <li>• Sens des responsabilités</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Évolution du rôle</h3>
                  <p className="text-base text-gray-700">
                    La nourrice ne se contente plus seulement d'allaiter : elle devient une véritable éducatrice 
                    du jeune enfant, participant à son développement psychomoteur et affectif. Cette évolution 
                    marque le passage de la "nourrice" à l'"assistante maternelle".
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-800 mb-4 sm:mb-6">
                Le cadre légal : de la surveillance à la professionnalisation
              </h2>
              
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Le constat alarmant du XIXe siècle</h3>
                  <p className="text-base text-gray-700 mb-2">
                    La mortalité infantile chez les enfants placés en nourrice atteint des niveaux dramatiques :
                  </p>
                  <ul className="space-y-1 text-base text-gray-700">
                    <li>• <strong>Mortalité générale :</strong> 156‰ à 175‰ jusqu'à la fin du Second Empire</li>
                    <li>• <strong>Enfants en nourrice :</strong> taux encore plus élevés</li>
                    <li>• <strong>Causes principales :</strong> transport dangereux, soins inadéquats, négligence</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Les dangers du transport</h3>
                  <p className="text-base text-gray-700">
                    Les "meneuses" transportent les nourrissons dans des conditions épouvantables : entassés dans 
                    des paniers, exposés aux intempéries, nourris avec des bouillies inadaptées pendant le voyage. 
                    Beaucoup d'enfants meurent avant même d'arriver chez leur nourrice.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">La loi Roussel (23 décembre 1874)</h3>
                  <p className="text-base text-gray-700 mb-2">
                    <strong>Première loi de protection de l'enfance en France</strong>, elle institue :
                  </p>
                  <ul className="space-y-1 text-base text-gray-700">
                    <li>• <strong>Surveillance publique</strong> des enfants placés en nourrice</li>
                    <li>• <strong>Déclaration obligatoire</strong> des placements</li>
                    <li>• <strong>Contrôles réguliers</strong> par des inspecteurs</li>
                    <li>• <strong>Sanctions</strong> en cas de négligence</li>
                  </ul>
                  <p className="text-base text-gray-700 mt-2">
                    Cette loi marque le début de l'intervention de l'État dans la protection de l'enfance.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Évolution vers les "assistantes maternelles"</h3>
                  <p className="text-base text-gray-700 mb-2">
                    Au XXe siècle, la profession se transforme progressivement :
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">1945 - Création de la PMI</h4>
                      <p className="text-sm text-gray-700">
                        Protection Maternelle et Infantile : surveillance médicale systématique
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">1977 - Loi du 17 mai</h4>
                      <p className="text-sm text-gray-700">
                        Reconnaissance légale et professionnalisation des assistantes maternelles
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">L'agrément et la formation moderne</h3>
                  <p className="text-base text-gray-700 mb-2">
                    Depuis la loi de 1977, les assistantes maternelles doivent obtenir un agrément qui comprend :
                  </p>
                  <ul className="space-y-1 text-base text-gray-700">
                    <li>• <strong>Évaluation du domicile</strong> (sécurité, hygiène, espace)</li>
                    <li>• <strong>Entretien psychologique</strong> avec une puéricultrice</li>
                    <li>• <strong>Formation obligatoire</strong> de 120 heures</li>
                    <li>• <strong>Suivi régulier</strong> par les services de PMI</li>
                    <li>• <strong>Renouvellement périodique</strong> de l'agrément</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-800 mb-4 sm:mb-6">
                Les nourrices africaines : une nouvelle migration
              </h2>
              
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">L'étude sur les nourrices ivoiriennes à Paris</h3>
                  <p className="text-base text-gray-700 mb-2">
                    Une étude sociologique révèle les nouvelles dynamiques migratoires dans le secteur de la garde d'enfants :
                  </p>
                  <ul className="space-y-1 text-base text-gray-700">
                    <li>• <strong>Recrutement :</strong> souvent par le bouche-à-oreille dans les communautés</li>
                    <li>• <strong>Profil :</strong> femmes jeunes, souvent mères elles-mêmes</li>
                    <li>• <strong>Motivation :</strong> migration économique pour soutenir la famille restée au pays</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Des attentes très élevées</h3>
                  <p className="text-base text-gray-700">
                    Les familles employeuses ont des exigences considérables envers ces nourrices : disponibilité 
                    totale, dévouement absolu, discrétion parfaite. Ces attentes rappellent celles du XIXe siècle, 
                    mais dans un contexte migratoire contemporain qui crée de nouvelles vulnérabilités.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Continuités historiques</h3>
                  <p className="text-base text-gray-700">
                    Cette situation moderne fait écho aux nourrices du Morvan : des femmes issues de milieux 
                    défavorisés qui quittent leur famille pour s'occuper des enfants des classes aisées, 
                    dans une logique de migration économique et de sacrifice personnel.
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                💡 Moyen mnémotechnique
              </h3>
              <p className="text-yellow-800">
                <strong>MARS</strong> : <strong>M</strong>aupassant → <strong>A</strong>grément → <strong>R</strong>oussel (loi) → <strong>S</strong>pock (nouvelles qualités)
              </p>
            </div>
          </div>
          
          <NextSectionButton 
            href="/section-3" 
            title="Section 3" 
            description="Histoire et Évolution des Crèches"
          />
        </div>
      </div>
    </div>
  );
}