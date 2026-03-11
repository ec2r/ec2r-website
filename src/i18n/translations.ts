export type Lang = 'fr' | 'en';

export const translations = {
  fr: {
    // Nav
    nav: {
      method: 'La Méthode',
      proof: 'Ils le vivent',
      testimonials: 'Témoignages',
      protocol: 'Le Protocole',
      practitioners: 'Les Praticiens',
      contact: 'Parlons-en',
    },

    // Hero
    hero: {
      label: 'Méthode EC²R ©',
      title1: 'Nos énergies',
      title2: 'plus collectives',
      taglinePrefix: 'pour ',
      taglines: [
        'une croissance plus responsable',
        'un changement plus réaliste',
        'des résultats plus concrets',
        'une réactivité plus collective',
      ],
      sub1: 'Pas le Netflix de la formation.',
      sub1Prefix: 'Pas le Netflix de ',
      sub1Cycling: ['la formation', 'le conseil', 'la RH', 'le co-développement', 'le management'],
      sub1b: 'Le Waze du comportement professionnel.',
      sub1bPrefix: 'Le Waze du ',
      sub1bCycling: ['comportement professionnel', 'changement', 'mobilisation collective'],
      sub2: "Un IRM+ organisationnel qui mesure les énergies collectives, identifie chirurgicalement les leviers de mobilisation et accompagne le passage à l'acte jusqu'au comportement en situation.",
      cta1: 'Découvrir la méthode',
      cta2: 'Parlons-en',
      ec2rLines: {
        e: 'Énergie',
        c1: 'Collective',
        c2cycling: ['Croissance', 'Changement', 'Comportement'],
        rCycling: ['Responsable', 'Réaliste', 'Rapide', 'Rassurant'],
      },
      situationsLabel: 'Vous le vivez, vous qui…',
      situationsHint: 'Je me sens concerné. Ça me parle. Cliquez pour voir notre réponse.',
      tabCeQuiSePasse: 'Ce qui se passe',
      tabEssaye: 'Vous avez essayé',
      tabPromesse: 'Notre promesse',
    },

    // Situations
    situations: [
      {
        accroche: "Vos équipes adhèrent parfois au changement sur le papier, mais sur le terrain, le collectif ne s'en empare pas assez vite ou ne passe pas assez vite à l'acte.",
        ceQuiSePasse: "Entre ce qui est dit en réunion de direction et ce qui se passe le lundi matin, il y a un écart. Nouveaux outils, nouveaux process, nouvelles priorités — tout le monde acquiesce. Personne ne fédère vraiment autour.",
        essaye: ["Les grands discours de rentrée", "Les séminaires de cohésion", "Les slides de vision"],
        essayeConclusion: "Ça motive un peu, ça coûte cher — mais ça ne mobilise pas.",
        reponse: "Créer un élan collectif réel autour du projet — et le faire vivre dans le quotidien.",
      },
      {
        accroche: "Certains sont experts, d'autres moins. Des niveaux d'appropriation différents, des architectures invisibles d'énergie perdue — on veut coopérer, mais on est rattrapé par les silos et les tâches sans valeur ajoutée.",
        ceQuiSePasse: "Chacun avance dans son couloir. On sait ce qu'on voudrait faire collectivement. La coopération reste une intention, pas un réflexe. Et ça, ça ne se règle pas avec un atelier.",
        essaye: ["Les ateliers transverses", "Les rituels d'équipe", "Les process de coordination"],
        essayeConclusion: "Ça améliore les relations. Mais est-ce que ça change vraiment les comportements ?",
        reponse: "Rendre visible ce qui freine — pour activer collectivement ce que vous avez déjà individuellement.",
      },
      {
        accroche: "Vous qui devez exiger+ de résultats collectivement — sans braquer certains ni risquer que l'équipe se démobilise en route.",
        ceQuiSePasse: "Vous avez le diagnostic. Vous n'avez plus 12 mois pour mettre en place le plan. Certains jouent le jeu, d'autres sont à la traîne. Et pendant ce temps, vos concurrents avancent.",
        essaye: ["Les plans à 18 mois", "Les consultants qui livrent un rapport", "Les formations de cadrage"],
        essayeConclusion: "Vous avez le constat. Vous attendez encore les comportements terrain.",
        reponse: "Progresser vite, de façon chirurgicale — du constat au comportement, sans casser la dynamique.",
      },
      {
        accroche: "Vos managers intermédiaires risquent de s'épuiser ou d'épuiser leurs équipes en passant en force face à la complexité des situations.",
        ceQuiSePasse: "Nouveaux usages de l'IA, gestion des relations, frustrations — ils sont au centre de tout. Certains font à la place. D'autres se réfugient dans leur expertise. D'autres dépensent trop d'énergie à vouloir convaincre ceux qui résistent — au risque de cristalliser les équipes.",
        essaye: ["Les formations au management", "La gestion du stress, du temps", "Le coaching individuel — devenu développement personnel", "Dans le meilleur des cas, les 360°"],
        essayeConclusion: "Ils comprennent ce qu'il faudrait faire. Rarement comment le faire avec ce collaborateur, ce lundi matin, dans ce contexte d'équipe.",
        reponse: "Combiner bienveillance et exigence. Animer au quotidien. Donner les bons repères au bon moment.",
      },
      {
        accroche: "Dans votre organisation, des énergies et des profils qui ne tirent pas toujours dans le même sens — parfois de manière silencieuse et invisible, parfois de manière très directe.",
        ceQuiSePasse: "Des contre-projets discrets. Des contributions inégales. Des profils qui risquent de bloquer le collectif — et de se propager. Vous voudriez que chacun fasse davantage sa part dans l'intérêt commun.",
        essaye: ["Les enquêtes de satisfaction", "Les baromètres QVT", "Le co-développement", "Les plans bien-être"],
        essayeConclusion: "Vous ne voulez pas rester sur le symptôme. Vous voudriez agir sur les causes.",
        reponse: "Identifier les contre-projets, traiter les freins réels — sans esquiver, sans chercher des coupables.",
      },
      {
        accroche: "Vous devez penser votre organisation en mode continu et vous assurer d'ancrer le changement dans votre nouvelle organisation managériale.",
        ceQuiSePasse: "On sait qu'on devrait mieux délivrer. Mais on cherche des solutions structurelles et comportementales — pas des coupables. Ce qu'il faut, c'est un système. Pas un énième programme.",
        essaye: ["Le tout-formation", "Le faux blended", "Les baromètres QVT qui ne se déclinent pas en actions"],
        essayeConclusion: "Vos équipes savent. Elles ne font pas encore — et on ne sait pas trop pourquoi.",
        reponse: "Mesurer, progresser, préparer le moteur collectif pour atteindre un niveau d'intensité supérieur.",
      },
      {
        accroche: "Vous avez fait des choix. Vous voulez faire évoluer votre modèle de valeur ajoutée, construire de nouvelles briques ou solutions augmentées. Mais comment leur donner vie avec vos experts ?",
        ceQuiSePasse: "Vous avez des experts métiers dépositaires de la vision. Peut-être des interlocuteurs SI. Ce qui manque : quelqu'un capable de faire le lien entre la promesse humaine et la brique technologique, et de la faire exister.",
        essaye: ["Les équipes de codeurs à briefer pendant des mois", "Les agences qui livrent sans comprendre le métier", "Les POC qui ne passent jamais en production"],
        essayeConclusion: "La vision est là. La traduction reste bloquée entre l'idée et l'acte.",
        reponse: "Luc co-construit la promesse de valeur+ avec vos experts, traduit+ en produit, et fait passer de l'idée à l'acte — en direct, avec vous.",
      },
    ],

    // Methode
    methode: {
      label: 'La méthode',
      title1: "On n'épuise pas son énergie à motiver",
      title2: 'On installe les conditions favorables pour mobiliser+',
      title3: 'Cibler+, agir+, pratiquer+, traduire+, mesurer+',
      intro: "6 énergies+ collectives. 18 batteries pour se charger. 9 niveaux. Et X comportements pour se recharger (thermomètre). Un diagnostic+ chirurgical qui vous aide à identifier en temps réel les leviers de mobilisation collective. Pas de focus uniquement sur l'individu — guider le professionnel en situation, pour l'ancrer dans la réalité de son collectif.",
      energiesTitle: 'Les 6 énergies',
      energiesSub: "Chaque énergie, un levier. Chaque levier, un passage à l'acte.",
      blocks: {
        irm: { title: 'IRM+ organisationnelle', text: "Pas un outil RH de plus. Une lecture du système vivant — la dynamique réelle du collectif, ses tensions, ses leviers, ses zones de désengagement. On part du réel pour construire la puissance, pas l'inverse." },
        mobiliser: { title: 'Mobilisé ≠ Motivé', text: "Motiver est court terme et individuel. Mobiliser est durable et collectif. L'écart devient abyssal pour le passage à l'acte. La vitesse bat la taille. La densité bat le volume. L'humain au service du collectif, pas l'inverse — pas juste un outil, une structure vivante dans une conversation." },
        methode: { title: 'Méthode+ vivante', text: "Les praticiens incarnent et adaptent la méthode. La plateforme capitalise en temps réel. L'IA est gardienne de la méthode, pas un substitut à l'humain. Chirurgical, immersif, évolutif — un écosystème de transformation comportementale." },
      },
      piliers: [
        { title: 'Granularité+ actionnable', description: "Pas un score global flou. 18 batteries, 9 niveaux chacune : on sait exactement où agir. Le diagnostic est chirurgical — pas « vos équipes manquent de cohésion », mais quel comportement, dans quelle énergie, à quel niveau." },
        { title: 'Pont diagnostic → action', description: "Le diagnostic ne reste pas sur une slide. Chaque batterie identifiée déclenche un comportement décisif, en étapes pratiques, dans votre vocabulaire métier. Du levier au comportement, du constat au passage à l'acte." },
        { title: 'Boucle complète', description: "Diagnostic collectif, profiling individuel, mentorat IA, fiches booster, suivi dans le temps. Pas un one-shot : une boucle qui accélère le passage du constat à l'action, mesurable à chaque étape." },
      ],
      energies: [
        { name: 'Projeter', qualifier: 'mobilisant', description: "Un élan collectif, une force et une voie tracée vers nos succès. Finalité désirée, valeur ajoutée collective, sens tracé." },
        { name: 'Centrer', qualifier: 'vers la réussite', description: "Tous à l'unisson pour coopérer efficacement. Attentes claires, cohérence globale, dynamique coopérative orientée résultats." },
        { name: 'Exiger', qualifier: 'avancer / résultats', description: "Une progression claire, orientée solutions, accompagnée. Responsabiliser plutôt que culpabiliser. Du constat au passage à l'acte." },
        { name: 'Fédérer', qualifier: 'coopération collective', description: "La force du collectif naît de la coopération réelle — pas d'un discours. Tensions adressées, complémentarités activées." },
        { name: 'Réguler', qualifier: 'recentrer / confiance / gouvernance', description: "Confiance diffusée, le « comment » animé, les efforts récompensés. Recentrer les énergies vers l'essentiel." },
        { name: 'Remobiliser', qualifier: 'agile / amélioration continue', description: "Animés, guidés, agiles, pour tenir la longueur. Organisation apprenante, séquençage long, amélioration continue." },
      ],
    },

    // Chiffres
    chiffres: {
      eyebrow: '5 ans · 2 jours · 1 heure — 2 méthodes éprouvées',
      stats: [
        { suffix: ' ans', label: 'de méthode éprouvée sur le terrain' },
        { suffix: '+', label: 'collectifs accompagnés' },
        { suffix: '', label: 'batteries pour se charger' },
        { suffix: '+', label: 'comportements pour se recharger' },
      ],
    },

    // Preuves
    preuves: {
      label: 'Ils le vivent',
      title1: "Ils l'ont déjà vécu,",
      title2: 'ils vous le racontent',
      intro: "Pas de promesses marketing. Des résultats concrets — les mots de nos clients depuis 5 ans. Des données mesurables. Des comportements observables. Un impact déjà+ réel.",
      wallTitle: 'Ce qu\'ils retiennent',
      wallCloudNote: 'Mur de contribution ouvert — les mots grandissent avec la méthode.',
      wallWords: {
        large: ['mobilisation', "passage à l'acte", 'collectif vivant', 'méthode vivante', 'résultats concrets'],
        medium: ['chirurgical', 'engagement réel', 'IRM organisationnel', 'co-design', 'énergie collective', 'transformation durable', 'leadership', 'comportement', 'diagnostic', 'terrain'],
        small: ['protocole', 'réaliste', 'ancrage', 'mesurable', 'humain', 'continu', 'praticien', 'boucle', 'situation', 'progrès', 'vivant', 'guidage'],
      },
      linkedinPosts: [
        {
          name: 'Directeur réseau',
          title: 'Réseau national — N°2 immobilier',
          quote: "Après les formations avec ce qui se fait de mieux en termes de management, le réseau avait eu des résultats au-dessus des autres franchises.",
          keywords: ['résultats', 'management'],
          type: 'Résultat terrain',
        },
        {
          name: 'Ancienne stagiaire AG2R',
          title: 'Vers le MEDEF Martinique — ambassadrice spontanée',
          quote: "Tu adresses le climat, pas la météo. Ce qu'on a essayé pendant un an avec des avatars IA, vous le faites avec une méthode qui tient la route.",
          keywords: ['climat', 'méthode'],
          type: 'Comparaison terrain',
        },
        {
          name: 'Cabinet accompagné',
          title: "Cabinet d'expertise comptable",
          quote: "Ce qui change, c'est qu'on ne parle plus de ressenti mais de faits. Le diagnostic est chirurgical : on sait exactement quoi adresser, dans quel ordre.",
          keywords: ['chirurgical', 'faits'],
          type: 'Diagnostic',
        },
        {
          name: 'Emmanuel ETARD',
          title: 'Gérant Laforêt · Spécialiste Immobilier',
          quote: "Ayant vu la méthode EC²R à l'œuvre, je ne peux que valider son efficacité. C'est une approche vraiment différenciante et impactante.",
          keywords: ['efficacité', 'différenciante'],
          type: 'Validation terrain',
        },
        {
          name: 'Valérie-Anne LAUHON',
          title: 'Présidente de l\'Ordre des EC Martinique',
          quote: "Ta bienveillance, ton énergie et ton regard éclairant sur le leadership nous ont tous boostés. Un vrai temps fort, humain, sincère et porteur de sens.",
          keywords: ['leadership', 'sens'],
          type: 'Institutionnel',
        },
      ],
      trajTitle: 'Performance et mobilisation',
      trajSub: 'Vidéos de la trajectoire EC²R — 5 ans de terrain documentés.',
      museeTitle: '5 ans, 2 jours, 2 mois de terrain — notre petit musée augmenté',
      museeSub: "Des premiers séminaires au déploiement multi-sites en national. Des slides originels qui font peur au protocole augmenté par l'IA. Chaque année a été un point de rupture — on essaye, on expérimente, on traduit, on améliore, on affine, on grandit.",
      museeTimeline: [
        { year: '2021', label: 'Genèse', sub: 'Les premiers séminaires. On naît.' },
        { year: '2022', label: 'Terrain', sub: 'Premiers déploiements. On tâtonne.' },
        { year: '2023', label: 'Formalisation', sub: 'On améliore, on sanctuarise. On diffuse.' },
        { year: '2024', label: 'Diffusion', sub: 'Les référents apparaissent. Ça prend.' },
        { year: '2025', label: 'Augmentation', sub: "L'IA entre dans la boucle. Du savoir-faire au faire-savoir." },
        { year: '2026', label: '…', sub: 'Ce site — mise en abyme. On expérimente en direct.' },
      ],
    },

    // Protocole
    protocole: {
      label: 'Le protocole augmenté',
      title1: 'Du levier au comportement.',
      title2: "Du constat au passage à l'acte",
      intro: "Mesurer l'énergie collective pour cibler. Prioriser ensemble les axes. Identifier les profils de leadership. Accompagner le passage à l'acte jusqu'au comportement en situation.",
      irmTitle: 'Votre IRM collectif+ organisationnel',
      irmSub: 'Un baromètre qui révèle la dynamique réelle',
      irmSteps: [
        { title: 'Mesurer', text: 'Votre énergie collective → cibler les leviers' },
        { title: 'Prioriser', text: 'Ensemble, les axes sur lesquels agir' },
        { title: 'Identifier', text: 'Le profil de vos leaders → comment agir' },
        { title: 'Restituer', text: "Journée de restitution → faire vivre, s'entraîner sur situations métiers" },
        { title: 'Ancrer', text: 'Pratiquer dans son quotidien métier → ancrer le changement' },
      ],
      parcours: [
        { title: 'Partir du collectif', text: "Vous voulez partir du collectif pour accélérer le passage individuel. Le baromètre des énergies révèle la dynamique réelle, puis chaque profil s'affine.", steps: ['Baromètre', 'Profil Leader', 'Mentor IA'] },
        { title: 'Partir de vos leaders', text: "Vous voulez partir de vos leaders pour accélérer le passage collectif. Le profil individuel éclaire d'abord, puis le baromètre collectif amplifie.", steps: ['Profil Leader', 'Mentor IA', 'Baromètre'] },
        { title: 'Expérimenter, avancer seul', text: "Vous voulez expérimenter et avancer à votre rythme. Le Mentor IA EC²R vous guide dans la découverte de la méthode, sans engagement collectif immédiat.", steps: ['Mentor IA EC²R', 'Profil', 'À votre rythme'] },
      ],
      abyme: {
        label: 'Mise en abyme',
        title: 'Ce site documente sa propre construction.',
        text1: "Nous avons utilisé la puissance dirigée de l'IA pour partir du réel et définir notre valeur ajoutée. Des années de collectifs accompagnés, des centaines de données terrain — traduits en expérience augmentée. Ce site n'est pas un résultat figé, mais l'illustration du processus vivant de la méthode.",
        text2: "Pas montrer le processus — documenter et améliorer constamment. On essaye, on expérimente, on traduit, on améliore, on affine, on grandit. C'est ça l'approche EC²R.",
        steps: [
          { title: 'Partir du réel', text: "Interviews ciblées, données, observations en situation — pas de promesse marketing." },
          { title: 'Identifier chirurgicalement', text: "La méthode EC²R structure et croise les retours. Chaque affirmation adossée à une preuve ou à un croisement de données." },
          { title: "Construire le passage à l'acte", text: "Compétences EC²R + IA pour accélérer la formalisation. Brief → livrable." },
          { title: 'Documenter le vivant', text: "Ce site ne se veut pas comme un objet figé, mais comme une illustration du processus vivant — la trajectoire de mobilisation, pas juste les résultats." },
        ],
      },
    },

    // Contact
    contact: {
      label: 'Parlons-en',
      title1: 'Un échange rapide,',
      title2: 'pas un pitch.',
      intro: "Pas un pitch. Pas un formulaire commercial. Pas un agent conversationnel. Un vrai échange avec un humain pendant 10 minutes — pour voir si et comment ça résonne dans votre organisation.",
      cardYes: { title: 'Vous avez un projet et vous voulez co-construire ?', text: "Vous avez un projet avec la capacité à le traduire sur des choses impactantes. Pas juste un budget — un passage à l'acte.", cta: 'Pensez à nous →' },
      cardNo: { title: "D'abord le projet, pas le budget", text: "On peut être intelligent pour trouver les solutions de financement. Mais ce qui nous intéresse, c'est d'abord votre projet. La plateforme est là pour vous aider autour d'un résultat — pas d'un budget.", cta: 'Parlons d\'abord du projet →' },
      checks: ["Il y a un protocole pour « en être » — pas ouvert à tous", "Toujours un interlocuteur EC²R avant engagement", "10 minutes en visio — si ça résonne, on expérimente et on fait vivre ça pour vous", "La différence entre gagner et avoir raison"],
      booking: { title: 'Réserver un créneau', sub: '10 min, pas de pitch, juste une conversation.', cta: 'Choisir un créneau', note: 'Connexion agenda à venir — en attendant, écrivez-nous.' },
      quote: "« Si vous voulez nous copier, oubliez-nous. La méthode a dépassé l'homme — elle est auto-entretenue et évolutive. Ce sont les artistes et ceux qui ont une méthode en propre qui réussissent. »",
      form: { name: 'Nom', namePlaceholder: 'Votre nom', email: 'Email', situation: 'Votre situation', situationDefault: 'Choisir...', situationOptions: ['Vous voulez qu\'on échange 10 min en visio', 'Vous voulez nous prescrire ou recommander', 'Vous voulez expérimenter le protocole', 'Vous voulez démarrer un accompagnement'], referral: 'Qui vous en a parlé ?', referralPlaceholder: 'Nom de la personne ou contexte', message: 'Message', messagePlaceholder: 'Ce qui vous amène, votre contexte...', consent: "J'accepte que mes données soient traitées par EC²R Conseil pour répondre à ma demande, conformément à la", consentLink: 'politique de confidentialité', submit: 'Engager la conversation', note: 'Nous répondons personnellement. Pas d\'auto-répondeur.' },
    },

    // Equipe
    equipe: {
      label: 'Les praticiens',
      title1: 'Des gens qui passent',
      title2: 'à l\'acte.',
      intro: "Pas des consultants interchangeables. Des professionnels et des humains qui ont expérimenté, qui croient à la différenciation de la méthode, et qui vous aident à la faire vivre et la traduire dans votre quotidien métier.",
      portraitPlaceholder: 'Portrait à ajouter',
      fieldTitle: 'Sur le terrain',
      fieldNote: 'Photos des séminaires et ateliers à intégrer.',
      founders: [
        {
          role: 'Fondateur de la méthode EC²R — Cofondateur EC²R Conseil',
          bio: "Porte et incarne la méthode EC²R depuis plus de 5 ans. Accompagne des collectifs vers la performance depuis plus de 20 ans. Assure l'amélioration continue de la méthode — garant, avec l'IA, de son intégrité et de son développement.",
        },
        {
          role: 'Co-design Méthode × Technologie — À la genèse du protocole augmenté',
          bio: "Passe de l'idéation à la situation. Co-construit la promesse de valeur+ avec vos experts métiers, traduit+ en produit, et fait passer de l'idée à l'acte — en direct, avec vous.",
        },
      ],
      team: [
        {
          role: 'Cofondateur EC²R Conseil — Associé de la méthode EC²R',
          bio: "Entraîneur d'entraîneurs et de sportifs professionnels et champions. Ancrage terrain et transmission. Associé depuis les origines.",
        },
        {
          role: 'Associé EC²R Conseil — Expert & Prescripteur',
          bio: "Expert en profilage comportemental. Fondateur du Groupe Alar. Accompagne les organisations dans le déploiement opérationnel et la mise en acte.",
        },
        {
          role: 'Facilitatrice EC²R — Logistique, équipe, déploiement',
          bio: "Anime la logistique des déploiements et la coordination des équipes. Facilite les débriefs individuels sur les profils de leadership.",
        },
        {
          role: 'Associé EC²R Conseil — Praticien EC²R',
          bio: 'Place réservée — profil en cours d\'intégration.',
        },
      ],
      seminaireTitles: [
        'Séminaire Label Antilles',
        'CROEC Martinique',
        'Formation Laforêt',
        'Atelier collectif',
      ],
    },

    // Preuves (données statiques non traduisibles via data-attrs)
    videos: [
      { title: 'Regards croisés Ep.1', subtitle: 'Mobilisons nos énergies vers la performance', description: 'Avec Vincent Clarico, recordman du monde et entraîneur Équipe de France.' },
      { title: 'Regards croisés Ep.2', subtitle: 'REMOBILISER ses énergies', description: 'Avec Marie-Laure Brunet, double médaillée olympique de biathlon.' },
    ],
    museeLabel: 'Trajectoire',

    // Footer
    footer: {
      address: '',
      legal: 'Mentions légales',
      privacy: 'Politique de confidentialité',
    },
  },

  en: {
    nav: {
      method: 'The Method',
      proof: 'They live it',
      testimonials: 'Testimonials',
      protocol: 'The Protocol',
      practitioners: 'Practitioners',
      contact: "Let's talk",
    },

    hero: {
      label: 'EC²R Method ©',
      title1: 'Our energies',
      title2: 'more collective',
      taglinePrefix: 'for ',
      taglines: [
        'more responsible growth',
        'more realistic change',
        'more concrete results',
        'more collective reactivity',
      ],
      sub1: 'Not the Netflix of training.',
      sub1Prefix: 'Not the Netflix of ',
      sub1Cycling: ['training', 'consulting', 'HR', 'co-development', 'management'],
      sub1b: 'The Waze of professional behaviour.',
      sub1bPrefix: 'The Waze of ',
      sub1bCycling: ['professional behaviour', 'change', 'collective mobilisation'],
      sub2: "An organisational MRI+ that measures collective energies, surgically identifies mobilisation levers and supports action through to behaviour in situation.",
      cta1: 'Discover the method',
      cta2: "Let's talk",
      ec2rLines: {
        e: 'Energy',
        c1: 'Collective',
        c2cycling: ['Growth', 'Change', 'Behaviour'],
        rCycling: ['Responsible', 'Realistic', 'Rapid', 'Reassuring'],
      },
      situationsLabel: 'You live it, you who…',
      situationsHint: 'I feel concerned. It speaks to me. Click to see our response.',
      tabCeQuiSePasse: "What's happening",
      tabEssaye: "What you've tried",
      tabPromesse: 'Our promise',
    },

    situations: [
      {
        accroche: "Your teams sometimes agree to change on paper, but on the ground, the collective isn't moving fast enough or taking action quickly enough.",
        ceQuiSePasse: "Between what's said in leadership meetings and what happens on Monday morning, there's a gap. New tools, new processes, new priorities — everyone nods. Nobody truly rallies around them.",
        essaye: ["Big kick-off speeches", "Team cohesion seminars", "Vision slides"],
        essayeConclusion: "It motivates briefly, costs a lot — but it doesn't mobilise.",
        reponse: "Build a real collective momentum around the project — and keep it alive day to day.",
      },
      {
        accroche: "Some are experts, others less so. Different levels of ownership, invisible architectures of wasted energy — you want to cooperate, but you're caught up in silos and low-value tasks.",
        ceQuiSePasse: "Everyone advances in their own lane. You know what you'd like to do collectively. Cooperation remains an intention, not a reflex. And that can't be fixed with a workshop.",
        essaye: ["Cross-functional workshops", "Team rituals", "Coordination processes"],
        essayeConclusion: "It improves relationships. But does it really change behaviours?",
        reponse: "Make what's blocking visible — to activate collectively what you already have individually.",
      },
      {
        accroche: "You who need to demand+ results collectively — without alienating some or risking the team demobilising along the way.",
        ceQuiSePasse: "You have the diagnosis. You no longer have 12 months to roll out the plan. Some are on board, others are lagging. Meanwhile, your competitors are moving.",
        essaye: ["18-month roadmaps", "Consultants delivering reports", "Scoping workshops"],
        essayeConclusion: "You have the findings. You're still waiting for the behaviours.",
        reponse: "Move fast, surgically — from diagnosis to behaviour, without breaking the dynamic.",
      },
      {
        accroche: "Your middle managers risk burning out or burning out their teams by pushing too hard through the complexity of situations.",
        ceQuiSePasse: "New AI uses, relationship management, frustrations — they're at the centre of it all. Some do things instead of others. Others retreat into their expertise. Others spend too much energy trying to convince those who resist — at the risk of crystallising the teams.",
        essaye: ["Management training", "Stress and time management", "Individual coaching — now basically personal development", "At best, 360° feedback"],
        essayeConclusion: "They understand what should be done. Rarely how to do it with that person, that Monday morning, in that team context.",
        reponse: "Combine care and demand. Lead day to day. Give the right markers at the right moment.",
      },
      {
        accroche: "In your organisation, energies and profiles not always pulling in the same direction — sometimes silently and invisibly, sometimes very directly.",
        ceQuiSePasse: "Quiet counter-projects. Unequal contributions. Profiles that risk blocking the collective — and spreading. You'd like everyone to do more of their part for the common good.",
        essaye: ["Satisfaction surveys", "QWL barometers", "Co-development", "Wellbeing plans"],
        essayeConclusion: "You don't want to stay at the symptom level. You want to act on the causes.",
        reponse: "Identify counter-projects, address real blockers — without avoiding them, without looking for scapegoats.",
      },
      {
        accroche: "You need to think your organisation in continuous mode and ensure the change is anchored in your new managerial structure.",
        ceQuiSePasse: "You know you should be delivering better. But you're looking for structural and behavioural solutions — not culprits. What's needed is a system. Not another programme.",
        essaye: ["All-in training", "Fake blended learning", "QWL barometers that don't translate into actions"],
        essayeConclusion: "Your teams know. They're not yet doing — and no one quite knows why.",
        reponse: "Measure, progress, prime the collective engine to reach a higher level of intensity.",
      },
      {
        accroche: "You've made your choices. You want to evolve your added value model, build new augmented bricks or solutions. But how do you bring them to life with your experts?",
        ceQuiSePasse: "You have domain experts who hold the vision. Perhaps IT stakeholders too. What's missing: someone able to bridge the human promise and the technology layer, and make it real.",
        essaye: ["Dev teams to brief for months", "Agencies that deliver without understanding the business", "POCs that never reach production"],
        essayeConclusion: "The vision is there. The translation is stuck between idea and action.",
        reponse: "Luc co-builds the value promise+ with your experts, translates+ it into product, and moves from idea to action — directly, with you.",
      },
    ],

    methode: {
      label: 'The method',
      title1: "We don't exhaust energy trying to motivate",
      title2: 'We install the favourable conditions to mobilise+',
      title3: 'Target+, act+, practise+, translate+, measure+',
      intro: "6 collective energies+. 18 batteries to charge. 9 levels. And X behaviours to recharge (thermometer). A surgical+ diagnosis helping you identify collective mobilisation levers in real time. Not just individual focus — guiding the professional in situation, grounded in their collective reality.",
      energiesTitle: 'The 6 energies',
      energiesSub: 'Each energy, a lever. Each lever, a path to action.',
      blocks: {
        irm: { title: 'Organisational MRI+', text: "Not just another HR tool. A reading of the living system — the real collective dynamic, its tensions, levers, and disengagement zones. We start from reality to build strength, not the other way around." },
        mobiliser: { title: 'Mobilised ≠ Motivated', text: "Motivation is short-term and individual. Mobilisation is durable and collective. The gap becomes enormous for moving to action. Speed beats size. Density beats volume. Humans serving the collective, not the reverse — not just a tool, a living structure in conversation." },
        methode: { title: 'Living Method+', text: "Practitioners embody and adapt the method. The platform captures learning in real time. AI is the guardian of the method, not a substitute for humans. Surgical, immersive, evolving — a behavioural transformation ecosystem." },
      },
      piliers: [
        { title: 'Actionable+ granularity', description: "Not a vague global score. 18 batteries, 9 levels each: we know exactly where to act. The diagnosis is surgical — not 'your teams lack cohesion', but which behaviour, in which energy, at which level." },
        { title: 'Diagnosis → action bridge', description: "The diagnosis doesn't stay on a slide. Each identified battery triggers a decisive behaviour, in practical steps, in your business vocabulary. From lever to behaviour, from finding to action." },
        { title: 'Complete loop', description: "Collective diagnosis, individual profiling, AI mentoring, booster sheets, ongoing tracking. Not a one-shot: a loop that accelerates the move from insight to action, measurable at every step." },
      ],
      energies: [
        { name: 'Project', qualifier: 'mobilising', description: "A collective momentum, a force and a path traced towards our successes. Desired purpose, collective added value, clear direction." },
        { name: 'Focus', qualifier: 'towards success', description: "All in unison to cooperate effectively. Clear expectations, global coherence, results-oriented cooperative dynamic." },
        { name: 'Demand', qualifier: 'progress / results', description: "Clear progression, solution-oriented, supported. Empower rather than blame. From insight to action." },
        { name: 'Unite', qualifier: 'collective cooperation', description: "Collective strength comes from real cooperation — not speeches. Tensions addressed, complementarities activated." },
        { name: 'Regulate', qualifier: 'refocus / trust / governance', description: "Trust diffused, 'how' explained, efforts rewarded. Refocus energies on what matters." },
        { name: 'Remobilise', qualifier: 'agile / continuous improvement', description: "Animated, guided, agile, for the long run. Learning organisation, long sequencing, continuous improvement." },
      ],
    },

    chiffres: {
      eyebrow: '5 years · 2 days · 1 hour — 2 proven methods',
      stats: [
        { suffix: ' years', label: 'of method proven in the field' },
        { suffix: '+', label: 'collectives supported' },
        { suffix: '', label: 'batteries to charge' },
        { suffix: '+', label: 'behaviours to recharge' },
      ],
    },

    preuves: {
      label: 'They live it',
      title1: "They've already lived it,",
      title2: 'they tell you about it',
      intro: "No marketing promises. Concrete results — client words from 5 years. Measurable data. Observable behaviours. An already+ real impact.",
      wallTitle: 'What they remember',
      wallCloudNote: 'Open contribution wall — words grow with the method.',
      wallWords: {
        large: ['mobilisation', 'moving to action', 'living collective', 'living method', 'concrete results'],
        medium: ['surgical', 'real engagement', 'organisational MRI', 'co-design', 'collective energy', 'lasting transformation', 'leadership', 'behaviour', 'diagnosis', 'field'],
        small: ['protocol', 'realistic', 'grounding', 'measurable', 'human', 'continuous', 'practitioner', 'loop', 'situation', 'progress', 'living', 'guidance'],
      },
      linkedinPosts: [
        {
          name: 'Network Director',
          title: 'National network — #2 real estate',
          quote: "After the training with the best management practices available, the network achieved results above other franchises.",
          keywords: ['results', 'management'],
          type: 'Field result',
        },
        {
          name: 'Former AG2R intern',
          title: 'MEDEF Martinique — spontaneous ambassador',
          quote: "You address the climate, not the weather. What we tried for a year with AI avatars, you do with a method that holds up.",
          keywords: ['climate', 'method'],
          type: 'Field comparison',
        },
        {
          name: 'Accompanied firm',
          title: 'Accounting firm',
          quote: "What changes is that we no longer talk about feelings but facts. The diagnosis is surgical: we know exactly what to address, in what order.",
          keywords: ['surgical', 'facts'],
          type: 'Diagnosis',
        },
        {
          name: 'Emmanuel ETARD',
          title: 'Laforêt Owner · Real Estate Specialist',
          quote: "Having seen the EC²R method in action, I can only confirm its effectiveness. It's a truly differentiating and impactful approach.",
          keywords: ['effectiveness', 'differentiating'],
          type: 'Field validation',
        },
        {
          name: 'Valérie-Anne LAUHON',
          title: 'President, Martinique Chartered Accountants',
          quote: "Your kindness, energy and insightful take on leadership boosted us all. A truly meaningful, authentic and human milestone.",
          keywords: ['leadership', 'meaning'],
          type: 'Institutional',
        },
      ],
      trajTitle: 'Performance and mobilisation',
      trajSub: 'EC²R trajectory videos — 5 years of field work documented.',
      museeTitle: '5 years, 2 days, 2 months in the field — our augmented little museum',
      museeSub: "From first seminars to multi-site national deployments. From original slides to AI-augmented protocols. Each year was a turning point — we try, experiment, translate, improve, refine, grow.",
      museeTimeline: [
        { year: '2021', label: 'Genesis', sub: 'The first seminars. We begin.' },
        { year: '2022', label: 'Field', sub: 'First deployments. We explore.' },
        { year: '2023', label: 'Formalisation', sub: 'We improve, we formalise. We spread.' },
        { year: '2024', label: 'Diffusion', sub: 'Referents emerge. It takes hold.' },
        { year: '2025', label: 'Augmentation', sub: "AI enters the loop. From know-how to show-how." },
        { year: '2026', label: '…', sub: 'This site — mise en abyme. We experiment live.' },
      ],
    },

    protocole: {
      label: 'The augmented protocol',
      title1: 'From lever to behaviour.',
      title2: 'From insight to action',
      intro: "Measure collective energy to target. Prioritise axes together. Identify leadership profiles. Support action through to behaviour in situation.",
      irmTitle: 'Your collective+ organisational MRI',
      irmSub: 'A barometer that reveals the real dynamic',
      irmSteps: [
        { title: 'Measure', text: 'Your collective energy → target the levers' },
        { title: 'Prioritise', text: 'Together, the axes to act on' },
        { title: 'Identify', text: 'Your leaders\' profiles → how to act' },
        { title: 'Deliver', text: 'Restitution day → bring it to life, train on business situations' },
        { title: 'Anchor', text: 'Practise in daily business → anchor the change' },
      ],
      parcours: [
        { title: 'Start from the collective', text: "You want to start from the collective to accelerate individual progress. The energy barometer reveals the real dynamic, then each profile is refined.", steps: ['Barometer', 'Leader Profile', 'AI Mentor'] },
        { title: 'Start from your leaders', text: "You want to start from your leaders to accelerate the collective shift. The individual profile illuminates first, then the collective barometer amplifies.", steps: ['Leader Profile', 'AI Mentor', 'Barometer'] },
        { title: 'Experiment, move at your pace', text: "You want to experiment and move at your own pace. The EC²R AI Mentor guides you through the method's discovery, without immediate collective commitment.", steps: ['EC²R AI Mentor', 'Profile', 'At your pace'] },
      ],
      abyme: {
        label: 'Meta-narrative',
        title: 'This site documents its own construction.',
        text1: "We used AI's directed power to start from reality and define our value. Years of collectives supported, hundreds of field data points — translated into augmented experience. This site is not a fixed result, but the illustration of the method's living process.",
        text2: "Not showing the process — documenting and constantly improving. We try, experiment, translate, improve, refine, grow. That's the EC²R approach.",
        steps: [
          { title: 'Start from reality', text: "Targeted interviews, data, in-situation observations — no marketing promise." },
          { title: 'Identify surgically', text: "The EC²R method structures and cross-references feedback. Every claim backed by proof or data cross-referencing." },
          { title: 'Build the path to action', text: "EC²R expertise + AI to accelerate formalisation. Brief → deliverable." },
          { title: 'Document the living', text: "This site is not a fixed object, but an illustration of the living process — the mobilisation trajectory, not just results." },
        ],
      },
    },

    contact: {
      label: "Let's talk",
      title1: 'A quick exchange,',
      title2: 'not a pitch.',
      intro: "Not a pitch. No commercial form. No conversational agent. A real exchange with a human for 10 minutes — to see if and how it resonates in your organisation.",
      cardYes: { title: 'You have a project and want to co-build?', text: "You have a project with the capacity to translate it into impactful things. Not just a budget — a path to action.", cta: 'Think of us →' },
      cardNo: { title: 'The project first, not the budget', text: "We can be smart about finding funding solutions. But what interests us is your project first. The platform is here to help you around a result — not a budget.", cta: "Let's talk about the project first →" },
      checks: ["There's a protocol to 'be part of it' — not open to everyone", "Always an EC²R contact before commitment", "10 minutes on video — if it resonates, we experiment and bring it to life for you", "The difference between winning and being right"],
      booking: { title: 'Book a slot', sub: '10 min, no pitch, just a conversation.', cta: 'Choose a slot', note: 'Agenda connection coming soon — in the meantime, write to us.' },
      quote: '"If you want to copy us, forget us. The method has outgrown the person — it\'s self-sustaining and evolving. Artists and those with their own method are the ones who succeed."',
      form: { name: 'Name', namePlaceholder: 'Your name', email: 'Email', situation: 'Your situation', situationDefault: 'Choose...', situationOptions: ['You want a 10-min video exchange', 'You want to refer or recommend us', 'You want to experiment with the protocol', 'You want to start a programme'], referral: 'Who told you about us?', referralPlaceholder: 'Person\'s name or context', message: 'Message', messagePlaceholder: 'What brings you here, your context...', consent: "I agree that my data will be processed by EC²R Conseil to respond to my request, in accordance with the", consentLink: 'privacy policy', submit: 'Start the conversation', note: 'We respond personally. No auto-responder.' },
    },

    equipe: {
      label: 'Practitioners',
      title1: 'People who',
      title2: 'act.',
      intro: "Not interchangeable consultants. Professionals and humans who have experimented, who believe in the method's differentiation, and who help you bring it to life in your daily business context.",
      portraitPlaceholder: 'Portrait to add',
      fieldTitle: 'In the field',
      fieldNote: 'Seminar and workshop photos to integrate.',
      founders: [
        {
          role: 'Founder of the EC²R method — Co-founder EC²R Conseil',
          bio: "Carries and embodies the EC²R method for over 5 years. Supports collectives towards performance for over 20 years. Ensures continuous improvement — guardian, with AI, of the method's integrity and development.",
        },
        {
          role: 'Co-design Method × Technology — At the genesis of the augmented protocol',
          bio: "Moves from ideation to situation. Co-builds the value promise+ with your business experts, translates+ into product, and moves from idea to action — directly, with you.",
        },
      ],
      team: [
        {
          role: 'Co-founder EC²R Conseil — Associate of the EC²R method',
          bio: "Coaches' coach and trainer of professional athletes and champions. Field grounding and transmission. Partner since the origins.",
        },
        {
          role: 'EC²R Conseil Partner — Expert & Advocate',
          bio: "Behavioural profiling expert. Founder of Groupe Alar. Supports organisations in operational deployment and moving to action.",
        },
        {
          role: 'EC²R Facilitator — Logistics, team, deployment',
          bio: "Facilitates EC²R session deployment, coordinates team logistics. Trained in individual profile debriefs.",
        },
        {
          role: 'EC²R Conseil Partner — EC²R Practitioner',
          bio: 'Reserved slot — profile being integrated.',
        },
      ],
      seminaireTitles: [
        'Label Antilles Seminar',
        'CROEC Martinique',
        'Laforêt Training',
        'Collective Workshop',
      ],
    },

    // Preuves (données statiques non traduisibles via data-attrs)
    videos: [
      { title: 'Cross Perspectives Ep.1', subtitle: 'Mobilising our energies towards performance', description: 'With Vincent Clarico, world record holder and France national team coach.' },
      { title: 'Cross Perspectives Ep.2', subtitle: 'REMOBILISING your energies', description: 'With Marie-Laure Brunet, double Olympic biathlon medallist.' },
    ],
    museeLabel: 'Trajectory',

    footer: {
      address: '',
      legal: 'Legal notice',
      privacy: 'Privacy policy',
    },
  },
} as const;

/**
 * getLang — renvoie toujours 'fr' (SSG statique).
 * Utilisé uniquement pour typer les props au build time.
 * La détection réelle (localStorage → navigator.language) est dans Layout.astro (client).
 */
export function getLang(_request?: Request): Lang {
  return 'fr';
}

export function t(lang: Lang, path: string): string {
  const keys = path.split('.');
  let val: any = translations[lang];
  for (const k of keys) {
    val = val?.[k];
  }
  return val ?? path;
}
