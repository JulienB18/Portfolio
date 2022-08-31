export type ProjectType = {
    title: string;
    type: string;
    imgPath: string;
    link: string;
    buttonText: string;
};

const dinbbl: ProjectType = {
    title: 'Dinbbl',
    type: 'Application Web',
    imgPath: '/assets/images/projects/Dinbbl.png',
    link: '/project/dinbbl',
    buttonText: 'En savoir plus',
};

const kcorp: ProjectType = {
    title: 'Karmine Corp',
    type: 'Application Mobile',
    imgPath: '/assets/images/projects/Kcorp.png',
    link: '/project/kcorp',
    buttonText: 'En savoir plus',
};

const jeanne: ProjectType = {
    title: "Centre Jeanne D'Arc",
    type: 'Site Web et DAM',
    imgPath: '/assets/images/projects/Jeanne.png',
    link: '/project/cja',
    buttonText: 'En savoir plus',
};

const fmb: ProjectType = {
    title: 'Find My Bar',
    type: 'Application Mobile',
    imgPath: '/assets/images/projects/Fmb.png',
    link: '/project/fmb',
    buttonText: 'En savoir plus',
};

const gbot4: ProjectType = {
    title: 'Gbot-4',
    type: 'Site web',
    imgPath: '/assets/images/projects/Gbot4.png',
    link: '/project/gbot-4',
    buttonText: 'En savoir plus',
};

const mecanicBuro: ProjectType = {
    title: 'Mecanic Buro',
    type: 'Site web',
    imgPath: '/assets/images/projects/MecanicBuro.png',
    link: 'https://www.mecanic-buro.com/',
    buttonText: 'Voir le site',
};

const blueprint: ProjectType = {
    title: 'BluePrint',
    type: 'Site web',
    imgPath: '/assets/images/projects/Blueprint.png',
    link: 'https://julienboutet.fr/old/blueprint/',
    buttonText: 'Voir le site',
};

const oldPortfolio: ProjectType = {
    title: 'Ancien Portfolio',
    type: 'Site web',
    imgPath: '/assets/images/projects/OldPortfolio.png',
    link: 'https://julienboutet.fr/old/portfolio/',
    buttonText: 'Voir le site',
};

export const projectList = [dinbbl, kcorp, jeanne, fmb, gbot4, mecanicBuro, blueprint, oldPortfolio];
