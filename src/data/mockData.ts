import {
  ArtifactSample,
  StratigraphicLayer,
  HarrisUnit,
  MuseumRecord,
  LocusRecord,
  PricingPlan,
  FAQItem,
  Testimonial,
} from '../types';

export const SAMPLE_ARTIFACTS: ArtifactSample[] = [
  {
    id: 'art-01',
    name: 'Corinthian Type ' + 'B' + ' Bronze Helmet',
    category: 'Militaria / Armor',
    period: 'Archaic Greek',
    dating: 'c. 540–510 BCE',
    culture: 'Ancient Greek / Peloponnesian',
    material: 'Cast Bronze with Chased Forehead Relief',
    dimensions: '28.4 × 21.6 × 24.8 cm (Weight: 1,420 g)',
    excavationDepth: '3.45m below datum',
    stratigraphicUnit: 'SU 108 (Votive Cache / Destruction Layer IV)',
    confidence: 98.4,
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    description: 'Complete one-piece cast bronze helmet featuring pointed cheek pieces, almond nasal guard, flared neck guard, and perimeter perforations for leather lining attachment.',
    chemicalComposition: [
      { element: 'Cu (Copper)', percentage: 87.6 },
      { element: 'Sn (Tin)', percentage: 11.2 },
      { element: 'Pb (Lead)', percentage: 0.8 },
      { element: 'Fe / Trace', percentage: 0.4 },
    ],
    typologicalParallels: [
      { title: 'Corinthian Helmet from Olympia', institution: 'Olympia Archaeological Museum', accessionNo: 'B 4211', similarity: 96.8 },
      { title: 'Archaic Bronze Helmet', institution: 'British Museum (Greek & Roman Antiquities)', accessionNo: '1824,0424.1', similarity: 94.2 },
      { title: 'Peloponnesian Bronze Armor', institution: 'Metropolitan Museum of Art', accessionNo: '1992.180.2', similarity: 92.5 },
    ],
    features: [
      'Cold-hammered brow reinforcement',
      'Micro-engraved lotus palmette above brow',
      'Combat impact deformation on left parieto-temporal plate',
      'Intact suspension rivets along interior rim'
    ],
    munsellColor: '5Y 4/4 (Olive Patina)',
  },
  {
    id: 'art-02',
    name: 'Attic Black-Figure Funerary Lekythos',
    category: 'Ceramics / Fine Ware',
    period: 'Late Archaic / Early Classical',
    dating: 'c. 490–470 BCE',
    culture: 'Attic / Workshop of the Diosphos Painter',
    material: 'Fine Attic Red Terracotta with Black Gloss & White Slip',
    dimensions: '19.2 cm H × 6.8 cm Base Ø',
    excavationDepth: '2.80m below datum',
    stratigraphicUnit: 'SU 104 (In-situ Grave Assemblage)',
    confidence: 97.8,
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    description: 'Cylindrical oil vessel decorated in black-figure technique depicting Hermes Psychopompos leading deceased hero towards Charon’s skiff with incised musculature and added white details.',
    chemicalComposition: [
      { element: 'SiO2 (Silica)', percentage: 56.4 },
      { element: 'Al2O3 (Alumina)', percentage: 22.1 },
      { element: 'Fe2O3 (Iron Oxide)', percentage: 8.9 },
      { element: 'CaO + K2O', percentage: 12.6 },
    ],
    typologicalParallels: [
      { title: 'Diosphos Painter Lekythos', institution: 'Louvre Museum (Département des Antiquités)', accessionNo: 'CA 1968', similarity: 98.1 },
      { title: 'Attic Black-Figure Oil Flask', institution: 'National Archaeological Museum of Athens', accessionNo: 'NAMA-1934', similarity: 95.3 },
    ],
    features: [
      'Triple-palmette shoulder ornament with lotus buds',
      'High-gloss iron-reduction sintering',
      'Reserved red-clay band at neck and foot juncture',
      'Secondary oil cup inner chamber intact'
    ],
    munsellColor: '2.5YR 5/8 (Fine Reddish Terracotta)',
  },
  {
    id: 'art-03',
    name: 'Roman Imperial Antoninianus (Gordian III)',
    category: 'Numismatics / Coinage',
    period: 'Crisis of the Third Century',
    dating: '241–243 CE (Rome Mint, 5th Emission)',
    culture: 'Roman Empire',
    material: 'Billon Silver (c. 42% Ag purity)',
    dimensions: '22.5 mm Ø (Weight: 4.38 g, Die Axis: 12h)',
    excavationDepth: '1.65m below datum',
    stratigraphicUnit: 'SU 103 (Forum Basilica Floor Makeup)',
    confidence: 99.2,
    imageUrl: 'https://images.unsplash.com/photo-1620027014603-5184285eef6a?auto=format&fit=crop&w=800&q=80',
    description: 'Silver Antoninianus. Obverse: IMP GORDIANVS PIVS FEL AVG radiate, draped and cuirassed bust right. Reverse: IOVI STATORI Jupiter standing facing, head right, holding scepter and thunderbolt.',
    chemicalComposition: [
      { element: 'Ag (Silver)', percentage: 41.8 },
      { element: 'Cu (Copper)', percentage: 54.7 },
      { element: 'Pb + Sn', percentage: 3.5 },
    ],
    typologicalParallels: [
      { title: 'RIC IV Gordian III 84', institution: 'Roman Imperial Coinage Catalog Online (OCRE)', accessionNo: 'ric.4.gor_iii.84', similarity: 99.6 },
      { title: 'Antoninianus Gordian III', institution: 'Cabinet des Médailles Paris', accessionNo: 'BNF-REP-1104', similarity: 97.4 },
    ],
    features: [
      'Radiate crown denoting double-denarius valuation',
      'Sharp die-strike without double-striking blur',
      'Superficial horn silver (chlorargyrite) micro-encrustation',
      'Reverse legend: IOVI STATORI'
    ],
    munsellColor: 'N 8/0 to 5Y 7/2 (Tarnished Silver Grey)',
  },
  {
    id: 'art-04',
    name: 'Late Classic Maya Carved Jadeite Pectoral Plaque',
    category: 'Lapidary / Sacred Regalia',
    period: 'Late Classic Mesoamerican',
    dating: 'c. 680–750 CE',
    culture: 'Lowland Maya (Motagua Valley Jade source)',
    material: 'Apple-Green Imperial Jadeite with Cinnabar Highlights',
    dimensions: '11.4 × 8.2 × 1.6 cm (Weight: 284 g)',
    excavationDepth: '4.20m below datum',
    stratigraphicUnit: 'SU 112 (Sub-Pyramid Dedicatory Cache)',
    confidence: 96.5,
    imageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
    description: 'Bi-facial carved jadeite plaque depicting an enthroned ruler in avian headdress holding a ceremonial bar, flanked by glyphic cartouches recording accession date.',
    chemicalComposition: [
      { element: 'NaAlSi2O6 (Jadeite Matrix)', percentage: 91.2 },
      { element: 'Cr3+ / Fe (Chromophores)', percentage: 4.1 },
      { element: 'HgS (Residual Cinnabar Pigment)', percentage: 4.7 },
    ],
    typologicalParallels: [
      { title: 'Jade Plaque of Nebaj', institution: 'Museo Nacional de Arqueología y Etnología (Guatemala)', accessionNo: 'MUNAE-J-401', similarity: 94.7 },
      { title: 'Classic Maya Jadeite Plaque', institution: 'Dumbarton Oaks Pre-Columbian Collection', accessionNo: 'PC.B.148', similarity: 93.1 },
    ],
    features: [
      'String-saw and hollow-reed drill technology evident under microscopy',
      'Four biconical suspension perforations along upper crest',
      'Intact cinnabar powder in recessed glyph outlines',
      'Spectrometric signature matches Manzanal Motagua outcrop'
    ],
    munsellColor: '5GY 6/8 (Brilliant Jade Green)',
  },
  {
    id: 'art-05',
    name: 'Mesopotamian Cuneiform Accounting Tablet',
    category: 'Epigraphy / Administrative Clay',
    period: 'Ur III Dynasty (Neo-Sumerian)',
    dating: 'c. 2040 BCE (Shulgi Year 44)',
    culture: 'Southern Mesopotamia (Umma Province)',
    material: 'Sun-baked Alluvial Clay with Reed Stylus Impressions',
    dimensions: '5.2 × 4.8 × 2.1 cm',
    excavationDepth: '3.90m below datum',
    stratigraphicUnit: 'SU 109 (Administrative Archive Room)',
    confidence: 99.0,
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    description: 'Complete six-line administrative record of barley and sheep rations distributed to weavers and temple personnel, sealed with cylinder seal of the scribe Ur-Lisi.',
    chemicalComposition: [
      { element: 'Montmorillonite Clay', percentage: 68.0 },
      { element: 'Calcite & Quartz silt', percentage: 24.5 },
      { element: 'Organic Temper / Carbon', percentage: 7.5 },
    ],
    typologicalParallels: [
      { title: 'Ur III Ration Tablet from Umma', institution: 'Cuneiform Digital Library Initiative (CDLI)', accessionNo: 'P102456', similarity: 98.9 },
      { title: 'Administrative Clay Tablet', institution: 'Penn Museum Babylonian Section', accessionNo: 'CBS 12591', similarity: 96.2 },
    ],
    features: [
      'Clear triangular reed stylus wedge imprints',
      'Counter-signed rolling of Ur-Lisi official cylinder seal',
      'Dated formula: Year Shulgi the King destroyed Simurrum and Lulubum',
      'No calcitic bloom or structural fractures'
    ],
    munsellColor: '10YR 7/3 (Pale Brown Sun-baked Clay)',
  }
];

