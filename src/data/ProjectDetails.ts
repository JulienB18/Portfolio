export type ProjectDetailsType = {
    slug: string;
    mainTitle: string;
    mainImgPath: string;
    mainDescription: string;
    linkArray: ProjectLinkType[];
    descriptionTitle: string;
    date: string;
    description: string;
    descriptionImg: string;
};

export type ProjectLinkType = {
    link: string;
    title: string;
};

const dinbbl: ProjectDetailsType = {
    slug: 'dinbbl',
    mainTitle: 'Dinbbl',
    mainDescription:
        "Application web permettant d'affronter ses amis sous forme de Blind Test à travers différentes playlists issu de Deezer.",
    mainImgPath: '/assets/images/project/dinbbl/MainDinbbl.png',
    descriptionTitle: "Développement d'une application web de Blind Test",
    date: '2021',
    description: `Afin d'améliorer mes compétences en Front End et Back End, j'ai cherché un concept multijoueur à développer à l'aide des WebSocket. L'idée de Dinbbl m'est donc venu. L'objectif principal de l'application était de pouvoir faire un Blind Test entre amis. Puis en développant le sujet des idées me sont venus comme l'intégration d'un tchat pour donner les réponses et discuter. Pour approvisionner l'application en musique, j'ai donc utilisé l'API Deezer, ce qui permet aussi aux utilisateurs de créer leur propre playlist via Deezer et ensuite jouer dessus. Pour le développement, j'ai utilisé Node JS / Express, Socket IO, TypeScript, Twig et le SCSS.`,
    descriptionImg: '/assets/images/project/dinbbl/ContentDinbbl.png',
    linkArray: [{ link: 'https://dinbbl.fr/', title: 'Dinbbl' }],
};

const kcorp: ProjectDetailsType = {
    slug: 'kcorp',
    mainTitle: 'Application Mobile Karmine Corp',
    mainDescription:
        "Application mobile réalisée en tant que projet personnel destiné aux fans de l'équipe Esport Karmine Corp.",
    mainImgPath: '/assets/images/project/kcorp/MainKcorp.png',
    descriptionTitle: "Développement d'une application mobile à l'aide de Flutter",
    date: '2022',
    description:
        "Pour ce projet, voulant m'entraîner à développer des applications mobiles, j'ai réalisé un projet non-officiel et non publié destiné à la Karmine Corp, l'équipe esport leader en France. Sur mon temps personnel, j'ai pu réaliser de A à Z l'application accompagnée d'un back-office et d'une API pour rendre l'application totalement dynamique. Un système de blog est aussi mis à disposition. Pour l'application, j'ai utilisé Flutter, Framework qui m'a permis de développer l'application une seule fois pour Android et IOS. Concernant le back-office, j'ai utilisé Node JS avec Framework NestJS.",
    descriptionImg: '/assets/images/project/kcorp/ContentKcorp.png',
    linkArray: [{ link: 'https://www.youtube.com/watch?v=lZ353RGfB4Y', title: 'Vidéo du projet' }],
};

const cja: ProjectDetailsType = {
    slug: 'cja',
    mainTitle: "Centre jeanne d'arc",
    mainDescription:
        "Projet mettant en avant le centre Jeanne d'Arc ainsi à l'aide d'un site web, ainsi qu'un Data Asset Management pour gérer les milliers de documents du centre.",
    mainImgPath: '/assets/images/project/cja/MainCJA.png',
    descriptionTitle: "Refonte numérique complète pour le centre Jeanne d'Arc",
    date: '2022',
    description: `Dans le cadre de mes études, en dernière année, j'ai participé au projet de refonte numérique pour le centre Jeanne d'Arc. Durant ce projet, j'avais le rôle de Lead Front, j'ai dû gérer toute la mise en place de l'architecture Front du site et du DAM, le développement d'une StyleGuide, une grande partie du développement TypeScript et la partie formation pour apprendre aux différents collaborateurs les bonnes pratiques.
    Concernant les technologies, nous avons utilisé Symfony et EasyAdmin pour la partie Back-End, pour le front nous avons utilisé Twig, TypeScript, SCSS, ainsi que ESLint et Prettier. Au total, environ 30 personnes ont développé sur le projet.`,
    descriptionImg: '/assets/images/project/cja/ContentCJA.png',
    linkArray: [{ link: 'https://www.jeannedarc-orleans.fr/', title: "Le centre Jeanne d'Arc" }],
};

const fmb: ProjectDetailsType = {
    slug: 'fmb',
    mainTitle: 'Find My Bar',
    mainDescription:
        'Application Mobile permettant de découvrir des bars à proximité de sa géolocalisation et de ses préférences.',
    mainImgPath: '/assets/images/project/fmb/MainFMB.png',
    descriptionTitle: "Développement d'une application Mobile de façon agile",
    date: '2021',
    description: `Dans le cadre de mes études, en 4ème année, j'ai participé au projet Find My Bar. De manière agile sous le framework Scrum, nous avons dû réaliser une application mobile sous Flutter. L'objectif était d'apprendre à travailler de façon agile sous le framework Scrum avec simulation d'un investisseur, gestion de toute la partie financière et organisation de la gestion de projet.
    Nous avons réalisé pendant ce projet une application mobile à l'aide de Flutter une API à l'aide de Node JS / Express. Find My Bar intègre une carte réalisé avec mapbox qui permet d'afficher les bars proche de sa géolocalisation.`,
    descriptionImg: '/assets/images/project/fmb/ContentFMB.png',
    linkArray: [{ link: 'https://www.youtube.com/watch?v=TZXBj_a1yh4', title: "Vidéo de l'application" }],
};

const gbot: ProjectDetailsType = {
    slug: 'gbot-4',
    mainTitle: 'GBot-4',
    mainDescription:
        "L'objectif du projet était de réaliser une mascotte 3D pour notre école, un site web, un jeu, des prints et de la Réalité augmentée en 4 jours, en équipe de 6.",
    mainImgPath: '/assets/images/project/gbot/MainGbot.png',
    descriptionTitle: "Développement d'un site custom en moins d'une semaine",
    date: '2020',
    description: `Dans le cadre de mes études, en 4ème année, j'ai participé à un événement dans mon école nommé Cercle de projet, l'objectif est de réaliser un projet en moins d'une semaine sans connaître le sujet en amont ni les potentielles technologies. Cette année, nous devions réaliser une mascotte 3D pour notre école accompagné de prints, d'un site web, de réalité augmenté et d'un jeu pour mettre en avant la mascotte. Dans ce projet, j'ai dû gérer l'équipe projet et développé le site web.`,
    descriptionImg: '/assets/images/project/gbot/ContentGbot.png',
    linkArray: [{ link: 'https://julienboutet.fr/old/gbot-4/', title: 'Site du projet' }],
};

export const projectsDetailsList = [dinbbl, kcorp, cja, fmb, gbot];
