import BackToPlanButton from '@/components/content/BackToPlanButton';
import NextSectionButton from '@/components/content/NextSectionButton';

export default function Section1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <BackToPlanButton />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 lg:mb-12 text-center">
            Section 1 : Le Bureau des Nourrices et les Nourrices à Domicile
          </h1>
          
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-green-800 mb-4 sm:mb-6">
                Un bureau des nourrices à Paris rue du Cherche-Midi
              </h2>
              
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Beaucoup de familles souhaitant mettre en nourrice leur enfant recourent aux bureaux privés de placement 
                  ou au voisinage. Cette pratique est tellement importante au XIXe siècle, qu'toute une infrastructure 
                  est mise en place pour l'encadrer. On peut même parler d'un véritable marché.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Chiffres clés - Paris 1860</h3>
                  <ul className="space-y-1 text-base text-gray-700">
                    <li>• <strong>41%</strong> des nourrissons sont placés chez des nourrices</li>
                    <li>• <strong>22 500</strong> nourrices recensées</li>
                    <li>• Existence d'un bureau des nourrices depuis le XVIIIe siècle</li>
                  </ul>
                </div>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  D'autres bureaux ouvrent leurs portes au XIXe siècle : les nourrices viennent à Paris et y restent 
                  parfois trois semaines à leurs frais, en attendant d'être choisies. Parfois, elles repartent sans 
                  nourrisson et après y avoir abandonné le leur.
                </p>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Le réseau de recrutement</h3>
                  <p className="text-base text-gray-700">
                    Les médecins-accoucheurs ou les sages-femmes mettent en contact les mères qui viennent d'accoucher 
                    et les "rabatteurs" qui proposent des nourrices. Médecins et sages-femmes reçoivent, au passage, 
                    leurs commissions.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-base text-gray-700">
                    <strong>Relation sociale :</strong> Toutes les classes de la société recourent à l'allaitement mercenaire 
                    et il y a une relation entre les moyens financiers des parents et la "qualité" de la nourrice. 
                    Plus la famille est pauvre, plus le nourrisson est expédié loin.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-green-800 mb-4 sm:mb-6">
                Avoir une nourrice chez soi
              </h2>
              
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  La mise en nourrice est un phénomène important en France comme nous venons de le voir. Mais, peu de 
                  familles peuvent faire venir la nourrice chez eux. Le phénomène se généralise à partir de 1830 ; 
                  il est le fait d'une nouvelle bourgeoisie (d'affaires et d'industrie) qui aime paraître.
                </p>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Signe extérieur de richesse</h3>
                  <p className="text-base text-gray-700">
                    La nourrice "sur lieu" devient alors un signe extérieur de richesse. Bien entendu, cette bourgeoisie 
                    a ses propres réseaux pour trouver la nourrice idéale. Il y a donc un lien entre classes sociales 
                    et "choix" de la nourrice.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Statistiques Paris 1860</h3>
                  <p className="text-base text-gray-700">
                    Dans la deuxième moitié du XIXe siècle, presque toutes les familles aisées ont une nourrice chez elles. 
                    On compte cependant seulement <strong>3 880 nourrices</strong> à Paris en 1860.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Le statut privilégié de la nourrice</h3>
                  <p className="text-base text-gray-700 mb-2">
                    À partir de la seconde partie du XIXe siècle, la grande et moyenne bourgeoisie fait venir la nourrice 
                    "sur lieu", soit au domicile des parents. Elle est donc bien habillée et choyée (la nourrice porte 
                    un bonnet à coques avec d'amples rubans).
                  </p>
                  <ul className="space-y-1 text-base text-gray-700">
                    <li>• Elle a une place à part dans la domesticité</li>
                    <li>• Elle est bien payée, mais elle fait des sacrifices</li>
                    <li>• Elle a quitté sa famille</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Le processus de sélection</h3>
                  <p className="text-base text-gray-700 mb-2">
                    Elle s'est présentée au bureau des nourrices de la ville avec son bébé. C'est un bureau qui fonctionne 
                    comme un marché aux bestiaux :
                  </p>
                  <ul className="space-y-1 text-base text-gray-700">
                    <li>• Le docteur palpe ses seins</li>
                    <li>• Goûte son lait</li>
                    <li>• Flaire son haleine</li>
                  </ul>
                  <p className="text-base text-gray-700 mt-2">
                    Après l'embauche, elle doit renvoyer son enfant qu'une "meneuse" raccompagne jusqu'au village.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-green-800 mb-4 sm:mb-6">
                Des qualités recherchées qui changent au fil du temps
              </h2>
              
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">La nourrice idéale selon le docteur Boucher (1870)</h3>
                  <blockquote className="text-base text-gray-700 italic border-l-4 border-purple-400 pl-4">
                    "Une bonne nourrice ne doit pas avoir moins de vingt ans, ni en compter plus de trente-cinq... 
                    Une nourrice doit avoir un peu d'embonpoint, être d'une taille moyenne, brune, le teint un peu coloré, 
                    les dents saines et les gencives roses, le sein volumineux, marbré de veines apparentes, le mamelon 
                    bien formé. Elle doit avoir la bouche bien garnie, une haleine douce."
                  </blockquote>
                </div>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Cette représentation de la nourrice idéale reprend des critères hérités de l'ancienne médecine. 
                  Son physique est le garant d'une bonne santé et d'une capacité à nourrir correctement le bébé. 
                  C'est là le critère principal retenu au moment où s'impose la puériculture pastorienne et qui 
                  prévaut pendant plusieurs décennies.
                </p>

                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">La nourrice du Morvan : symbole d'excellence</h3>
                  <p className="text-base text-gray-700 mb-2">
                    La nourrice du Morvan (dans le département de la Nièvre) devient alors le symbole de la nourrice idéale. 
                    En effet, la femme morvandelle a été pendant longtemps recherchée pour ses qualités de nourrice. 
                    On prétend qu'elle donne un excellent lait.
                  </p>
                  <p className="text-base text-gray-700">
                    Issues des milieux pauvres, ces jeunes femmes qui se devaient d'être jeunes mères afin d'avoir du lait, 
                    permettaient ainsi d'améliorer les revenus de sa famille. Il leur fallait certes quitter le bébé dont 
                    elles venaient d'accoucher, mais le salaire important leur permettait de subvenir largement aux besoins 
                    de leur famille et d'améliorer leur mode de vie.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Conditions de vie privilégiées</h3>
                  <p className="text-base text-gray-700">
                    Lorsqu'elle part pour la ville pour être nourrice au domicile de ses employeurs, la nourrice est traitée 
                    comme une domestique privilégiée. Elle reçoit des habits élégants et des accessoires, permettant ainsi 
                    à la famille de montrer son rang social à travers ses atours. Afin que son lait soit le meilleur, 
                    la nourrice est bien nourrie et ne doit pas se fatiguer. Elle vit avec le nourrisson qu'elle allaite 
                    et se doit d'être discrète et posée.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-green-800 mb-4 sm:mb-6">
                Évolution au début du XXe siècle
              </h2>
              
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Au début du XXe siècle, il existe ainsi plusieurs modes de garde pour les tout-petits. 
                  Chaque mode de garde répond à une demande socialement différenciée :
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Nourrices sur lieu</h3>
                    <p className="text-base text-gray-700">
                      Plus onéreuses, choisies par les familles aisées
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Crèches</h3>
                    <p className="text-base text-gray-700">
                      Beaucoup gratuites, accueillent surtout les enfants de femmes ouvrières
                    </p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                    <h3 className="text-lg font-semibold text-orange-800 mb-2">Nourrices au loin</h3>
                    <p className="text-base text-gray-700">
                      Femmes d'artisans, commerçants, domestiques, couturières, lingères et blanchisseuses
                    </p>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  L'accueil des enfants chez la nourrice diminue au cours du XXe siècle grâce aux progrès de l'allaitement 
                  artificiel (biberon et lait industriel). La profession de nourrices n'est toutefois pas en danger. 
                  Bon nombre de familles ont recours à des nourrices le jour et les milieux aisés continuent à employer 
                  des nourrices à domicile. La crèche n'est pas le mode de garde privilégié pendant longtemps.
                </p>
              </div>
            </section>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                💡 Moyen mnémotechnique
              </h3>
              <p className="text-yellow-800">
                <strong>BQSM</strong> : <strong>B</strong>ureau des nourrices → <strong>Q</strong>ualités physiques → 
                <strong>S</strong>igne de richesse → <strong>M</strong>orvan (nourrice idéale)
              </p>
            </div>
          </div>
          
          <NextSectionButton 
            href="/section-2" 
            title="Section 2" 
            description="Évolution des Qualités et Cadre Légal"
          />
        </div>
      </div>
    </div>
  );
}