export const STRATIGRAPHIC_LAYERS: StratigraphicLayer[] = [
  {
    id: 'layer-1',
    name: 'Layer I: Agricultural Humus & Topsoil',
    epoch: 'Modern / Post-Medieval',
    depthRange: '0.00m – 0.35m',
    depthStart: 0,
    depthEnd: 0.35,
    color: '#3f3f46',
    pattern: 'bg-zinc-800',
    soilDescription: 'Dark loose humic silty loam with modern root intrusion, plow marks, and 20th century ceramic fragments.',
    munsellCode: '10YR 3/2 (Very Dark Grayish Brown)',
    keyFindsCount: 14,
    stratigraphicUnit: 'SU 101',
    phasing: 'Phase VII (Modern Land Use)',
    artifactsInLayer: [
      { name: '19th c. Glazed Earthenware Rim', type: 'Ceramic', x: 28, y: 15, year: '1880 CE', details: 'Lead-glazed slipware' },
      { name: 'Iron Horse Nail & Horseshoe', type: 'Metal', x: 72, y: 22, year: '1850 CE', details: 'Hand-forged square shank' },
    ]
  },
  {
    id: 'layer-2',
    name: 'Layer II: Late Antique & Byzantine Rubble Fill',
    epoch: 'Byzantine / Early Medieval (550–750 CE)',
    depthRange: '0.35m – 1.15m',
    depthStart: 0.35,
    depthEnd: 1.15,
    color: '#713f12',
    pattern: 'bg-amber-950',
    soilDescription: 'Dense architectural collapse horizon; crushed limestone ashlar blocks, broken tegulae and imbrex roof tiles embedded in mortared debris.',
    munsellCode: '7.5YR 5/4 (Brown / Brick Rubble)',
    keyFindsCount: 42,
    stratigraphicUnit: 'SU 102',
    phasing: 'Phase VI (Structural Abandonment)',
    artifactsInLayer: [
      { name: 'Byzantine Follis of Justinian I', type: 'Coin', x: 45, y: 48, year: '538 CE', details: 'Large M denomination, Nicomedia mint' },
      { name: 'Stamped Roof Tile with Cross Monogram', type: 'Tile', x: 80, y: 55, year: '610 CE', details: 'Impressed in wet clay before firing' },
    ]
  },
  {
    id: 'layer-3',
    name: 'Layer III: Roman Imperial Forum Floor & Opus Caementicium',
    epoch: 'High Roman Empire (100–260 CE)',
    depthRange: '1.15m – 2.45m',
    depthStart: 1.15,
    depthEnd: 2.45,
    color: '#854d0e',
    pattern: 'bg-yellow-950',
    soilDescription: 'Hard packed hydraulic mortar bedding (opus signinum), tessellated geometric mosaic fragments, drain channels lined with terracotta pipes.',
    munsellCode: '10YR 6/4 (Light Yellowish Brown)',
    keyFindsCount: 89,
    stratigraphicUnit: 'SU 103',
    phasing: 'Phase V (Imperial Monumental Center)',
    artifactsInLayer: [
      { name: 'Antoninianus of Gordian III', type: 'Coin', x: 35, y: 165, year: '242 CE', details: 'Billon silver, pristine preservation' },
      { name: 'Terra Sigillata Bowl Base (Drag. 37)', type: 'Ceramic', x: 62, y: 190, year: '150 CE', details: 'Potter stamp: CINNAMVS retrograde' },
      { name: 'Bronze Stylus with Eraser Spatula', type: 'Bronze', x: 18, y: 220, year: '180 CE', details: 'Lathe-turned ribbed grip' },
    ]
  },
  {
    id: 'layer-4',
    name: 'Layer IV: Hellenistic Burn & Destruction Horizon',
    epoch: 'Hellenistic Period (320–146 BCE)',
    depthRange: '2.45m – 3.25m',
    depthStart: 2.45,
    depthEnd: 3.25,
    color: '#451a03',
    pattern: 'bg-stone-900',
    soilDescription: 'Intense charcoal and ash lens, heat-reddened clay floors, collapsed mudbrick walls with carbonized wooden roof beams.',
    munsellCode: '5YR 2.5/1 (Black Charcoal Matrix)',
    keyFindsCount: 67,
    stratigraphicUnit: 'SU 104',
    phasing: 'Phase IV (Siege Destruction Layer)',
    artifactsInLayer: [
      { name: 'Attic Black-Figure Lekythos', type: 'Vessel', x: 50, y: 280, year: '480 BCE', details: 'Intact funerary oil vessel' },
      { name: 'Rhodian Stamped Amphora Handle', type: 'Ceramic', x: 82, y: 305, year: '190 BCE', details: 'Eponymous priest name Aristodamos' },
      { name: 'Trilobate Bronze Arrowhead', type: 'Weapon', x: 22, y: 315, year: '215 BCE', details: 'Socketed catapult / bow bolt' },
    ]
  },
  {
    id: 'layer-5',
    name: 'Layer V: Classical & Archaic Habitation Sanctuary',
    epoch: 'Archaic to Classical Greek (600–400 BCE)',
    depthRange: '3.25m – 4.40m',
    depthStart: 3.25,
    depthEnd: 4.40,
    color: '#78350f',
    pattern: 'bg-amber-900',
    soilDescription: 'Stratified occupational floors, stone wall socles in polygonal masonry, ritual hearths containing animal bone sacrifice refuse.',
    munsellCode: '10YR 5/6 (Yellowish Brown Sandy Silt)',
    keyFindsCount: 112,
    stratigraphicUnit: 'SU 108',
    phasing: 'Phase III (Civic Sanctuary & Agora)',
    artifactsInLayer: [
      { name: 'Corinthian Type B Bronze Helmet', type: 'Armor', x: 40, y: 345, year: '520 BCE', details: 'Votive dedication with chased forehead' },
      { name: 'Protocorinthian Aryballos with Warriors', type: 'Perfume Flask', x: 68, y: 380, year: '630 BCE', details: 'Miniature polychrome frieze' },
      { name: 'Iron Spit Bundle (Obeloi)', type: 'Currency', x: 15, y: 410, year: '580 BCE', details: 'Pre-coinage wealth standard' },
    ]
  },
  {
    id: 'layer-6',
    name: 'Layer VI: Late Bronze Age / Mycenaean Settlement',
    epoch: 'Late Helladic IIIB/C (1300–1150 BCE)',
    depthRange: '4.40m – 5.40m',
    depthStart: 4.40,
    depthEnd: 5.40,
    color: '#581c87',
    pattern: 'bg-purple-950',
    soilDescription: 'Cyclopean wall foundations, bedrock storage pits (bothroi), pithoi storage vessels, plaster floor fragments with fresco paint traces.',
    munsellCode: '7.5YR 4/3 (Dark Brown Clayey Silt)',
    keyFindsCount: 53,
    stratigraphicUnit: 'SU 112',
    phasing: 'Phase II (Palatial Outpost)',
    artifactsInLayer: [
      { name: 'Mycenaean Stirrup Jar with Octopus Motif', type: 'Storage', x: 30, y: 460, year: '1250 BCE', details: 'Fine lustrous orange-red paint' },
      { name: 'Steatite Conical Seal with Lion Hunt', type: 'Glyptic', x: 75, y: 495, year: '1280 BCE', details: 'Drilled intaglio engraving' },
    ]
  },
  {
    id: 'layer-7',
    name: 'Layer VII: Sterile Geological Bedrock',
    epoch: 'Pre-Occupational Natural Marl',
    depthRange: '5.40m +',
    depthStart: 5.40,
    depthEnd: 6.50,
    color: '#27272a',
    pattern: 'bg-zinc-900',
    soilDescription: 'Natural calcarenite bedrock with karst fissures and sterile sandy limestone marl. No human cultural material.',
    munsellCode: '2.5Y 8/2 (White / Pale Yellow Marl)',
    keyFindsCount: 0,
    stratigraphicUnit: 'SU 120',
    phasing: 'Phase I (Geological Base)',
    artifactsInLayer: []
  }
];

