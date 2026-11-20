/* ===================================================================
   signs.js — Panneaux de signalisation routière (illustrations SVG)
   Toutes les illustrations ci-dessous sont des dessins vectoriels
   originaux (formes + pictogrammes), recréés pour cette application
   à partir des descriptions officielles des catégories de panneaux
   (danger, interdiction, obligation, priorité, indication).
   Aucune image existante n'a été copiée.
   =================================================================== */

/* ---------- Gabarits de formes réutilisables ---------- */

function triangleDanger(inner) {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,5 97,93 3,93" fill="#fffdf7" stroke="#d61f2c" stroke-width="7.5" stroke-linejoin="round"/>
    <g transform="translate(50,59)">${inner}</g>
  </svg>`;
}

function circleInterdiction(inner, fill = "#fffdf7") {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="44" fill="${fill}" stroke="#d61f2c" stroke-width="8"/>
    <g transform="translate(50,50)">${inner}</g>
  </svg>`;
}

/* Interdiction à fond bleu + barre rouge diagonale (ex: stationnement interdit) */
function circleInterdictionBlue(inner) {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="44" fill="#1457b0" stroke="#d61f2c" stroke-width="8"/>
    <g transform="translate(50,50)" fill="#ffffff" stroke="#ffffff">${inner}</g>
    <line x1="18" y1="82" x2="82" y2="18" stroke="#d61f2c" stroke-width="8" stroke-linecap="round"/>
  </svg>`;
}

function circleObligation(inner) {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" fill="#1457b0"/>
    <g transform="translate(50,50)" fill="#ffffff" stroke="#ffffff">${inner}</g>
  </svg>`;
}

function squareIndication(inner) {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="90" height="90" fill="#1457b0"/>
    <g transform="translate(50,50)" fill="#ffffff" stroke="#ffffff">${inner}</g>
  </svg>`;
}

function squareIndicationGreen(inner) {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="90" height="90" fill="#0f8a3c"/>
    <g transform="translate(50,50)" fill="#ffffff" stroke="#ffffff">${inner}</g>
  </svg>`;
}

function octagonStop() {
  const r = 46, cx = 50, cy = 50, pts = [];
  for (let i = 0; i < 8; i++) {
    const a = Math.PI / 8 + i * (Math.PI / 4);
    pts.push(`${(cx + r * Math.sin(a)).toFixed(1)},${(cy - r * Math.cos(a)).toFixed(1)}`);
  }
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="${pts.join(' ')}" fill="#d61f2c" stroke="#ffffff" stroke-width="3"/>
    <text x="50" y="61" font-family="Arial, sans-serif" font-size="25" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="1">STOP</text>
  </svg>`;
}

function invertedTriangleYield() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="3,7 97,7 50,93" fill="#fffdf7" stroke="#d61f2c" stroke-width="7.5" stroke-linejoin="round"/>
  </svg>`;
}

function diamondPriorityRoad() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,5 95,50 50,95 5,50" fill="#fffdf7" stroke="#1457b0" stroke-width="3"/>
    <polygon points="50,19 81,50 50,81 19,50" fill="#ffd400"/>
  </svg>`;
}

function diamondEndPriorityRoad() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,5 95,50 50,95 5,50" fill="#fffdf7" stroke="#1457b0" stroke-width="3"/>
    <polygon points="50,19 81,50 50,81 19,50" fill="none" stroke="#2b2b2b" stroke-width="3" stroke-dasharray="10 7"/>
    <polygon points="50,19 81,50 50,81 19,50" fill="#ffd400" opacity="0.35"/>
  </svg>`;
}

function diamondPriorityRight() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="16" width="68" height="68" fill="#ffd400" stroke="#1a1a1a" stroke-width="2" transform="rotate(45 50 50)"/>
    <rect x="32" y="32" width="36" height="36" fill="#1a1a1a" transform="rotate(45 50 50)"/>
  </svg>`;
}

function rectGate(inner) {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="92" height="92" rx="6" fill="#fffdf7" stroke="#1457b0" stroke-width="4"/>
    <g transform="translate(50,55)">${inner}</g>
  </svg>`;
}

