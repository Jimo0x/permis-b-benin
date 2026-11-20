/* ===================================================================
   cours.js — Contenu pédagogique complet du code de la route (Permis B)
   Rédigé pour le contexte béninois (ANaTT / SIGPCB / e-codepermis),
   sur la base des règles générales du code de la route en vigueur
   dans l'espace francophone/CEDEAO et des informations officielles
   disponibles sur le permis de conduire au Bénin.
   =================================================================== */

const COURS = [
  {
    id: "permis-benin",
    icon: "🪪",
    title: "Le permis de conduire au Bénin",
    sections: [
      {
        heading: "Qui délivre le permis ?",
        html: `<p>Le permis de conduire est l'autorisation administrative de circuler sur la voie publique avec un véhicule. Au Bénin, il est délivré par l'<strong>Agence Nationale des Transports Terrestres (ANaTT)</strong>.</p>
        <p>Depuis 2021, l'examen théorique (le « code ») est entièrement <strong>dématérialisé</strong> : il se passe sur ordinateur/tablette via la plateforme <strong>SIGPCB</strong> (Système Intégré de Gestion du Permis de Conduire au Bénin), aussi connue du grand public sous le nom de <strong>e-codepermis</strong>. Cela a permis de réduire les fraudes qui existaient avec l'examen papier.</p>`
      },
      {
        heading: "Les catégories de permis",
        html: `<table class="table">
          <tr><th>Catégorie</th><th>Âge min.</th><th>Véhicules concernés</th></tr>
          <tr><td>A1</td><td>16 ans</td><td>Cyclomoteurs et assimilés jusqu'à 75 cm³</td></tr>
          <tr><td>A2</td><td>18 ans</td><td>Motos, tricycles et quads de 75 à 400 cm³</td></tr>
          <tr><td>A3</td><td>21 ans</td><td>Motos de plus de 400 cm³</td></tr>
          <tr><td><strong>B</strong></td><td><strong>18 ans</strong></td><td><strong>Véhicules de moins de 10 places, PTAC ≤ 3 500 kg</strong></td></tr>
          <tr><td>F</td><td>18 ans</td><td>Véhicules aménagés pour personnes handicapées (≤ 3 500 kg)</td></tr>
          <tr><td>C</td><td>21 ans</td><td>Poids lourds de 3 500 à 18 000 kg</td></tr>
          <tr><td>C1</td><td>21 ans</td><td>Poids lourds de plus de 18 tonnes</td></tr>
          <tr><td>DR</td><td>21 ans</td><td>Minibus (18 places, 3,5 t)</td></tr>
          <tr><td>D</td><td>21 ans</td><td>Transport public de plus de 18 places</td></tr>
          <tr><td>E</td><td>21 ans</td><td>Véhicules tractant une remorque de plus de 750 kg</td></tr>
        </table>
        <p>Les catégories C, C1, DR, D, E exigent en général de détenir le permis B depuis au moins un an.</p>`
      },
      {
        heading: "Le parcours pour obtenir le permis B",
        html: `<ol>
          <li>S'inscrire dans une <strong>auto-école agréée</strong> par le ministère en charge des Transports.</li>
          <li>Suivre la formation : environ <strong>60 heures de théorie</strong> (code) et <strong>15 heures de conduite</strong> en moyenne.</li>
          <li>Déposer un dossier de candidature via l'auto-école (acte de naissance, certificat médical, justificatif de domicile, photos, pièce d'identité, certificat de groupe sanguin, quittances ANaTT et Trésor).</li>
          <li>Réussir l'<strong>examen théorique du code</strong> (QCM sur SIGPCB / e-codepermis), <strong>note minimale : 14/20</strong>.</li>
          <li>Réussir l'<strong>examen pratique de conduite</strong> (manœuvres + circulation en ville et hors agglomération).</li>
        </ol>
        <p class="note">La note minimale de 14/20 s'applique aussi bien au théorique qu'au pratique selon les dernières réformes ; vérifie toujours la note exigée du jour auprès de ton auto-école, les textes évoluant régulièrement.</p>`
      },
      {
        heading: "Frais et validité",
        html: `<ul>
          <li>Quittance ANaTT : <strong>20 200 FCFA</strong> pour les nationaux (40 200 FCFA pour les étrangers).</li>
          <li>Frais d'examen catégorie B (Trésor) : <strong>3 000 FCFA</strong>.</li>
          <li>Timbre fiscal : <strong>2 000 FCFA</strong>.</li>
          <li>Le permis B n'a <strong>pas de date d'expiration</strong>.</li>
          <li>Délai de délivrance : environ <strong>10 jours ouvrables</strong>.</li>
          <li>Le permis international coûte 19 000 FCFA et est valable 3 ans.</li>
        </ul>`
      }
    ]
  },

  {
    id: "signalisation",
    icon: "🚦",
    title: "La signalisation routière",
    sections: [
      {
        heading: "Les 5 grandes familles de panneaux",
        html: `<ul>
          <li><strong>Danger</strong> — triangle, bord rouge, fond blanc : annonce un risque (virage, chaussée glissante, enfants…).</li>
          <li><strong>Interdiction</strong> — cercle, bord rouge, fond blanc : interdit un comportement (dépassement, stationnement, sens interdit…).</li>
          <li><strong>Obligation</strong> — cercle bleu plein : impose un comportement (direction, piste cyclable, vitesse minimale…).</li>
          <li><strong>Priorité</strong> — formes variées (STOP octogonal rouge, triangle inversé « cédez le passage », losange jaune « route prioritaire »).</li>
          <li><strong>Indication</strong> — carré ou rectangle bleu : renseigne (parking, hôpital, sens unique…).</li>
        </ul>
        <p>Retenir la <strong>forme</strong> et la <strong>couleur</strong> permet souvent de deviner la famille d'un panneau même sans en connaître le détail exact : triangle = attention, rond rouge = interdit, rond bleu = obligatoire, carré/rectangle bleu = information.</p>`
      },
      {
        heading: "Les feux de signalisation",
        html: `<ul>
          <li><strong>Feu rouge fixe</strong> : arrêt obligatoire avant la ligne d'effet des feux ou le passage piéton.</li>
          <li><strong>Feu orange/jaune fixe</strong> : arrêt obligatoire, sauf si l'arrêt ne peut se faire en toute sécurité.</li>
          <li><strong>Feu orange clignotant</strong> : passage autorisé avec prudence, en respectant les règles de priorité normales.</li>
          <li><strong>Feu vert</strong> : passage autorisé si la voie est libre.</li>
          <li>Un <strong>agent de circulation</strong> a toujours priorité sur les feux et les panneaux.</li>
        </ul>`
      },
      {
        heading: "Le marquage au sol",
        html: `<ul>
          <li><strong>Ligne continue</strong> : infranchissable, interdiction de la chevaucher ou de la franchir (dépassement, demi-tour interdits).</li>
          <li><strong>Ligne discontinue</strong> : peut être franchie pour dépasser ou tourner si la manœuvre est sûre.</li>
          <li><strong>Ligne mixte</strong> (continue d'un côté, discontinue de l'autre) : chaque conducteur applique la règle de la ligne située de <strong>son côté</strong> du véhicule.</li>
          <li><strong>Lignes jaunes</strong> : signalisation temporaire (travaux), elles priment sur le marquage blanc habituel.</li>
        </ul>`
      }
    ]
  },

  {
    id: "priorites",
    icon: "↔️",
    title: "Les règles de priorité",
    sections: [
      {
        heading: "La règle de base : la priorité à droite",
        html: `<p>En l'absence de panneau ou de marquage indiquant le contraire, c'est la <strong>priorité à droite</strong> qui s'applique à toute intersection : le véhicule qui arrive de la droite a la priorité.</p>`
      },
      {
        heading: "Les panneaux qui changent la règle",
        html: `<ul>
          <li><strong>STOP</strong> : arrêt obligatoire à la ligne d'effet, laisser passer tous les usagers des voies abordées, puis repartir seulement si la voie est libre.</li>
          <li><strong>Cédez le passage</strong> : il faut céder le passage aux usagers des autres voies, mais un arrêt total n'est obligatoire que si c'est nécessaire pour céder cette priorité.</li>
          <li><strong>Route à caractère prioritaire</strong> (losange jaune) : les véhicules circulant sur cette route sont prioritaires sur ceux qui en sortent ou la croisent.</li>
          <li><strong>Rond-point / carrefour à sens giratoire</strong> : en général, c'est le véhicule déjà engagé <em>dans</em> l'anneau qui est prioritaire sur celui qui s'y engage, sauf signalisation contraire.</li>
        </ul>`
      },
      {
        heading: "Les priorités liées aux usagers",
        html: `<ul>
          <li>Le <strong>piéton engagé</strong> sur un passage protégé (ou qui manifeste clairement l'intention de traverser) est toujours prioritaire.</li>
          <li>Les <strong>véhicules d'intérêt général prioritaires</strong> (ambulance, pompiers, police, en intervention avec avertisseurs sonores et lumineux) ont priorité absolue : il faut leur faciliter le passage sans pour autant créer un danger pour les autres usagers.</li>
          <li>En cas de croisement difficile (route étroite, obstacle), le véhicule le plus proche d'un emplacement permettant de se croiser facilite en général le passage de l'autre.</li>
        </ul>`
      }
    ]
  },

  {
    id: "vitesse",
    icon: "⏱️",
    title: "Vitesse et distances de sécurité",
    sections: [
      {
        heading: "Limitations générales",
        html: `<ul>
          <li><strong>En agglomération</strong> : 50 km/h, sauf signalisation différente (zones 30 autour des écoles, par exemple).</li>
          <li><strong>Hors agglomération</strong>, sur route à double sens sans séparation centrale : la vitesse est encadrée par la signalisation locale (souvent 80 à 100 km/h selon la route).</li>
          <li>Sur une <strong>route à chaussées séparées</strong> (type autoroute/voie express) : vitesse plus élevée autorisée, toujours selon le panneau.</li>
          <li>Ces vitesses maximales sont <strong>abaissées en cas de pluie, brouillard ou mauvaise visibilité</strong>, et le conducteur doit de toute façon adapter sa vitesse aux conditions réelles (état de la chaussée, trafic, charge du véhicule).</li>
        </ul>`
      },
      {
        heading: "Distance de sécurité et d'arrêt",
        html: `<p>La <strong>distance d'arrêt</strong> totale se décompose en trois temps :</p>
        <ol>
          <li><strong>Distance parcourue pendant le temps de réaction</strong> (environ 1 seconde chez un conducteur attentif) ;</li>
          <li><strong>Distance de freinage</strong>, qui augmente avec le carré de la vitesse (rouler 2 fois plus vite multiplie la distance de freinage par 4, sur chaussée identique) ;</li>
          <li>La somme des deux donne la <strong>distance d'arrêt</strong>.</li>
        </ol>
        <p>La <strong>distance de sécurité</strong> entre deux véhicules qui se suivent doit permettre de s'arrêter si celui de devant freine brusquement : la règle pratique est de laisser au moins <strong>2 secondes</strong> d'intervalle (davantage par mauvais temps ou chaussée dégradée).</p>`
      }
    ]
  },

  {
    id: "alcool-fatigue",
    icon: "🚫🍺",
    title: "Alcool, stupéfiants et fatigue",
    sections: [
      {
        heading: "Alcool au volant",
        html: `<ul>
          <li>L'alcool réduit les réflexes, altère la vision (vision périphérique, appréciation des distances) et donne une <strong>fausse confiance en soi</strong> qui pousse à prendre des risques.</li>
          <li>Il existe un <strong>taux légal d'alcoolémie à ne pas dépasser</strong> pour conduire ; au-delà, le conducteur est en infraction, avec des sanctions pouvant aller jusqu'au retrait du permis selon la gravité.</li>
          <li>Le corps élimine l'alcool lentement (environ 0,10 à 0,15 g/L par heure) : ni le café, ni une douche froide, ni l'exercice n'accélèrent cette élimination.</li>
          <li>La seule façon sûre d'éviter le risque est de <strong>ne pas conduire après avoir bu</strong>, ou de désigner un conducteur qui ne consomme pas d'alcool (« capitaine de soirée »).</li>
        </ul>`
      },
      {
        heading: "Stupéfiants et médicaments",
        html: `<ul>
          <li>La conduite sous l'emprise de <strong>stupéfiants</strong> est strictement interdite, quelle que soit la quantité consommée.</li>
          <li>Certains <strong>médicaments</strong> (somnifères, certains antihistaminiques, anxiolytiques) altèrent la vigilance : il faut vérifier les pictogrammes et avis du pharmacien avant de prendre le volant.</li>
        </ul>`
      },
      {
        heading: "Fatigue et somnolence",
        html: `<ul>
          <li>La fatigue est l'une des grandes causes d'accidents, en particulier sur longs trajets ou conduite de nuit.</li>
          <li>Les premiers signes (picotements des yeux, bâillements, difficulté à rester concentré) doivent conduire à <strong>s'arrêter</strong> pour se reposer, et non à « tenir » en espérant que ça passe.</li>
          <li>Une pause de 15 à 20 minutes toutes les deux heures est recommandée sur les longs trajets.</li>
        </ul>`
      }
    ]
  },

  {
    id: "equipements",
    icon: "🧰",
    title: "Documents et équipements du véhicule",
    sections: [
      {
        heading: "Documents obligatoires à bord",
        html: `<ul>
          <li>La <strong>carte grise</strong> (certificat d'immatriculation) du véhicule.</li>
          <li>L'<strong>attestation d'assurance</strong> en cours de validité.</li>
          <li>Le <strong>permis de conduire</strong> correspondant à la catégorie du véhicule conduit.</li>
          <li>Le <strong>certificat de visite technique</strong> à jour, pour les véhicules concernés.</li>
        </ul>`
      },
      {
        heading: "Équipements de sécurité",
        html: `<ul>
          <li><strong>Ceinture de sécurité</strong> : obligatoire pour le conducteur et tous les passagers équipés d'une ceinture.</li>
          <li><strong>Casque homologué</strong> : obligatoire pour le conducteur et le passager d'une moto ou d'un cyclomoteur (très important au Bénin, pays à forte circulation de deux-roues : les zémidjans et taxis-motos).</li>
          <li><strong>Triangle de présignalisation</strong> et <strong>gilet rétro-réfléchissant</strong> : à utiliser en cas d'arrêt d'urgence ou de panne sur la chaussée, surtout de nuit ou en cas de faible visibilité.</li>
          <li><strong>Extincteur</strong> et <strong>trousse de premiers secours</strong> : recommandés, parfois obligatoires selon le type de véhicule.</li>
          <li><strong>Pneus</strong> en bon état (profondeur de sculpture suffisante) et <strong>éclairage complet et fonctionnel</strong> (feux de croisement, de route, de position, clignotants, feux stop).</li>
        </ul>`
      }
    ]
  },

  {
    id: "comportement",
    icon: "👥",
    title: "Comportement et partage de la route",
    sections: [
      {
        heading: "Les piétons",
        html: `<p>Le piéton est l'usager le plus vulnérable. Le conducteur doit <strong>ralentir et s'arrêter si nécessaire</strong> à l'approche d'un passage piéton occupé ou dès qu'un piéton manifeste clairement l'intention de traverser, même en l'absence de passage marqué.</p>`
      },
      {
        heading: "Les deux-roues (vélos, motos, zémidjans)",
        html: `<ul>
          <li>Garder une <strong>distance latérale suffisante</strong> lors d'un dépassement de cycliste ou de moto.</li>
          <li>Vérifier systématiquement les <strong>angles morts</strong> avant de changer de voie, de tourner ou de se rabattre : de nombreux accidents impliquant des motos surviennent lors de ces manœuvres.</li>
          <li>Les deux-roues doivent eux aussi respecter les règles de priorité, les feux et les limitations de vitesse comme tout autre véhicule.</li>
        </ul>`
      },
      {
        heading: "Usage du téléphone et distractions",
        html: `<p>Téléphoner, écrire un message ou manipuler un appareil en conduisant <strong>détourne l'attention</strong> et multiplie fortement le risque d'accident. L'usage d'un téléphone tenu en main au volant est interdit ; seul un dispositif mains libres limite (sans éliminer) ce risque.</p>`
      },
      {
        heading: "Transport de personnes et de charges",
        html: `<ul>
          <li>Ne jamais dépasser le <strong>nombre de places</strong> prévu par la carte grise.</li>
          <li>Arrimer correctement les charges pour éviter qu'elles ne tombent ou ne gênent la visibilité et la conduite.</li>
          <li>Respecter le <strong>poids total autorisé en charge (PTAC)</strong> du véhicule.</li>
        </ul>`
      }
    ]
  },

  {
    id: "premiers-secours",
    icon: "🚑",
    title: "Conduite à tenir en cas d'accident",
    sections: [
      {
        heading: "La méthode PAS : Protéger, Alerter, Secourir",
        html: `<ol>
          <li><strong>Protéger</strong> : sécuriser les lieux pour éviter un accident supplémentaire (feux de détresse, triangle, gilet, couper le contact des véhicules accidentés).</li>
          <li><strong>Alerter</strong> : prévenir les secours en donnant la localisation précise, le nombre de victimes et leur état apparent.</li>
          <li><strong>Secourir</strong> : porter assistance dans la limite de ses compétences, sans déplacer une victime sauf danger immédiat (incendie, risque de sur-accident).</li>
        </ol>`
      },
      {
        heading: "Ce qu'il ne faut pas faire",
        html: `<ul>
          <li>Ne pas retirer le casque d'un motard accidenté sauf absolue nécessité (risque pour la colonne vertébrale).</li>
          <li>Ne pas donner à boire ou à manger à une victime.</li>
          <li>Ne pas déplacer une victime consciente qui se plaint de douleurs, sauf danger immédiat.</li>
        </ul>`
      }
    ]
  },

  {
    id: "infractions",
    icon: "⚖️",
    title: "Infractions et sanctions",
    sections: [
      {
        heading: "Principales infractions",
        html: `<ul>
          <li>Excès de vitesse, non-respect d'un feu rouge ou d'un STOP, dépassement dangereux.</li>
          <li>Conduite sans permis valide pour la catégorie du véhicule, ou sans assurance.</li>
          <li>Conduite sous l'emprise de l'alcool ou de stupéfiants.</li>
          <li>Défaut de port de ceinture ou de casque, usage du téléphone au volant.</li>
          <li>Stationnement dangereux ou gênant (passage piéton, trottoir, double file).</li>
        </ul>`
      },
      {
        heading: "Les sanctions possibles",
        html: `<ul>
          <li><strong>Amende</strong> dont le montant varie selon la gravité de l'infraction.</li>
          <li><strong>Immobilisation</strong> du véhicule, dans certains cas.</li>
          <li><strong>Retrait temporaire ou définitif du permis</strong> pour les infractions les plus graves (alcoolémie importante, accident grave, récidive).</li>
          <li>Des <strong>peines pénales</strong> (voire l'emprisonnement) peuvent s'ajouter en cas d'accident corporel grave ou de délit de fuite.</li>
        </ul>`
      }
    ]
  },

  {
    id: "conduite-difficile",
    icon: "🌧️",
    title: "Conduire la nuit, sous la pluie ou dans le brouillard",
    sections: [
      {
        heading: "La conduite de nuit",
        html: `<ul>
          <li>La vision est réduite : on détecte un obstacle ou un piéton bien plus tard que de jour, il faut donc <strong>réduire sa vitesse</strong>.</li>
          <li>Utiliser les <strong>feux de croisement</strong> en présence d'autres véhicules ou en agglomération, et les <strong>feux de route</strong> uniquement sur route non éclairée et sans véhicule en face.</li>
          <li>Basculer immédiatement en feux de croisement en croisant un autre véhicule, pour ne pas l'éblouir.</li>
          <li>Garder le pare-brise et les phares propres : la saleté réduit fortement l'efficacité de l'éclairage et la visibilité.</li>
        </ul>`
      },
      {
        heading: "La conduite sous forte pluie",
        html: `<ul>
          <li>La chaussée mouillée augmente nettement les <strong>distances de freinage</strong> : il faut ralentir et augmenter la distance de sécurité.</li>
          <li>Le phénomène d'<strong>aquaplaning</strong> (perte d'adhérence sur une flaque d'eau à vitesse élevée) peut faire perdre le contrôle du véhicule : en cas d'aquaplaning, il faut relâcher l'accélérateur sans freiner brutalement ni donner de coup de volant.</li>
          <li>Allumer les feux de croisement, même en journée, pour être mieux vu des autres usagers.</li>
          <li>Au Bénin, les fortes pluies peuvent rapidement inonder certaines voies : il faut éviter de s'engager dans une zone d'eau dont on ne connaît pas la profondeur.</li>
        </ul>`
      },
      {
        heading: "Le brouillard ou la poussière (harmattan)",
        html: `<ul>
          <li>Réduire fortement la vitesse et augmenter la distance de sécurité, la visibilité pouvant chuter à quelques mètres.</li>
          <li>Utiliser les feux de croisement (et les feux de brouillard si le véhicule en est équipé), jamais les feux de route qui se reflètent sur le brouillard et réduisent encore la visibilité.</li>
          <li>Éviter de suivre les feux arrière du véhicule précédent pour se repérer : garder sa propre distance de sécurité.</li>
        </ul>`
      }
    ]
  },

  {
    id: "deux-roues-benin",
    icon: "🏍️",
    title: "Motos, zémidjans et transport urbain",
    sections: [
      {
        heading: "Une place centrale dans la circulation béninoise",
        html: `<p>Les motos et taxis-motos (<strong>zémidjans</strong>) représentent une part très importante de la circulation urbaine au Bénin. Qu'on soit conducteur de voiture ou de deux-roues, bien connaître les règles qui les concernent améliore la sécurité de tous.</p>`
      },
      {
        heading: "Règles spécifiques aux deux-roues",
        html: `<ul>
          <li>Le <strong>casque homologué, attaché</strong>, est obligatoire pour le conducteur et le passager.</li>
          <li>Les deux-roues doivent circuler <strong>sur la chaussée</strong>, pas sur les trottoirs réservés aux piétons.</li>
          <li>Le <strong>surnombre de passagers</strong> (plus d'un passager derrière le conducteur, selon le type d'engin) est dangereux et généralement interdit.</li>
          <li>Comme tout véhicule, une moto doit respecter les <strong>feux, les STOP et les limitations de vitesse</strong>.</li>
        </ul>`
      },
      {
        heading: "Conseils pour les conducteurs de voiture face aux deux-roues",
        html: `<ul>
          <li>Les deux-roues sont plus petits et peuvent se trouver dans un <strong>angle mort</strong> : toujours vérifier avant de tourner, dépasser ou changer de voie.</li>
          <li>Garder une <strong>distance latérale suffisante</strong> lors d'un dépassement de moto, en particulier sur chaussée dégradée où le deux-roues peut faire un écart pour éviter un nid-de-poule.</li>
          <li>Anticiper les arrêts fréquents des taxis-motos pour déposer ou prendre des clients, souvent sans signalisation préalable.</li>
        </ul>`
      },
      {
        heading: "Le transport de marchandises ou de passagers",
        html: `<ul>
          <li>Un chargement sur une moto doit être <strong>bien équilibré et attaché</strong>, sans dépasser excessivement de part et d'autre (risque de déséquilibre et de gêne pour les autres usagers).</li>
          <li>Le conducteur d'un taxi-moto reste responsable de la <strong>sécurité de son passager</strong> (casque, vitesse adaptée, prudence dans les manœuvres).</li>
        </ul>`
      }
    ]
  },

  {
    id: "environnement",
    icon: "🌱",
    title: "Éco-conduite et environnement",
    sections: [
      {
        heading: "Réduire la consommation et la pollution",
        html: `<ul>
          <li>Anticiper les ralentissements plutôt que de freiner puis réaccélérer brutalement.</li>
          <li>Rouler à un régime moteur modéré, passer les vitesses sans attendre la zone rouge.</li>
          <li>Couper le moteur lors d'un arrêt prolongé plutôt que de le laisser tourner inutilement.</li>
          <li>Vérifier régulièrement la pression des pneus et l'entretien du véhicule : un véhicule mal entretenu consomme et pollue davantage.</li>
        </ul>`
      }
    ]
  }
];

const COURS_BY_ID = {};
COURS.forEach(c => { COURS_BY_ID[c.id] = c; });