export const HARRIS_MATRIX_DATA: HarrisUnit[] = [
  {
    id: 'su-101',
    code: 'SU 101',
    type: 'deposit',
    description: 'Modern agricultural plowzone and humus layer',
    phase: 'Phase VII (Modern)',
    above: [],
    below: ['su-102', 'su-105'],
    munsell: '10YR 3/2',
    datingEstimate: '19th–20th c. CE',
  },
  {
    id: 'su-102',
    code: 'SU 102',
    type: 'destruction',
    description: 'Byzantine structural collapse horizon with tile debris',
    phase: 'Phase VI (Late Antique)',
    above: ['su-101'],
    below: ['su-103'],
    munsell: '7.5YR 5/4',
    datingEstimate: '6th–7th c. CE',
  },
  {
    id: 'su-105',
    code: 'SU 105',
    type: 'cut',
    description: 'Medieval robber trench cut targeting Roman wall foundation',
    phase: 'Phase VI (Robber Trench)',
    above: ['su-101'],
    below: ['su-106'],
    datingEstimate: '11th c. CE',
  },
  {
    id: 'su-106',
    code: 'SU 106',
    type: 'deposit',
    description: 'Backfill of robber trench with mortar chunks and soil',
    phase: 'Phase VI',
    above: ['su-105'],
    below: ['su-107'],
    munsell: '10YR 4/3',
    datingEstimate: '11th c. CE',
  },
  {
    id: 'su-103',
    code: 'SU 103',
    type: 'surface',
    description: 'Roman Imperial Opus Signinum floor & drain channel',
    phase: 'Phase V (Roman Imperial)',
    above: ['su-102'],
    below: ['su-107', 'su-104'],
    munsell: '10YR 6/4',
    datingEstimate: '2nd–3rd c. CE',
  },
  {
    id: 'su-107',
    code: 'SU 107',
    type: 'structure',
    description: 'Ashlar masonry wall socle with opus quadratum blocks',
    phase: 'Phase V (Roman Architecture)',
    above: ['su-103', 'su-106'],
    below: ['su-108'],
    datingEstimate: '1st c. CE',
  },
  {
    id: 'su-104',
    code: 'SU 104',
    type: 'destruction',
    description: 'Hellenistic conflagration layer with heavy charcoal',
    phase: 'Phase IV (Hellenistic Destr.)',
    above: ['su-103'],
    below: ['su-108'],
    munsell: '5YR 2.5/1',
    datingEstimate: '2nd c. BCE',
  },
  {
    id: 'su-108',
    code: 'SU 108',
    type: 'deposit',
    description: 'Archaic sanctuary votive deposit and packed floor',
    phase: 'Phase III (Archaic Sanctuary)',
    above: ['su-104', 'su-107'],
    below: ['su-112'],
    munsell: '10YR 5/6',
    datingEstimate: '6th c. BCE',
  },
  {
    id: 'su-112',
    code: 'SU 112',
    type: 'structure',
    description: 'Late Bronze Age Cyclopean foundation & bedrock cache',
    phase: 'Phase II (Mycenaean/LBA)',
    above: ['su-108'],
    below: ['su-120'],
    munsell: '7.5YR 4/3',
    datingEstimate: '13th c. BCE',
  },
  {
    id: 'su-120',
    code: 'SU 120',
    type: 'surface',
    description: 'Sterile geological bedrock (natural limestone marl)',
    phase: 'Phase I (Bedrock)',
    above: ['su-112'],
    below: [],
    munsell: '2.5Y 8/2',
    datingEstimate: 'Geological Horizon',
  }
];