/* ---------- Petites pièces graphiques réutilisées ---------- */

function carSilhouette(fillColor, x = 0, y = 0, scale = 1) {
  return `<g transform="translate(${x},${y}) scale(${scale})">
    <path d="M-20,8 C-20,-2 -15,-6 -8,-7 L8,-7 C15,-6 20,-2 20,8 L20,12 C20,15 17,16 14,16 L-14,16 C-17,16 -20,15 -20,12 Z"
      fill="${fillColor}"/>
    <circle cx="-11" cy="16" r="4.2" fill="#222"/>
    <circle cx="11" cy="16" r="4.2" fill="#222"/>
  </g>`;
}

function pedestrianFigure(color = "#111", x = 0, y = 0, scale = 1) {
  return `<g transform="translate(${x},${y}) scale(${scale})" fill="${color}" stroke="${color}">
    <circle cx="0" cy="-22" r="5.5" stroke="none"/>
    <path d="M0,-15 L0,8 M-11,-4 L0,-9 L11,-4 M0,8 L-9,26 M0,8 L9,26" stroke-width="4.3" fill="none" stroke-linecap="round"/>
  </g>`;
}

function truckSilhouette(color = "#111") {
  return `<g fill="${color}">
    <rect x="-24" y="-4" width="24" height="18" rx="2"/>
    <path d="M0,-4 L14,-4 L22,4 L22,14 L0,14 Z"/>
    <circle cx="-15" cy="16" r="4" fill="#fff" stroke="${color}" stroke-width="2"/>
    <circle cx="14" cy="16" r="4" fill="#fff" stroke="${color}" stroke-width="2"/>
  </g>`;
}

function motorcycleSilhouette(color = "#111") {
  return `<g stroke="${color}" fill="none" stroke-width="4" stroke-linecap="round">
    <circle cx="-14" cy="14" r="7" fill="none"/>
    <circle cx="14" cy="14" r="7" fill="none"/>
    <path d="M-14,14 L-2,-6 L10,-6 M-2,-6 L8,14 M-8,4 L14,4"/>
  </g>`;
}

/* ---------- Pictogrammes internes (traits simples, refondus) ---------- */

