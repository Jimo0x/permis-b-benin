/* ===================================================================
   signs.js — Panneaux de signalisation routière (illustrations SVG)
   Toutes les illustrations ci-dessous sont des dessins vectoriels
   originaux (formes + pictogrammes génériques), recréés pour cette
   application à partir des descriptions officielles des catégories
   de panneaux (danger, interdiction, obligation, priorité,
   indication). Aucune image existante n'a été copiée.
   =================================================================== */

/* ---------- Gabarits de formes réutilisables ---------- */

function triangleDanger(inner) {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,6 96,92 4,92" fill="#ffffff" stroke="#d61f2c" stroke-width="7" stroke-linejoin="round"/>
    <g transform="translate(50,58)">${inner}</g>
  </svg>`;
}

function circleInterdiction(inner, fill = "#ffffff") {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="44" fill="${fill}" stroke="#d61f2c" stroke-width="8"/>
    <g transform="translate(50,50)">${inner}</g>
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
    <rect x="6" y="6" width="88" height="88" fill="#1457b0"/>
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
    <text x="50" y="62" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#ffffff" text-anchor="middle">STOP</text>
  </svg>`;
}

function invertedTriangleYield() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="4,8 96,8 50,94" fill="#ffffff" stroke="#d61f2c" stroke-width="7" stroke-linejoin="round"/>
  </svg>`;
}

function diamondPriorityRoad() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,6 94,50 50,94 6,50" fill="#ffffff" stroke="#1457b0" stroke-width="3"/>
    <polygon points="50,20 80,50 50,80 20,50" fill="#ffd400"/>
  </svg>`;
}