export const MUSEUM_RECORDS: MuseumRecord[] = [
  {
    id: 'rec-01',
    title: 'Corinthian Type Helmet with Incised Cheeks',
    museum: 'British Museum',
    location: 'London, United Kingdom',
    accessionId: 'GR 1824.0424.1',
    epoch: 'Archaic Greece (c. 525 BCE)',
    culture: 'Peloponnesian Greek',
    material: 'Hammered Bronze',
    siteDiscovered: 'Olympia Sanctuary, Greece',
    confidenceMatch: 98.4,
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    tags: ['Militaria', 'Bronze Casting', 'Archaic', 'Panhellenic']
  },
  {
    id: 'rec-02',
    title: 'Attic Red-Figure Hydria (Meidias Painter)',
    museum: 'Musée du Louvre',
    location: 'Paris, France',
    accessionId: 'Cp 1208',
    epoch: 'Classical Athens (c. 410 BCE)',
    culture: 'Attic Greek',
    material: 'Terracotta & Black Gloss',
    siteDiscovered: 'Vulci Necropolis, Etruria',
    confidenceMatch: 96.1,
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    tags: ['Vase Painting', 'Ceramics', 'Classical', 'Attic']
  },
  {
    id: 'rec-03',
    title: 'Sestertius of Trajan with Danube Bridge',
    museum: 'Metropolitan Museum of Art',
    location: 'New York, USA',
    accessionId: 'MET 08.170.82',
    epoch: 'High Roman Empire (105 CE)',
    culture: 'Imperial Rome',
    material: 'Orichalcum Brass',
    siteDiscovered: 'Rome, Forum Boarium',
    confidenceMatch: 97.9,
    imageUrl: 'https://images.unsplash.com/photo-1620027014603-5184285eef6a?auto=format&fit=crop&w=800&q=80',
    tags: ['Numismatics', 'Trajan', 'Imperial Propaganda', 'Architecture']
  },
  {
    id: 'rec-04',
    title: 'Egyptian Faience Shabti of Tutankhamun',
    museum: 'Cairo Egyptian Museum',
    location: 'Cairo, Egypt',
    accessionId: 'JE 60824',
    epoch: 'New Kingdom, 18th Dynasty (c. 1323 BCE)',
    culture: 'Ancient Egypt',
    material: 'Turquoise Egyptian Faience',
    siteDiscovered: 'Valley of the Kings (KV62)',
    confidenceMatch: 99.1,
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    tags: ['Funerary', 'Faience', '18th Dynasty', 'Pharaonic']
  },
  {
    id: 'rec-05',
    title: 'Jadeite Maskette of Sun God Kʼinich Ajaw',
    museum: 'National Museum of the American Indian',
    location: 'Washington, DC, USA',
    accessionId: 'NMAI 23/8912',
    epoch: 'Classic Maya (c. 720 CE)',
    culture: 'Maya Civilisation',
    material: 'Imperial Jadeite & Shell inlay',
    siteDiscovered: 'Palenque, Chiapas, Mexico',
    confidenceMatch: 95.8,
    imageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
    tags: ['Lapidary', 'Mesoamerica', 'Classic Maya', 'Ritual']
  },
  {
    id: 'rec-06',
    title: 'Cuneiform Foundation Cylinder of Nabonidus',
    museum: 'Pergamon Museum (Vorderasiatisches)',
    location: 'Berlin, Germany',
    accessionId: 'VA 3144',
    epoch: 'Neo-Babylonian (550 BCE)',
    culture: 'Babylonian',
    material: 'Fired Terracotta Cylinder',
    siteDiscovered: 'Sippar Sanctuary of Shamash, Iraq',
    confidenceMatch: 98.7,
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    tags: ['Epigraphy', 'Babylonia', 'Royal Inscription', 'Clay']
  }
];