const ICON = {
  virageDroite: `<path d="M-24,24 C-24,-8 6,-26 32,-18" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/><polygon points="26,-25 38,-15 23,-6" fill="#111"/>`,
  virageGauche: `<path d="M24,24 C24,-8 -6,-26 -32,-18" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/><polygon points="-26,-25 -38,-15 -23,-6" fill="#111"/>`,
  viragesSuccession: `<path d="M-27,22 C-27,0 -5,0 -5,-16 C-5,-32 19,-32 25,-20" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/><polygon points="20,-27 31,-18 17,-13" fill="#111"/>`,
  virageDouble: `<path d="M-26,-20 C-4,-32 -4,-10 -26,2 C-4,14 -4,32 -26,24" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round" transform="translate(6,0)"/>`,
  intersection: `<line x1="-27" y1="0" x2="27" y2="0" stroke="#111" stroke-width="6.5"/><line x1="0" y1="-27" x2="0" y2="27" stroke="#111" stroke-width="6.5"/>`,
  passagePieton: pedestrianFigure("#111", -2, -16, 1.05) + `<rect x="-26" y="14" width="52" height="4" fill="#111"/><rect x="-26" y="22" width="52" height="4" fill="#111"/>`,
  enfants: pedestrianFigure("#111", -13, -18, 0.95) + pedestrianFigure("#111", 12, -10, 0.65),
  chausseeGlissante: carSilhouette("#111", -3, -6, 0.85) + `<path d="M-30,22 C-18,30 -10,14 2,22 C12,28 20,16 30,22" fill="none" stroke="#111" stroke-width="4.5" stroke-linecap="round"/>`,
  chausseeRetrecie: `<path d="M-30,25 L-7,-25 L7,-25 L30,25 M-17,0 L17,0" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`,
  chausseeDeformee: `<path d="M-28,18 C-20,8 -16,22 -8,10 C0,-2 4,16 12,4 C18,-4 22,8 28,2" fill="none" stroke="#111" stroke-width="5.5" stroke-linecap="round"/>`,
  cassis: `<path d="M-28,18 C-18,18 -14,-10 0,-10 C14,-10 18,18 28,18" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>`,
  animaux: `<path d="M-18,22 L-14,2 C-20,-6 -16,-18 -6,-16 C2,-14 2,-6 -4,-2 L4,8 L14,2 L22,8 L12,12 L2,20"
      fill="none" stroke="#111" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M-10,-18 L-14,-26 M-4,-19 L-2,-27" stroke="#111" stroke-width="3.2" stroke-linecap="round"/>`,
  feuxTricolores: `<rect x="-11" y="-27" width="22" height="48" rx="7" fill="none" stroke="#111" stroke-width="4"/><circle cx="0" cy="-16" r="5.4" fill="#d61f2c"/><circle cx="0" cy="-2" r="5.4" fill="#111" opacity="0.85"/><circle cx="0" cy="12" r="5.4" fill="#111" opacity="0.85"/>`,
  travaux: `<g stroke="#111" fill="#111">
      <circle cx="-6" cy="-20" r="4.6" stroke="none"/>
      <path d="M-6,-15 L-6,0 M-6,0 L-14,18 M-6,0 L4,4" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M4,4 L18,-16" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M14,-22 L22,-10" stroke-width="4" fill="none" stroke-linecap="round"/>
    </g>
    <rect x="-24" y="20" width="48" height="5" fill="#111"/>`,
  chutePierres: `<path d="M-24,22 L-2,-22 L20,22" fill="none" stroke="#111" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="10" cy="4" r="5" fill="#111"/><circle cx="18" cy="16" r="3.6" fill="#111"/>`,
  ventLateral: `<path d="M-26,-8 C-10,-14 6,-2 22,-8 M-26,4 C-8,-2 10,10 24,4 M-26,16 C-12,10 2,20 18,16" fill="none" stroke="#111" stroke-width="4.2" stroke-linecap="round"/>`,
  circulationDense: carSilhouette("#111", -16, 2, 0.6) + carSilhouette("#111", 2, 2, 0.6) + carSilhouette("#111", 19, -8, 0.6),
  passageNiveau: `<rect x="-3" y="-24" width="6" height="44" fill="#111"/><path d="M-20,-10 L20,10 M-20,10 L20,-10" stroke="#d61f2c" stroke-width="5" stroke-linecap="round"/>`,
  aeroportDanger: `<path d="M-26,6 L-4,2 L6,-16 L12,-16 L8,2 L22,0 L26,6 L8,8 L2,20 L-6,20 L-4,8 Z" fill="#111"/>`,

  sensInterdit: `<rect x="-30" y="-6" width="60" height="12" rx="4" fill="#ffffff"/>`,
  interditDepasser: carSilhouette("#111", -10, 4, 0.72) + carSilhouette("#d61f2c", 11, -6, 0.72),
  interditTournerGauche: `<path d="M26,0 L-18,0 M-18,0 L-6,-11 M-18,0 L-6,11" stroke="#111" stroke-width="7.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><line x1="-30" y1="-28" x2="30" y2="28" stroke="#d61f2c" stroke-width="7"/>`,
  interditTournerDroite: `<path d="M-26,0 L18,0 M18,0 L6,-11 M18,0 L6,11" stroke="#111" stroke-width="7.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><line x1="-30" y1="-28" x2="30" y2="28" stroke="#d61f2c" stroke-width="7"/>`,
  demiTourInterdit: `<path d="M-14,14 C-14,-10 10,-10 10,6" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/><polygon points="2,-2 16,6 2,14" fill="#111"/><line x1="-30" y1="-28" x2="30" y2="28" stroke="#d61f2c" stroke-width="7"/>`,
  stationnerInterdit: ``,
  klaxonInterdit: `<path d="M-22,6 L-8,6 L6,-10 L6,22 L-8,6 Z" fill="#111"/><path d="M12,-6 C20,2 20,10 12,18" stroke="#111" stroke-width="4" fill="none" stroke-linecap="round"/>`,
  poidsLourdInterdit: truckSilhouette("#111"),
  motoInterdit: motorcycleSilhouette("#111"),
  hauteurLimitee: `<path d="M-20,-20 L20,-20 M-20,20 L20,20 M-20,-18 L-20,18 M20,-18 L20,18" stroke="#111" stroke-width="4" fill="none"/><text x="0" y="8" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#111" text-anchor="middle">3,5m</text>`,
  poidsLimite: `<text x="0" y="10" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#111" text-anchor="middle">8t</text>`,

  directionDroite: `<path d="M-17,0 L17,0 M17,0 L5,-13 M17,0 L5,13" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  pisteCyclable: `<circle cx="-15" cy="14" r="7.5" fill="none" stroke="#fff" stroke-width="4"/><circle cx="15" cy="14" r="7.5" fill="none" stroke="#fff" stroke-width="4"/><path d="M-15,14 L-4,-9 L11,-9 M-4,-9 L7,14 M-7,2 L13,2" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="-4" cy="-16" r="4" fill="#fff"/>`,
  vitesseMin: `<text x="0" y="12" font-family="Arial, sans-serif" font-size="32" font-weight="700" fill="#fff" text-anchor="middle">30</text>`,
  rondPointObligatoire: `<g fill="none" stroke="#fff" stroke-width="5"><circle cx="0" cy="0" r="16"/><path d="M14,-10 C18,-6 18,6 14,10" stroke-linecap="round"/></g><polygon points="18,-16 24,-6 12,-6" fill="#fff"/>`,
  pietonObligatoire: pedestrianFigure("#fff", 0, -16, 1),
  voieBusObligatoire: `<rect x="-22" y="-14" width="44" height="24" rx="4" fill="none" stroke="#fff" stroke-width="4"/><text x="0" y="6" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#fff" text-anchor="middle">BUS</text>`,

  parking: `<text x="0" y="12" font-family="Arial, sans-serif" font-size="42" font-weight="700" fill="#fff" text-anchor="middle">P</text>`,
  sensUnique: `<path d="M-27,0 L27,0 M13,-14 L27,0 L13,14" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  pietonsZone: pedestrianFigure("#fff", 0, -16, 1),
  hopital: `<rect x="-6" y="-24" width="12" height="48" fill="#fff"/><rect x="-24" y="-6" width="48" height="12" fill="#fff"/>`,
  autoroute: `<path d="M-26,18 L-4,-18 L4,-18 L26,18 M-14,0 L14,0" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  finAutoroute: `<path d="M-26,18 L-4,-18 L4,-18 L26,18 M-14,0 L14,0" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/><line x1="-28" y1="22" x2="28" y2="-22" stroke="#fff" stroke-width="4"/>`,
  telephone: `<path d="M-14,-18 C-20,-6 -4,14 10,18 L16,10 L6,2 L2,8 C-4,4 -8,0 -10,-6 L-4,-10 L-10,-20 Z" fill="#fff"/>`,
  stationService: `<path d="M-14,20 L-14,-12 C-14,-16 -10,-18 -6,-18 L2,-18 C6,-18 10,-16 10,-12 L10,20" fill="none" stroke="#fff" stroke-width="4"/><path d="M10,-10 L16,-6 L16,8 C16,11 14,13 11,13" fill="none" stroke="#fff" stroke-width="3.5"/><rect x="-10" y="-2" width="12" height="10" fill="#fff"/>`,
  zemidjanIndication: motorcycleSilhouette("#fff")
};

