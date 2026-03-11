export type Lang = 'fr' | 'en';

export const translations = {
  fr: {
    // Nav
    nav: {
      method: 'La Méthode',
      proof: 'Ils le vivent',
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
      sub1Cycling: ['la formation', 'le conseil', 'la RH', 'le co-développement', 'le management'],
      sub1b: 'Le Waze du comportement professionnel.',
      sub1bCycling: ['comportement professionnel', 'changement', 'mobilisation collective'],
      sub2: "Un IRM+ organisationnel qui mesure les énergies collectives, identifie chirurgicalement les leviers de mobilisation et accompagne le passage à l'acte jusqu'au comportement en situation.",
      cta1: 'Découvrir la méthode',
      cta2: 'Parlons-en',
      situationsLabel: 'Vous le vivez, vous qui…',
      situationsHint: 'Cliquez ce qui résonne pour voir notre réponse.',
      tabCeQuiSePasse: 'Ce qui se passe',
      tabEssaye: 'Vous avez essayé',
      tabPromesse: 'Notre promesse',
    },

    // Situations
    situations: [
      {
        accroche: "Vos équipes adhèrent parfois au changement sur le papier, mais sur le terrain, le collectif ne passe pas assez vite à l'acte.",
        ceQuiSePasse: "Entre ce qui est dit en réunion de direction et ce qui se passe le lundi matin, il y a un écart. Nouveaux outils, nouveaux process, nouvelles priorités — tout le monde acquiesce. Personne ne fédère vraiment autour.",
        essaye: ["Les grands discours de rentrée", "Les séminaires de cohésion", "Les slides de vision"],
        essayeConclusion: "Ça motive un peu, ça coûte cher — mais ça ne mobilise pas.",
        reponse: "Créer un élan collectif réel autour du projet — et le faire vivre dans le quotidien.",
      },
      {
        accroche: "Certains sont experts, d'autres moins. On veut coopérer — mais on est rattrapé par les silos et les tâches sans valeur ajoutée.",
        ceQuiSePasse: "Chacun avance dans son couloir. On sait ce qu'on voudrait faire collectivement. La coopération reste une intention, pas un réflexe. Et ça, ça ne se règle pas avec un atelier.",
        essaye: ["Les ateliers transverses", "Les rituels d'équipe", "Les process de coordination"],
        essayeConclusion: "Ça améliore les relations. Mais est-ce que ça change vraiment les comportements ?",
        reponse: "Rendre visible ce qui freine — pour activer collectivement ce que vous avez déjà individuellement.",
      },
      {
        accroche: "Vous qui devez progresser en résultats, rendements, mouvements — sans braquer ni perdre des éléments clés en route.",
        ceQuiSePasse: "Vous avez le diagnostic. Vous n'avez plus 12 mois pour mettre en place le plan. Certains jouent le jeu, d'autres sont à la traîne. Et pendant ce temps, vos concurrents avancent.",
        essaye: ["Les plans à 18 mois", "Les consultants qui livrent un rapport", "Les formations de cadrage"],
        essayeConclusion: "Vous avez le constat. Vous attendez encore les comportements terrain.",
        reponse: "Progresser vite, de façon chirurgicale — du constat au comportement, sans casser la dynamique.",
      },
      {
        accroche: "Vos managers intermédiaires risquent de s'épuiser — ou d'épuiser leurs équipes — face à la complexité des situations.",
        ceQuiSePasse: "Nouveaux usages de l'IA, gestion des relations, frustrations — ils sont au centre. Certains font à la place. D'autres se réfugient dans leur expertise. D'autres dépensent trop d'énergie à vouloir convaincre ceux qui ne voudront pas l'être.",
        essaye: ["Les formations au management", "La gestion du stress, du temps", "Le coaching individuel — devenu développement personnel", "Dans le meilleur des cas, les 360°"],
        essayeConclusion: "Ils comprennent ce qu'il faudrait faire. Rarement comment le faire avec ce collaborateur, ce lundi matin, dans ce contexte d'équipe.",
        reponse: "Combiner bienveillance et exigence. Animer au quotidien. Donner les bons repères au bon moment.",
      },
      {
        accroche: "Dans votre organisation, des intérêts divergents et des énergies qui tirent dans un autre sens — pas toujours silencieux, toujours présents.",
        ceQuiSePasse: "Des contre-projets discrets. Des contributions inégales. Des profils qui risquent de bloquer le collectif — et de se propager. Vous voudriez que chacun fasse davantage sa part dans l'intérêt commun.",
        essaye: ["Les enquêtes de satisfaction", "Les baromètres QVT", "Le co-développement", "Les plans bien-être"],
        essayeConclusion: "Vous ne voulez pas rester sur le symptôme. Vous voudriez agir sur les causes.",
        reponse: "Identifier les contre-projets, traiter les freins réels — sans esquiver, sans chercher des coupables.",
      },
      {
        accroche: "Vous voulez fonctionner en amélioration continue. Que l'équipe se pose les bonnes questions et se remobilise pour la prochaine étape.",
        ceQuiSePasse: "On sait qu'on devrait mieux délivrer. Mais on cherche des solutions structurelles et comportementales — pas des coupables. Ce qu'il faut, c'est un système. Pas un énième programme.",
        essaye: ["Le tout-formation", "Le faux blended", "Les baromètres QVT qui ne se déclinent pas en actions"],
        essayeConclusion: "Vos équipes savent. Elles ne font pas encore — et on ne sait pas trop pourquoi.",
        reponse: "Mesurer, progresser, préparer le moteur collectif pour atteindre un niveau d'intensité supérieur.",
      },
      {
        accroche: "Vous avez fait des choix. Vous voulez faire évoluer votre modèle de valeur, construire de nouvelles briques augmentées. Mais comment leur donner vie avec vos experts ?",
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
      title2: 'On installe les conditions pour mobiliser+',
      title3: 'Cibler+, agir+, traduire+, mesurer+',
      intro: "6 énergies+ collectives. 18 batteries pour se recharger. 9 niveaux. Et des comportements clés pour se recharger. Un diagnostic+ chirurgical qui vous aide à identifier en temps réel les leviers de mobilisation collective. Pas de développement uniquement personnel : guider le professionnel en situation, ancré dans la réalité de son collectif.",
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
        { name: 'Réguler', qualifier: 'confiance / gouvernance', description: "Confiance diffusée, le « comment » animé, les efforts récompensés. Recentrer les énergies vers l'essentiel." },
        { name: 'Remobiliser', qualifier: 'agile / amélioration continue', description: "Animés, guidés, agiles, pour tenir la longueur. Organisation apprenante, séquençage long, amélioration continue." },
      ],
    },

    // Chiffres
    chiffres: {
      stats: [
        { suffix: ' ans', label: 'de méthode éprouvée sur le terrain' },
        { suffix: '+', label: 'collectifs accompagnés' },
        { suffix: '', label: 'batteries comportementales pour se recharger' },
        { suffix: '+', label: 'comportements clés par énergie (thermomètre)' },
      ],
    },

    // Preuves
    preuves: {
      label: 'Ils le vivent',
      title1: "Ils l'ont déjà vécu,",
      title2: 'ils vous le racontent',
      intro: "Pas de promesses marketing. Des résultats concrets, les mots de nos clients depuis 5 ans, des données mesurables. Des comportements observables. Un impact déjà+ réel.",
      wallTitle: 'Ce qu\'ils retiennent',
      wallMore: '+ votre mot bientôt',
      wallNote: "Mur de contribution ouvert — inspiration Châteauform. Laissez votre empreinte.",
      wallTags: ['chirurgical', "passage à l'acte", 'collectif vivant', 'résultats concrets', 'engagement réel', 'méthode vivante', 'transformation durable', 'leadership distribué', 'IRM organisationnel', 'mobilisation', 'co-design', 'énergie collective'],
      testimonials: [
        { quote: "Après les formations avec ce qui se fait de mieux en termes de management, le réseau avait eu des résultats au-dessus des autres franchises.", author: "Directeur réseau", role: "Réseau national — N°2 du secteur immobilier", type: "Résultat terrain" },
        { quote: "Tu adresses le climat, pas la météo. Ce qu'on a essayé pendant un an avec des avatars IA, vous le faites avec une méthode qui tient la route.", author: "Ancienne stagiaire AG2R", role: "Vers le MEDEF Martinique — ambassadrice spontanée", type: "Comparaison concurrence" },
        { quote: "Ce qui change, c'est qu'on ne parle plus de ressenti mais de faits. Le diagnostic est chirurgical : on sait exactement quoi adresser, dans quel ordre.", author: "Cabinet accompagné", role: "Cabinet d'expertise comptable", type: "Diagnostic" },
      ],
      trajTitle: 'Performance et mobilisation',
      trajSub: 'Vidéos de la trajectoire EC²R — 5 ans de terrain documentés.',
      museeTitle: '5 ans de terrain — notre petit musée',
      museeSub: "Des premiers séminaires aux déploiements multi-sites. Des slides originales aux protocoles augmentés par l'IA. Chaque année a été un point de rupture — nous documentons le chemin parcouru, pas pour l'ego, pour la preuve.",
      museeYears: ['2021 — Genèse', '2022 — Terrain', '2023 — Méthode', '2024 — Plateforme', '2025 — IA'],
    },

    // Protocole
    protocole: {
      label: 'Le protocole augmenté',
      title1: 'Du levier au comportement.',
      title2: "Du constat au passage à l'acte",
      intro: "Diagnostiquer en temps réel l'état d'esprit et le comportement observable. Puis accompagner — pas avec des promesses, mais avec un protocole qui transforme chaque insight en action concrète.",
      parcours: [
        { title: 'Partir du collectif', text: "Vous voulez partir du collectif pour accélérer le passage individuel. Le baromètre des énergies révèle la dynamique réelle, puis chaque profil s'affine.", steps: ['Baromètre', 'Profil Leader', 'Mentor IA'] },
        { title: 'Partir de vos leaders', text: "Vous voulez partir de vos leaders pour accélérer le passage collectif. Le profil individuel éclaire d'abord, puis le baromètre collectif amplifie.", steps: ['Profil Leader', 'Mentor IA', 'Baromètre'] },
        { title: 'Expérimenter, avancer seul', text: "Vous voulez expérimenter et avancer à votre rythme. Le Mentor IA EC²R vous guide dans la découverte de la méthode, sans engagement collectif immédiat.", steps: ['Mentor IA EC²R', 'Profil', 'À votre rythme'] },
      ],
      abyme: {
        label: 'Mise en abyme',
        title: 'Ce site documente sa propre construction.',
        text1: "Nous avons utilisé la puissance dirigée de l'IA pour partir du réel et définir notre valeur ajoutée. Les relations entre IA et comportements EC²R ont accéléré le passage à l'acte — du brief vocal à la page que vous lisez, en quelques heures.",
        text2: "Montrer le processus, pas juste le résultat — c'est ça l'approche EC²R. On essaye, on expérimente, on travaille avec des gens pertinents.",
        steps: [
          { title: 'Partir du réel', text: "Vocaux, témoignages, données terrain — pas de promesse marketing." },
          { title: 'Identifier chirurgicalement', text: "L'IA structure et croise les retours. Chaque affirmation adossée à une preuve." },
          { title: "Construire le passage à l'acte", text: "IA + compétences EC²R pour accélérer la formalisation. Brief → livrable." },
          { title: 'Montrer le processus', text: "Ce site n'est pas un résultat figé. C'est un processus vivant." },
        ],
      },
    },

    // Contact
    contact: {
      label: 'Parlons-en',
      title1: 'Un échange rapide,',
      title2: 'pas un pitch.',
      intro: "Pas de formulaire commercial. Pas d'agent conversationnel. Une vraie discussion courte de 10 minutes pour voir si ça résonne.",
      cardYes: { title: 'Vous avez un projet et vous voulez co-construire ?', text: "Vous avez un projet avec la capacité à le traduire sur des choses impactantes. Pas juste un budget — un passage à l'acte.", cta: 'Pensez à nous →' },
      cardNo: { title: 'Vous cherchez uniquement un budget ?', text: "Si c'est juste pour voir si vous êtes éligible à un financement — ce n'est pas le bon endroit. La méthode EC²R est au service de votre projet, pas l'inverse.", cta: 'Oubliez-nous.' },
      checks: ["Il y a un protocole pour « en être » — pas ouvert à tous", "Toujours un interlocuteur EC²R avant engagement", "10 minutes — si ça résonne, on avance", "La différence entre gagner et avoir raison"],
      booking: { title: 'Réserver un créneau', sub: '10 min, pas de pitch, juste une conversation.', cta: 'Choisir un créneau', note: 'Connexion agenda à venir — en attendant, écrivez-nous.' },
      quote: "« Si vous voulez nous copier, oubliez-nous. La méthode a dépassé l'homme — elle est auto-entretenue et évolutive. Ce sont les artistes et ceux qui ont une méthode en propre qui réussissent. »",
      form: { name: 'Nom', namePlaceholder: 'Votre nom', email: 'Email', situation: 'Votre situation', situationDefault: 'Choisir...', situationOptions: ['Vous voulez nous en parler', 'Vous voulez nous prescrire', 'Vous voulez expérimenter'], referral: 'Qui vous en a parlé ?', referralPlaceholder: 'Nom de la personne ou contexte', message: 'Message', messagePlaceholder: 'Ce qui vous amène, votre contexte...', consent: "J'accepte que mes données soient traitées par EC²R Conseil pour répondre à ma demande, conformément à la", consentLink: 'politique de confidentialité', submit: 'Engager la conversation', note: 'Nous répondons personnellement. Pas d\'auto-répondeur.' },
    },

    // Equipe
    equipe: {
      label: 'Les praticiens',
      title1: 'Des gens qui passent',
      title2: 'à l\'acte.',
      intro: "Pas de consultants interchangeables. Des profils expertise complémentaires qui croient en la différenciation, qui ont expérimenté et démontré la puissance de la méthode sur le terrain, qui savent la traduire dans vos quotidiens métiers.",
      portraitPlaceholder: 'Portrait à ajouter',
      fieldTitle: 'Sur le terrain',
      fieldNote: 'Photos des séminaires et ateliers à intégrer.',
    },

    // Footer
    footer: {
      address: '29 rue du Pont, 92200 Neuilly-sur-Seine',
      legal: 'Mentions légales',
      privacy: 'Politique de confidentialité',
    },
  },

  en: {
    nav: {
      method: 'The Method',
      proof: 'They live it',
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
      sub1Cycling: ['training', 'consulting', 'HR', 'co-development', 'management'],
      sub1b: 'The Waze of professional behaviour.',
      sub1bCycling: ['professional behaviour', 'change', 'collective mobilisation'],
      sub2: "An organisational MRI+ that measures collective energies, surgically identifies mobilisation levers and supports action through to behaviour in situation.",
      cta1: 'Discover the method',
      cta2: "Let's talk",
      situationsLabel: 'You live it, you who…',
      situationsHint: 'Click what resonates to see our answer.',
      tabCeQuiSePasse: "What's happening",
      tabEssaye: "What you've tried",
      tabPromesse: 'Our promise',
    },

    situations: [
      {
        accroche: "Your teams sometimes agree to change on paper, but on the ground, the collective isn't moving fast enough.",
        ceQuiSePasse: "Between what's said in leadership meetings and what happens on Monday morning, there's a gap. New tools, new processes, new priorities — everyone nods. Nobody truly rallies around them.",
        essaye: ["Big kick-off speeches", "Team cohesion seminars", "Vision slides"],
        essayeConclusion: "It motivates briefly, costs a lot — but it doesn't mobilise.",
        reponse: "Build a real collective momentum around the project — and keep it alive day to day.",
      },
      {
        accroche: "Some are experts, others less so. You want to cooperate — but you're caught up in silos and low-value tasks.",
        ceQuiSePasse: "Everyone advances in their own lane. You know what you'd like to do collectively. Cooperation remains an intention, not a reflex. And that can't be fixed with a workshop.",
        essaye: ["Cross-functional workshops", "Team rituals", "Coordination processes"],
        essayeConclusion: "It improves relationships. But does it really change behaviours?",
        reponse: "Make what's blocking visible — to activate collectively what you already have individually.",
      },
      {
        accroche: "You who need to progress in results, performance, movement — without alienating or losing key people along the way.",
        ceQuiSePasse: "You have the diagnosis. You no longer have 12 months to roll out the plan. Some are on board, others are lagging. Meanwhile, your competitors are moving.",
        essaye: ["18-month roadmaps", "Consultants delivering reports", "Scoping workshops"],
        essayeConclusion: "You have the findings. You're still waiting for the behaviours.",
        reponse: "Move fast, surgically — from diagnosis to behaviour, without breaking the dynamic.",
      },
      {
        accroche: "Your middle managers risk burning out — or burning out their teams — faced with the complexity of situations.",
        ceQuiSePasse: "New AI uses, relationship management, frustrations — they're at the centre of it all. Some do things instead of others. Others retreat into their expertise. Others spend too much energy trying to convince those who won't be convinced.",
        essaye: ["Management training", "Stress and time management", "Individual coaching — now basically personal development", "At best, 360° feedback"],
        essayeConclusion: "They understand what should be done. Rarely how to do it with that person, that Monday morning, in that team context.",
        reponse: "Combine care and demand. Lead day to day. Give the right markers at the right moment.",
      },
      {
        accroche: "In your organisation, diverging interests and energies pulling in other directions — not always silent, always present.",
        ceQuiSePasse: "Quiet counter-projects. Unequal contributions. Profiles that risk blocking the collective — and spreading. You'd like everyone to do more of their part for the common good.",
        essaye: ["Satisfaction surveys", "QWL barometers", "Co-development", "Wellbeing plans"],
        essayeConclusion: "You don't want to stay at the symptom level. You want to act on the causes.",
        reponse: "Identify counter-projects, address real blockers — without avoiding them, without looking for scapegoats.",
      },
      {
        accroche: "You want to operate in continuous improvement. For the team to ask the right questions and remobilise for the next phase.",
        ceQuiSePasse: "You know you should be delivering better. But you're looking for structural and behavioural solutions — not culprits. What's needed is a system. Not another programme.",
        essaye: ["All-in training", "Fake blended learning", "QWL barometers that don't translate into actions"],
        essayeConclusion: "Your teams know. They're not yet doing — and no one quite knows why.",
        reponse: "Measure, progress, prime the collective engine to reach a higher level of intensity.",
      },
      {
        accroche: "You've made your choices. You want to evolve your value model, build new augmented capabilities. But how do you bring them to life with your experts?",
        ceQuiSePasse: "You have domain experts who hold the vision. Perhaps IT stakeholders too. What's missing: someone able to bridge the human promise and the technology layer, and make it real.",
        essaye: ["Dev teams to brief for months", "Agencies that deliver without understanding the business", "POCs that never reach production"],
        essayeConclusion: "The vision is there. The translation is stuck between idea and action.",
        reponse: "Luc co-builds the value promise+ with your experts, translates+ it into product, and moves from idea to action — directly, with you.",
      },
    ],

    methode: {
      label: 'The method',
      title1: "We don't exhaust our energy trying to motivate",
      title2: 'We install the conditions to mobilise+',
      title3: 'Target+, act+, translate+, measure+',
      intro: "6 collective energies+. 18 batteries to recharge. 9 levels. And key behaviours to recharge. A surgical+ diagnosis that helps you identify collective mobilisation levers in real time. Not just personal development: guiding the professional in situation, grounded in their collective reality.",
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
        { name: 'Regulate', qualifier: 'trust / governance', description: "Trust diffused, 'how' explained, efforts rewarded. Refocus energies on what matters." },
        { name: 'Remobilise', qualifier: 'agile / continuous improvement', description: "Animated, guided, agile, for the long run. Learning organisation, long sequencing, continuous improvement." },
      ],
    },

    chiffres: {
      stats: [
        { suffix: ' years', label: 'of method proven in the field' },
        { suffix: '+', label: 'collectives supported' },
        { suffix: '', label: 'behavioural batteries to recharge' },
        { suffix: '+', label: 'key behaviours per energy (thermometer)' },
      ],
    },

    preuves: {
      label: 'They live it',
      title1: "They've already lived it,",
      title2: 'they tell you about it',
      intro: "No marketing promises. Concrete results, client words from 5 years, measurable data. Observable behaviours. An already+ real impact.",
      wallTitle: 'What they remember',
      wallMore: '+ your word soon',
      wallNote: 'Open contribution wall — Châteauform inspiration. Leave your mark.',
      wallTags: ['surgical', 'action taken', 'living collective', 'concrete results', 'real engagement', 'living method', 'lasting transformation', 'distributed leadership', 'organisational MRI', 'mobilisation', 'co-design', 'collective energy'],
      testimonials: [
        { quote: "After the training with the best management practices available, the network achieved results above other franchises.", author: "Network Director", role: "National network — #2 in the real estate sector", type: "Field result" },
        { quote: "You address the climate, not the weather. What we tried for a year with AI avatars, you do with a method that holds up.", author: "Former AG2R intern", role: "MEDEF Martinique — spontaneous ambassador", type: "Competitive comparison" },
        { quote: "What changes is that we no longer talk about feelings but facts. The diagnosis is surgical: we know exactly what to address, in what order.", author: "Accompanied firm", role: "Accounting firm", type: "Diagnosis" },
      ],
      trajTitle: 'Performance and mobilisation',
      trajSub: 'EC²R trajectory videos — 5 years of field work documented.',
      museeTitle: '5 years in the field — our little museum',
      museeSub: "From first seminars to multi-site deployments. From original slides to AI-augmented protocols. Each year was a turning point — we document the journey, not for ego, but as proof.",
      museeYears: ['2021 — Genesis', '2022 — Field', '2023 — Method', '2024 — Platform', '2025 — AI'],
    },

    protocole: {
      label: 'The augmented protocol',
      title1: 'From lever to behaviour.',
      title2: 'From insight to action',
      intro: "Diagnose in real time the state of mind and observable behaviour. Then accompany — not with promises, but with a protocol that turns every insight into concrete action.",
      parcours: [
        { title: 'Start from the collective', text: "You want to start from the collective to accelerate individual progress. The energy barometer reveals the real dynamic, then each profile is refined.", steps: ['Barometer', 'Leader Profile', 'AI Mentor'] },
        { title: 'Start from your leaders', text: "You want to start from your leaders to accelerate the collective shift. The individual profile illuminates first, then the collective barometer amplifies.", steps: ['Leader Profile', 'AI Mentor', 'Barometer'] },
        { title: 'Experiment, move at your pace', text: "You want to experiment and move at your own pace. The EC²R AI Mentor guides you through the method's discovery, without immediate collective commitment.", steps: ['EC²R AI Mentor', 'Profile', 'At your pace'] },
      ],
      abyme: {
        label: 'Meta-narrative',
        title: 'This site documents its own construction.',
        text1: "We used AI's directed power to start from reality and define our value. The relationship between AI and EC²R behaviours accelerated action — from vocal brief to the page you're reading, in a few hours.",
        text2: "Showing the process, not just the result — that's the EC²R approach. We try, experiment, work with the right people.",
        steps: [
          { title: 'Start from reality', text: "Voice notes, testimonials, field data — no marketing promise." },
          { title: 'Identify surgically', text: "AI structures and cross-references feedback. Every claim backed by evidence." },
          { title: 'Build the path to action', text: "AI + EC²R expertise to accelerate formalisation. Brief → deliverable." },
          { title: 'Show the process', text: "This site is not a fixed result. It's a living process." },
        ],
      },
    },

    contact: {
      label: "Let's talk",
      title1: 'A quick exchange,',
      title2: 'not a pitch.',
      intro: "No commercial form. No conversational agent. A real 10-minute conversation to see if it resonates.",
      cardYes: { title: 'You have a project and want to co-build?', text: "You have a project with the capacity to translate it into impactful things. Not just a budget — a path to action.", cta: 'Think of us →' },
      cardNo: { title: 'You\'re only looking for funding?', text: "If it's just to check if you're eligible for financing — this isn't the right place. The EC²R method serves your project, not the other way around.", cta: 'Move on.' },
      checks: ["There's a protocol to 'be part of it' — not open to everyone", "Always an EC²R contact before commitment", "10 minutes — if it resonates, we move forward", "The difference between winning and being right"],
      booking: { title: 'Book a slot', sub: '10 min, no pitch, just a conversation.', cta: 'Choose a slot', note: 'Agenda connection coming soon — in the meantime, write to us.' },
      quote: '"If you want to copy us, forget us. The method has outgrown the person — it\'s self-sustaining and evolving. Artists and those with their own method are the ones who succeed."',
      form: { name: 'Name', namePlaceholder: 'Your name', email: 'Email', situation: 'Your situation', situationDefault: 'Choose...', situationOptions: ['You want to talk to us', 'You want to refer us', 'You want to experiment'], referral: 'Who told you about us?', referralPlaceholder: 'Person\'s name or context', message: 'Message', messagePlaceholder: 'What brings you here, your context...', consent: "I agree that my data will be processed by EC²R Conseil to respond to my request, in accordance with the", consentLink: 'privacy policy', submit: 'Start the conversation', note: 'We respond personally. No auto-responder.' },
    },

    equipe: {
      label: 'Practitioners',
      title1: 'People who',
      title2: 'act.',
      intro: "No interchangeable consultants. Complementary expertise profiles who believe in differentiation, who have experimented and demonstrated the power of the method in the field, who know how to translate it into your day-to-day business realities.",
      portraitPlaceholder: 'Portrait to add',
      fieldTitle: 'In the field',
      fieldNote: 'Seminar and workshop photos to integrate.',
    },

    footer: {
      address: '29 rue du Pont, 92200 Neuilly-sur-Seine',
      legal: 'Legal notice',
      privacy: 'Privacy policy',
    },
  },
} as const;

export function getLang(request?: Request): Lang {
  // Côté serveur : Accept-Language header (Astro SSR only, pas utilisé ici)
  // Côté client : géré dans le script inline
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