export const INITIAL_LOCUS_RECORDS: LocusRecord[] = [
  {
    id: 'loc-101',
    trenchId: 'Trench IV (West Sector)',
    locusNumber: 101,
    elevationASL: 142.85,
    depthFromSurface: 0.25,
    munsellColor: '10YR 3/2 (Very Dark Grayish Brown)',
    soilTexture: 'Silty Loam with Humus and Rootlets',
    inclusions: ['Plow fragments', 'Modern glass', 'Lime flecks'],
    openedDate: '2026-08-02',
    directorNotes: 'Topsoil removal across 5x5m grid. Surface leveled for trench baseline photogrammetry.',
    associatedFindsCount: 14,
  },
  {
    id: 'loc-102',
    trenchId: 'Trench IV (West Sector)',
    locusNumber: 102,
    elevationASL: 141.90,
    depthFromSurface: 0.85,
    munsellColor: '7.5YR 5/4 (Brown Rubble)',
    soilTexture: 'Mortar-rich Compact Rubble Matrix',
    inclusions: ['Tegulae fragments', 'Limestone ashlar spalls', 'Crushed brick'],
    openedDate: '2026-08-05',
    directorNotes: 'Late antique collapse horizon. Found 1 bronze coin at locus centroid (SF-042).',
    associatedFindsCount: 42,
  },
  {
    id: 'loc-103',
    trenchId: 'Trench IV (West Sector)',
    locusNumber: 103,
    elevationASL: 140.75,
    depthFromSurface: 1.65,
    munsellColor: '10YR 6/4 (Yellowish Brown)',
    soilTexture: 'Opus Signinum hydraulic lime mortar',
    inclusions: ['Mosaic tesserae (black/white)', 'Lead drain pipe junction', 'Charcoal'],
    openedDate: '2026-08-09',
    directorNotes: 'Roman forum pavement horizon. Antoninianus coin located on surface in pristine state.',
    associatedFindsCount: 89,
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'excavation-team',
    name: 'Excavation Team',
    tagline: 'Ideal for independent research digs, PhD field projects & specialized survey teams.',
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      'Up to 500 AI Artifact Scans / month',
      'Sub-centimeter 3D Photogrammetry (up to 500 photos/model)',
      'Interactive Harris Matrix builder & Phasing',
      'Global 12M+ Museum database cross-referencing',
      'Offline field engine with automatic basecamp sync',
      'Export to standard PDF, CSV & GeoJSON logs',
      'Direct field season priority email support'
    ],
    limits: {
      scansPerMonth: '500 scans/mo',
      storage: '50 GB Encrypted Storage',
      resolution: 'High-Res 4K Meshes',
      teamMembers: 'Up to 5 Team Seats',
      exportFormats: 'PDF / CSV / GeoJSON'
    },
    ctaText: 'Request Access',
  },
  {
    id: 'expedition-pro',
    name: 'Expedition Pro',
    tagline: 'Built for active multi-trench expeditions, field schools & CRM survey directors.',
    monthlyPrice: 119,
    annualPrice: 89,
    popular: true,
    badge: 'Most Popular for Field Seasons',
    features: [
      'Unlimited AI Multi-Modal Artifact Scans',
      'Sub-centimeter 3D Photogrammetry & Trench Meshing (unlimited photos)',
      'Automated Harris Matrix calculation & Phasing AI',
      'Real-time Multi-User Trench Collaboration',
      'Total Station & RTK GPS / UTM Coordinate auto-sync',
      'Full Spectrometric & Chemical Composition estimation',
      'Journal-ready LaTeX / Word / High-Res PDF Auto-Reports',
      'Munsell Color Auto-Calibration via camera target',
      '24/7 Priority Emergency Excavation Support'
    ],
    limits: {
      scansPerMonth: 'Unlimited AI Scans',
      storage: '250 GB Cloud Storage',
      resolution: 'Sub-cm 8K Point Cloud & Mesh',
      teamMembers: 'Up to 15 Team Members',
      exportFormats: 'LaTeX / PDF / OBJ / LAS / CSV'
    },
    ctaText: 'Request Access',
  },
  {
    id: 'institution-enterprise',
    name: 'Institution & Consortia',
    tagline: 'For Universities, Heritage Ministries, National Antiquities & Major Consortia.',
    monthlyPrice: 299,
    annualPrice: 249,
    features: [
      'Everything in Expedition Pro across unlimited concurrent trenches',
      'Campus-wide student & faculty SSO authentication',
      'Custom AI Fine-Tuning on your institution’s proprietary catalogs',
      'API access for museum catalog CMS & CIDOC-CRM integration',
      'Offline private server appliance for remote desert/mountain digs',
      'UNESCO & National Heritage compliance reporting modules',
      'Dedicated field engineering specialist on call',
      'Custom SLA and archival data preservation guarantee'
    ],
    limits: {
      scansPerMonth: 'Unlimited Scans & Batch Processing',
      storage: 'Unlimited Encrypted Storage',
      resolution: 'Raw LiDAR & Photogrammetry SfM',
      teamMembers: 'Unlimited Seats',
      exportFormats: 'All Formats + CIDOC-CRM RDF'
    },
    ctaText: 'Request Access',
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How accurate is the Vovosite.pro AI Artifact Classifier?',
    answer: 'Vovosite.pro is trained on over 12 million peer-reviewed archaeological finds, museum accession records, and radiocarbon-calibrated field registers worldwide. In double-blind benchmarking tests against senior field typologists, Vovosite.pro achieved an overall 97.3% accuracy rate in identifying material composition, typological category, and chronological period across Mediterranean, Near Eastern, Mesoamerican, and European archaeological horizons.',
    category: 'accuracy'
  },
  {
    question: 'Does Vovosite.pro work in remote field sites without internet connectivity?',
    answer: 'Yes! Vovosite.pro features an Offline-First Field Engine. You can photograph artifacts, record locus sheets, tag elevation data, and preview 3D scans directly on your ruggedized field tablet or smartphone. As soon as your device reconnects to a Wi-Fi basecamp network or satellite uplink, all stratigraphic units, photo plates, and logs automatically sync and resolve version conflicts across your expedition team.',
    category: 'fieldwork'
  },
  {
    question: 'What camera equipment and drone formats are supported for 3D Trench Mapping?',
    answer: 'Vovosite.pro supports standard aerial drone imagery (DJI, Autel, Parrot, Wingtra), handheld DSLR / mirrorless cameras (Sony, Canon, Nikon), LiDAR point clouds (.LAS, .LAZ), and smartphone photogrammetry. Our Structure-from-Motion (SfM) pipeline processes RAW, TIFF, and JPEG sequences, automatically aligning RTK ground control points (GCPs) for sub-centimeter georeferencing.',
    category: 'photogrammetry'
  },
  {
    question: 'How does the Harris Matrix generator determine stratigraphic sequences?',
    answer: 'The platform uses topological sorting algorithms and graph theory combined with stratigraphic rules formulated by Dr. Edward Harris. By analyzing the vertical and physical relationships (e.g. cut, fill, seal, abut, superimposed), Vovosite.pro automatically resolves cyclic stratigraphic paradoxes, assigns chronological phases, and renders publication-ready vector matrix diagrams.',
    category: 'fieldwork'
  },
  {
    question: 'Who owns the excavation data and 3D models uploaded to Vovosite.pro?',
    answer: 'You and your sponsoring institution retain 100% full intellectual and legal ownership over all excavation datasets, 3D models, photo plates, and locus logs. Vovosite.pro enforces academic sovereignty: your unpublished field data is never used to train public models without explicit institutional consent, and all data can be exported at any time in open formats (CIDOC-CRM, GeoJSON, OBJ, CSV, LaTeX).',
    category: 'data'
  },
  {
    question: 'Can I export field reports directly into academic journal formats?',
    answer: 'Yes. Vovosite.pro includes pre-built export templates compliant with major archaeological journals and heritage bodies, including Antiquity, the American Journal of Archaeology (AJA), British Archaeological Reports (BAR), and UNESCO World Heritage dossier standards. You can generate formatted PDF, LaTeX, or DOCX publications with automated figure callouts, locus tables, and catalog plates in one click.',
    category: 'data'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Dr. Elena Rostova',
    role: 'Field Director & Associate Professor of Aegean Prehistory',
    institution: 'University of Oxford',
    location: 'Oxford, United Kingdom',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote: 'Vovosite.pro fundamentally reduced our end-of-season post-excavation backlog from six months to under three weeks. The automated Harris Matrix builder and photogrammetric trench slicing allowed our team to test stratigraphic hypotheses in real-time right at the trench edge.',
    fieldProject: 'Knossos Stratigraphic Exploration Project (Crete)',
    stat: '85% Faster',
    statLabel: 'Post-excavation cataloging speed'
  },
  {
    id: 'test-2',
    author: 'Prof. Marcus Thorne',
    role: 'Director of the Mediterranean Archaeological Survey',
    institution: 'Heidelberg University',
    location: 'Heidelberg, Germany',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    quote: 'The AI artifact classification identified rare ceramic rim profiles in seconds that previously required hours of consulting out-of-print typological monographs. It is the single most valuable digital tool our excavation has adopted in two decades.',
    fieldProject: 'Sicily Roman & Greek Coastal Survey',
    stat: '97.3%',
    statLabel: 'Typology & era identification precision'
  },
  {
    id: 'test-3',
    author: 'Dr. Sarah Chen',
    role: 'Lead Geoarchaeologist & GIS Specialist',
    institution: 'Pacific Rim Heritage Institute',
    location: 'Vancouver, Canada',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    quote: 'Being able to slice 3D photogrammetric trenches and isolate micro-stratigraphic layers while correlating RTK GPS coordinates made our excavation logging bulletproof. Our field school students picked it up in an afternoon.',
    fieldProject: 'Northwest Coastal Shell Midden Investigation',
    stat: '450+ Trenches',
    statLabel: 'Digitally mapped with sub-cm precision'
  }
];

export const INSTITUTION_LOGOS = [
  { name: 'University of Oxford', label: 'OXFORD' },
  { name: 'Heidelberg University', label: 'HEIDELBERG' },
  { name: 'National Archaeological Museum Athens', label: 'ATHENS ARCHAEOLOGY' },
  { name: 'Sorbonne Université', label: 'SORBONNE PARIS' },
  { name: 'University of Chicago Oriental Institute', label: 'CHICAGO ORIENTAL' },
  { name: 'University of Bologna', label: 'BOLOGNA 1088' },
];

export const ARTIFACT_SAMPLES = SAMPLE_ARTIFACTS;

export const PLATFORM_METRICS = [
  { value: '12.4M+', label: 'Indexed Finds', description: 'Cross-referenced against 50+ global museums' },
  { value: '97.3%', label: 'Classification Precision', description: 'Peer-reviewed on ceramic & metallurgical assemblages' },
  { value: '450+', label: 'Active Excavation Sites', description: 'Deployed in 38 countries across 5 continents' },
  { value: '< 2.4s', label: 'Neural Scan Latency', description: 'Edge-accelerated multi-pass computer vision' },
];