/* ---------- Catalogue des panneaux ---------- */

const SIGNS = [
  { id: "danger-virage-droite", category: "danger", name: "Virage dangereux à droite", svg: triangleDanger(ICON.virageDroite) },
  { id: "danger-virage-gauche", category: "danger", name: "Virage dangereux à gauche", svg: triangleDanger(ICON.virageGauche) },
  { id: "danger-virages-succession", category: "danger", name: "Succession de virages dangereux", svg: triangleDanger(ICON.viragesSuccession) },
  { id: "danger-virage-double", category: "danger", name: "Double virage (S)", svg: triangleDanger(ICON.virageDouble) },
  { id: "danger-intersection", category: "danger", name: "Intersection où le conducteur doit céder le passage", svg: triangleDanger(ICON.intersection) },
  { id: "danger-passage-pieton", category: "danger", name: "Passage pour piétons", svg: triangleDanger(ICON.passagePieton) },
  { id: "danger-enfants", category: "danger", name: "Proximité d'une école / enfants", svg: triangleDanger(ICON.enfants) },
  { id: "danger-chaussee-glissante", category: "danger", name: "Chaussée glissante", svg: triangleDanger(ICON.chausseeGlissante) },
  { id: "danger-chaussee-retrecie", category: "danger", name: "Chaussée rétrécie", svg: triangleDanger(ICON.chausseeRetrecie) },
  { id: "danger-chaussee-deformee", category: "danger", name: "Chaussée déformée (nids-de-poule)", svg: triangleDanger(ICON.chausseeDeformee) },
  { id: "danger-cassis", category: "danger", name: "Cassis, dos d'âne ou ralentisseur", svg: triangleDanger(ICON.cassis) },
  { id: "danger-animaux", category: "danger", name: "Passage d'animaux", svg: triangleDanger(ICON.animaux) },
  { id: "danger-feux", category: "danger", name: "Annonce de feux de signalisation", svg: triangleDanger(ICON.feuxTricolores) },
  { id: "danger-travaux", category: "danger", name: "Travaux sur la chaussée", svg: triangleDanger(ICON.travaux) },
  { id: "danger-chute-pierres", category: "danger", name: "Chute de pierres possible", svg: triangleDanger(ICON.chutePierres) },
  { id: "danger-vent", category: "danger", name: "Vent latéral", svg: triangleDanger(ICON.ventLateral) },
  { id: "danger-circulation-dense", category: "danger", name: "Circulation dense / bouchons fréquents", svg: triangleDanger(ICON.circulationDense) },
  { id: "danger-passage-niveau", category: "danger", name: "Passage à niveau avec barrières", svg: triangleDanger(ICON.passageNiveau) },
  { id: "danger-aeroport", category: "danger", name: "Proximité d'un aérodrome", svg: triangleDanger(ICON.aeroportDanger) },

  { id: "interdit-sens", category: "interdiction", name: "Sens interdit", svg: circleInterdiction(ICON.sensInterdit, "#d61f2c") },
  { id: "interdit-depasser", category: "interdiction", name: "Interdiction de dépasser", svg: circleInterdiction(ICON.interditDepasser) },
  { id: "interdit-vitesse-50", category: "interdiction", name: "Limitation de vitesse à 50 km/h", svg: circleInterdiction(`<text x="0" y="12" font-family="Arial, sans-serif" font-size="34" font-weight="700" fill="#111" text-anchor="middle">50</text>`) },
  { id: "interdit-vitesse-30", category: "interdiction", name: "Limitation de vitesse à 30 km/h", svg: circleInterdiction(`<text x="0" y="12" font-family="Arial, sans-serif" font-size="34" font-weight="700" fill="#111" text-anchor="middle">30</text>`) },
  { id: "interdit-tourner-gauche", category: "interdiction", name: "Interdiction de tourner à gauche", svg: circleInterdiction(ICON.interditTournerGauche) },
  { id: "interdit-tourner-droite", category: "interdiction", name: "Interdiction de tourner à droite", svg: circleInterdiction(ICON.interditTournerDroite) },
  { id: "interdit-demi-tour", category: "interdiction", name: "Demi-tour interdit", svg: circleInterdiction(ICON.demiTourInterdit) },
  { id: "interdit-stationner", category: "interdiction", name: "Stationnement interdit", svg: circleInterdictionBlue(ICON.stationnerInterdit) },
  { id: "interdit-acces", category: "interdiction", name: "Accès interdit à tous véhicules", svg: circleInterdiction(ICON.accesInterdit || "") },
  { id: "interdit-klaxon", category: "interdiction", name: "Usage des avertisseurs sonores interdit", svg: circleInterdiction(ICON.klaxonInterdit) },
  { id: "interdit-poids-lourds", category: "interdiction", name: "Accès interdit aux poids lourds", svg: circleInterdiction(ICON.poidsLourdInterdit) },
  { id: "interdit-motos", category: "interdiction", name: "Accès interdit aux motos", svg: circleInterdiction(ICON.motoInterdit) },
  { id: "interdit-hauteur", category: "interdiction", name: "Hauteur limitée à 3,5 m", svg: circleInterdiction(ICON.hauteurLimitee) },
  { id: "interdit-poids", category: "interdiction", name: "Poids limité à 8 tonnes", svg: circleInterdiction(ICON.poidsLimite) },

  { id: "priorite-stop", category: "priorite", name: "Arrêt obligatoire au carrefour (STOP)", svg: octagonStop() },
  { id: "priorite-cedez", category: "priorite", name: "Cédez le passage", svg: invertedTriangleYield() },
  { id: "priorite-route-prioritaire", category: "priorite", name: "Route à caractère prioritaire", svg: diamondPriorityRoad() },
  { id: "priorite-fin-route-prioritaire", category: "priorite", name: "Fin de route à caractère prioritaire", svg: diamondEndPriorityRoad() },
  { id: "priorite-droite", category: "priorite", name: "Annonce d'une priorité à droite", svg: diamondPriorityRight() },

  { id: "obligation-direction-droite", category: "obligation", name: "Direction obligatoire à droite", svg: circleObligation(ICON.directionDroite) },
  { id: "obligation-piste-cyclable", category: "obligation", name: "Piste ou bande cyclable obligatoire", svg: circleObligation(ICON.pisteCyclable) },
  { id: "obligation-vitesse-min", category: "obligation", name: "Vitesse minimale obligatoire (30 km/h)", svg: circleObligation(ICON.vitesseMin) },
  { id: "obligation-rond-point", category: "obligation", name: "Sens giratoire obligatoire (rond-point)", svg: circleObligation(ICON.rondPointObligatoire) },
  { id: "obligation-pieton", category: "obligation", name: "Voie réservée aux piétons", svg: circleObligation(ICON.pietonObligatoire) },
  { id: "obligation-voie-bus", category: "obligation", name: "Voie réservée aux bus", svg: circleObligation(ICON.voieBusObligatoire) },

  { id: "indication-parking", category: "indication", name: "Zone de stationnement autorisé", svg: squareIndication(ICON.parking) },
  { id: "indication-sens-unique", category: "indication", name: "Voie à sens unique", svg: squareIndication(ICON.sensUnique) },
  { id: "indication-pietons-zone", category: "indication", name: "Passage pour piétons (indication)", svg: squareIndication(ICON.pietonsZone) },
  { id: "indication-hopital", category: "indication", name: "Hôpital à proximité", svg: squareIndicationGreen(ICON.hopital) },
  { id: "indication-autoroute", category: "indication", name: "Début d'autoroute", svg: squareIndicationGreen(ICON.autoroute) },
  { id: "indication-fin-autoroute", category: "indication", name: "Fin d'autoroute", svg: squareIndication(ICON.finAutoroute) },
  { id: "indication-telephone", category: "indication", name: "Poste d'appel d'urgence", svg: squareIndication(ICON.telephone) },
  { id: "indication-station-service", category: "indication", name: "Station-service", svg: squareIndication(ICON.stationService) },
  { id: "indication-zemidjan", category: "indication", name: "Zone ou voie réservée aux taxis-motos", svg: squareIndication(ICON.zemidjanIndication) }
];

const SIGNS_BY_ID = {};
SIGNS.forEach(s => { SIGNS_BY_ID[s.id] = s; });

const CATEGORY_LABELS = {
  danger: "Panneaux de danger",
  interdiction: "Panneaux d'interdiction",
  obligation: "Panneaux d'obligation",
  priorite: "Panneaux de priorité",
  indication: "Panneaux d'indication"
};
