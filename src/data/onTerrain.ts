/**
 * "Sur le terrain" — preuves d'activité (séminaires, formations, keynotes).
 *
 * Données factuelles extraites des publications LinkedIn de Stéphane FLAHAUT.
 * Pas de citations : ces cartes documentent l'activité réelle (date, lieu,
 * partenaires, partenaires nommés). Les témoignages clients sont dans
 * testimonials.ts.
 *
 * Source : table `linkedin_posts` Nexus, profil stephaneflahaut-ec2r-conseil.
 */

export interface FieldMoment {
  id: string;
  /** ISO YYYY-MM-DD */
  date: string;
  /** Année calendaire pour affichage rapide */
  year: number;
  /** Titre factuel 1 ligne — pas un slogan */
  titleFr: string;
  titleEn: string;
  /** Sous-titre : lieu / cadre / format */
  subtitleFr: string;
  subtitleEn: string;
  /** Partenaires/clients nommés dans le post */
  partners: string;
  /** Lien post LinkedIn (preuve publique) */
  postUrl: string;
  /** Engagement public au moment de la capture */
  likes: number;
  comments: number;
  /** Catégorie d'univers — sert au tri visuel */
  univers: 'expertise-comptable' | 'immobilier' | 'industrie' | 'hospitality' | 'institutionnel';
}

export const fieldMoments: FieldMoment[] = [
  {
    id: 'ceremonie-antilles-guyane-2026',
    date: '2026-04-10',
    year: 2026,
    titleFr: 'Cérémonie de remise des certificats EC²R Antilles-Guyane',
    titleEn: 'EC²R certification ceremony — French West Indies & Guyana',
    subtitleFr: 'Créole Beach Hôtel · Guadeloupe',
    subtitleEn: 'Créole Beach Hotel · Guadeloupe',
    partners: 'OEC Martinique · OEC Guadeloupe · Auditec Formation · EWAGFR',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7450466485732405248/',
    likes: 29,
    comments: 0,
    univers: 'institutionnel',
  },
  {
    id: 'mobilisation-leadership-2024-07',
    date: '2024-07-04',
    year: 2024,
    titleFr: 'Journée mobilisation : faire plus sa part',
    titleEn: 'Mobilization day: doing more of one\'s share',
    subtitleFr: 'Avec Jean-François Morin · format atelier',
    subtitleEn: 'With Jean-François Morin · workshop format',
    partners: 'Leaders d\'un collectif partenaire',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7214693403047964674/',
    likes: 41,
    comments: 0,
    univers: 'expertise-comptable',
  },
  {
    id: 'hasap-alpes-2024-07',
    date: '2024-07-19',
    year: 2024,
    titleFr: 'Sommets collectifs avec les leaders d\'HASAP',
    titleEn: 'Collective summits with HASAP leaders',
    subtitleFr: 'Séminaire · Alpes',
    subtitleEn: 'Off-site · French Alps',
    partners: 'HASAP · Agencement · Jean-François Morin',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7220032275319529473/',
    likes: 35,
    comments: 0,
    univers: 'industrie',
  },
  {
    id: 'programme-lead-2023',
    date: '2023-04-02',
    year: 2023,
    titleFr: 'Programme #LEAD en présentiel',
    titleEn: '#LEAD program — in-person session',
    subtitleFr: 'Déploiement multi-sessions',
    subtitleEn: 'Multi-session rollout',
    partners: 'Gilles Pascault · Richard Sauvêtre · Mélody Baranger · Plaseuth Petit · Sandrine Descamps',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7048334133093093376/',
    likes: 38,
    comments: 2,
    univers: 'industrie',
  },
  {
    id: 'dirigeants-laforet-2025',
    date: '2025-07-13',
    year: 2025,
    titleFr: 'Accompagnement des dirigeants Laforêt',
    titleEn: 'Coaching Laforêt executives',
    subtitleFr: 'Projet collectif · réseau franchise',
    subtitleEn: 'Collective project · franchise network',
    partners: 'Laforêt France · Florence Beaucousin · Laurent Cirelli',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7350160789279805440/',
    likes: 17,
    comments: 0,
    univers: 'immobilier',
  },
];

export const fieldMomentColors: Record<FieldMoment['univers'], string> = {
  'expertise-comptable': 'bg-blue-50 text-blue-700 border-blue-200',
  'immobilier':          'bg-green-50 text-green-700 border-green-200',
  'industrie':           'bg-surface-raised text-ink-muted border-border-strong',
  'hospitality':         'bg-purple-50 text-purple-700 border-purple-200',
  'institutionnel':      'bg-yellow-50 text-yellow-700 border-yellow-200',
};

export const fieldMomentLabels: Record<FieldMoment['univers'], { fr: string; en: string }> = {
  'expertise-comptable': { fr: 'Expertise comptable', en: 'Accounting' },
  'immobilier':          { fr: 'Immobilier · Franchise', en: 'Real Estate · Franchise' },
  'industrie':           { fr: 'Industrie · Ingénierie', en: 'Industry · Engineering' },
  'hospitality':         { fr: 'Hospitalité · Séminaires', en: 'Hospitality · Events' },
  'institutionnel':      { fr: 'Institutionnel', en: 'Institutional' },
};
