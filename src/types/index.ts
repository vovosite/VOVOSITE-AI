export type ColorTheme = 'sophisticated-dark' | 'desert-bronze' | 'aegean-cobalt' | 'terracotta-slate' | 'amethyst-roman';

export interface ThemeConfig {
  id: ColorTheme;
  name: string;
  subtitle: string;
  primary: string;
  primaryHover: string;
  accent: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  heroGradient: string;
  glowClass: string;
  borderAccent: string;
  cardHighlight: string;
  ringClass: string;
  bannerBg: string;
  swatch: string;
}

export interface ArtifactSample {
  id: string;
  name: string;
  category: string;
  period: string;
  dating: string;
  culture: string;
  material: string;
  dimensions: string;
  excavationDepth: string;
  stratigraphicUnit: string;
  confidence: number;
  imageUrl: string;
  description: string;
  chemicalComposition: { element: string; percentage: number }[];
  typologicalParallels: { title: string; institution: string; accessionNo: string; similarity: number }[];
  features: string[];
  munsellColor: string;
}

export interface StratigraphicLayer {
  id: string;
  name: string;
  epoch: string;
  depthRange: string;
  depthStart: number;
  depthEnd: number;
  color: string;
  pattern: string;
  soilDescription: string;
  munsellCode: string;
  keyFindsCount: number;
  stratigraphicUnit: string;
  phasing: string;
  artifactsInLayer: {
    name: string;
    type: string;
    x: number;
    y: number;
    year: string;
    details: string;
  }[];
}

export interface HarrisUnit {
  id: string;
  code: string;
  type: 'deposit' | 'cut' | 'structure' | 'surface' | 'destruction';
  description: string;
  phase: string;
  above: string[];
  below: string[];
  contains?: string[];
  munsell?: string;
  datingEstimate?: string;
}

export interface MuseumRecord {
  id: string;
  title: string;
  museum: string;
  location: string;
  accessionId: string;
  epoch: string;
  culture: string;
  material: string;
  siteDiscovered: string;
  confidenceMatch: number;
  imageUrl: string;
  tags: string[];
}

export interface LocusRecord {
  id: string;
  trenchId: string;
  locusNumber: number;
  elevationASL: number;
  depthFromSurface: number;
  munsellColor: string;
  soilTexture: string;
  inclusions: string[];
  openedDate: string;
  directorNotes: string;
  associatedFindsCount: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  badge?: string;
  popular?: boolean;
  features: string[];
  limits: {
    scansPerMonth: string;
    storage: string;
    resolution: string;
    teamMembers: string;
    exportFormats: string;
  };
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'accuracy' | 'photogrammetry' | 'fieldwork' | 'pricing' | 'data';
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  institution: string;
  location: string;
  avatarUrl: string;
  quote: string;
  fieldProject: string;
  stat: string;
  statLabel: string;
}