function diamondPriorityRight() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="18" width="64" height="64" fill="#ffd400" stroke="#1a1a1a" stroke-width="2" transform="rotate(45 50 50)"/>
    <rect x="34" y="34" width="32" height="32" fill="#1a1a1a" transform="rotate(45 50 50)"/>
  </svg>`;
}

/* ---------- Pictogrammes internes (traits simples) ---------- */

const ICON = {
  virageDroite: `<path d="M-22,24 C-22,-6 6,-24 30,-18" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/><polygon points="24,-24 36,-14 22,-6" fill="#111"/>`,
  virageGauche: `<path d="M22,24 C22,-6 -6,-24 -30,-18" fill="none" stroke="#111" stroke-width="7" stroke-linecap="round"/><polygon points="-24,-24 -36,-14 -22,-6" fill="#111"/>`,
  viragesSuccession: `<path d="M-26,22 C-26,-2 -4,-2 -4,-16 C-4,-30 18,-30 24,-18" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/>`,
  intersection: `<line x1="-26" y1="0" x2="26" y2="0" stroke="#111" stroke-width="6"/><line x1="0" y1="-26" x2="0" y2="26" stroke="#111" stroke-width="6"/>`,
  passagePieton: `<circle cx="-4" cy="-24" r="5" fill="#111"/><path d="M-4,-17 L-4,4 M-14,-6 L-4,-10 L6,-6 M-4,4 L-12,22 M-4,4 L4,22" stroke="#111" stroke-width="4" fill="none" stroke-linecap="round"/>`,
  enfants: `<circle cx="-14" cy="-20" r="5" fill="#111"/><path d="M-14,-13 L-14,6 M-14,6 L-20,22 M-14,6 L-8,22 M-14,-4 L-22,2 M-14,-4 L-6,2" stroke="#111" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="10" cy="-14" r="4" fill="#111"/><path d="M10,-9 L10,8 M10,8 L5,22 M10,8 L15,22" stroke="#111" stroke-width="3.5" fill="none" stroke-linecap="round"/>`,
  chausseeGlissante: `<path d="M-24,10 C-10,-6 10,-6 24,10" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/><path d="M-10,-8 L4,-22 M-4,-22 L10,-8" stroke="#111" stroke-width="5" fill="none" stroke-linecap="round"/>`,
  chausseeRetrecie: `<path d="M-28,24 L-6,-24 L6,-24 L28,24 M-16,0 L16,0" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"/>`,
  cassis: `<path d="M-26,18 L-10,18 L2,-18 L14,18 L26,18" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`,
  animaux: `<path d="M-6,20 L-10,-4 C-14,-18 2,-22 6,-10 L14,20 M-10,-4 L-20,-10 M6,-10 L18,-16" stroke="#111" stroke-width="4.5" fill="none" stroke-linecap="round"/>`,
  feuxTricolores: `<rect x="-10" y="-26" width="20" height="46" rx="6" fill="none" stroke="#111" stroke-width="4"/><circle cx="0" cy="-16" r="5" fill="#d61f2c"/><circle cx="0" cy="-1" r="5" fill="#111"/><circle cx="0" cy="14" r="5" fill="#111"/>`,
  travaux: `<rect x="-20" y="12" width="40" height="8" fill="#111"/><path d="M-10,12 L0,-20 L10,12 Z" fill="none" stroke="#111" stroke-width="5" stroke-linejoin="round"/>`,
  chutePierres: `<path d="M-14,-20 L0,-6 L14,-22 M-4,-2 L10,8 M-10,10 L4,20" stroke="#111" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><polygon points="-18,-26 -8,-26 -14,-16" fill="#111"/>`,

  sensInterdit: `<rect x="-30" y="-6" width="60" height="12" rx="4" fill="#ffffff"/>`,
  interditDepasser: `<circle cx="-8" cy="4" r="9" fill="none" stroke="#111" stroke-width="3"/><circle cx="12" cy="-6" r="9" fill="none" stroke="#d61f2c" stroke-width="3"/>`,
  interditTournerGauche: `<path d="M26,0 L-20,0 M-20,0 L-8,-10 M-20,0 L-8,10" stroke="#111" stroke-width="7" fill="none" stroke-linecap="round"/><line x1="-30" y1="-30" x2="30" y2="30" stroke="#d61f2c" stroke-width="7"/>`,
  stationnerInterdit: `<text x="0" y="12" font-family="Arial, sans-serif" font-size="42" font-weight="700" fill="#1457b0" text-anchor="middle">P</text>`,
  accesInterdit: ``,
  klaxonInterdit: `<path d="M-22,6 L-8,6 L6,-10 L6,22 L-8,6 Z" fill="#111"/><path d="M12,-6 C20,2 20,10 12,18" stroke="#111" stroke-width="4" fill="none" stroke-linecap="round"/>`,

  directionDroite: `<path d="M-16,0 L16,0 M16,0 L4,-12 M16,0 L4,12" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  pisteCyclable: `<circle cx="-14" cy="14" r="7" fill="none" stroke="#fff" stroke-width="4"/><circle cx="14" cy="14" r="7" fill="none" stroke="#fff" stroke-width="4"/><path d="M-14,14 L-4,-8 L10,-8 M-4,-8 L6,14 M-6,2 L12,2" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>`,
  vitesseMin: `<text x="0" y="12" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#fff" text-anchor="middle">30</text>`,

  parking: `<text x="0" y="12" font-family="Arial, sans-serif" font-size="42" font-weight="700" fill="#fff" text-anchor="middle">P</text>`,
  sensUnique: `<path d="M-26,0 L26,0 M12,-14 L26,0 L12,14" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  pietonsZone: `<circle cx="0" cy="-18" r="6" fill="#fff"/><path d="M0,-10 L0,16 M-10,0 L0,-4 L10,0 M0,16 L-8,32 M0,16 L8,32" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>`,
  hopital: `<rect x="-6" y="-24" width="12" height="48" fill="#fff"/><rect x="-24" y="-6" width="48" height="12" fill="#fff"/>`
};

/* ---------- Catalogue des panneaux ---------- */

const SIGNS = [
  { id: "danger-virage-droite", category: "danger", name: "Virage dangereux à droite", svg: triangleDanger(ICON.virageDroite) },
  { id: "danger-virage-gauche", category: "danger", name: "Virage dangereux à gauche", svg: triangleDanger(ICON.virageGauche) },
  { id: "danger-virages-succession", category: "danger", name: "Succession de virages dangereux", svg: triangleDanger(ICON.viragesSuccession) },
  { id: "danger-intersection", category: "danger", name: "Intersection où le conducteur doit céder le passage", svg: triangleDanger(ICON.intersection) },
  { id: "danger-passage-pieton", category: "danger", name: "Passage pour piétons", svg: triangleDanger(ICON.passagePieton) },
  { id: "danger-enfants", category: "danger", name: "Proximité d'une école / enfants", svg: triangleDanger(ICON.enfants) },
  { id: "danger-chaussee-glissante", category: "danger", name: "Chaussée glissante", svg: triangleDanger(ICON.chausseeGlissante) },
  { id: "danger-chaussee-retrecie", category: "danger", name: "Chaussée rétrécie", svg: triangleDanger(ICON.chausseeRetrecie) },
  { id: "danger-cassis", category: "danger", name: "Cassis, dos d'âne ou ralentisseur", svg: triangleDanger(ICON.cassis) },
  { id: "danger-animaux", category: "danger", name: "Passage d'animaux", svg: triangleDanger(ICON.animaux) },
  { id: "danger-feux", category: "danger", name: "Annonce de feux de signalisation", svg: triangleDanger(ICON.feuxTricolores) },
  { id: "danger-travaux", category: "danger", name: "Travaux sur la chaussée", svg: triangleDanger(ICON.travaux) },
  { id: "danger-chute-pierres", category: "danger", name: "Chute de pierres possible", svg: triangleDanger(ICON.chutePierres) },

  { id: "interdit-sens", category: "interdiction", name: "Sens interdit", svg: circleInterdiction(ICON.sensInterdit, "#d61f2c") },
  { id: "interdit-depasser", category: "interdiction", name: "Interdiction de dépasser", svg: circleInterdiction(ICON.interditDepasser) },
  { id: "interdit-vitesse-50", category: "interdiction", name: "Limitation de vitesse à 50 km/h", svg: circleInterdiction(`<text x="0" y="12" font-family="Arial, sans-serif" font-size="34" font-weight="700" fill="#111" text-anchor="middle">50</text>`) },
  { id: "interdit-tourner-gauche", category: "interdiction", name: "Interdiction de tourner à gauche", svg: circleInterdiction(ICON.interditTournerGauche) },
  { id: "interdit-stationner", category: "interdiction", name: "Stationnement interdit", svg: circleInterdiction(ICON.stationnerInterdit) },
  { id: "interdit-acces", category: "interdiction", name: "Accès interdit à tous véhicules", svg: circleInterdiction(ICON.accesInterdit) },
  { id: "interdit-klaxon", category: "interdiction", name: "Usage des avertisseurs sonores interdit", svg: circleInterdiction(ICON.klaxonInterdit) },

  { id: "priorite-stop", category: "priorite", name: "Arrêt obligatoire au carrefour (STOP)", svg: octagonStop() },
  { id: "priorite-cedez", category: "priorite", name: "Cédez le passage", svg: invertedTriangleYield() },
  { id: "priorite-route-prioritaire", category: "priorite", name: "Route à caractère prioritaire", svg: diamondPriorityRoad() },
  { id: "priorite-droite", category: "priorite", name: "Annonce d'une priorité à droite", svg: diamondPriorityRight() },

  { id: "obligation-direction-droite", category: "obligation", name: "Direction obligatoire à droite", svg: circleObligation(ICON.directionDroite) },
  { id: "obligation-piste-cyclable", category: "obligation", name: "Piste ou bande cyclable obligatoire", svg: circleObligation(ICON.pisteCyclable) },
  { id: "obligation-vitesse-min", category: "obligation", name: "Vitesse minimale obligatoire (30 km/h)", svg: circleObligation(ICON.vitesseMin) },

  { id: "indication-parking", category: "indication", name: "Zone de stationnement autorisé", svg: squareIndication(ICON.parking) },
  { id: "indication-sens-unique", category: "indication", name: "Voie à sens unique", svg: squareIndication(ICON.sensUnique) },
  { id: "indication-pietons-zone", category: "indication", name: "Passage pour piétons (indication)", svg: squareIndication(ICON.pietonsZone) },
  { id: "indication-hopital", category: "indication", name: "Hôpital à proximité", svg: squareIndication(ICON.hopital) }
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
