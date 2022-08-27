export type ProjectType = {
    title: string;
    type: string;
    imgPath: string;
    link: string;
};

const dinbbl: ProjectType = {
    title: 'Dinbbl',
    type: 'Application Web',
    imgPath: '/assets/images/projects/Dinbbl.png',
    link: '',
};

const kcorp: ProjectType = {
    title: 'Karmine Corp',
    type: 'Application Mobile',
    imgPath: '/assets/images/projects/Kcorp.png',
    link: '',
};

const jeanne: ProjectType = {
    title: "Centre Jeanne D'Arc",
    type: 'Site Web et DAM',
    imgPath: '/assets/images/projects/Jeanne.png',
    link: '',
};

const fmb: ProjectType = {
    title: 'Find My Bar',
    type: 'Application Mobile',
    imgPath: '/assets/images/projects/Fmb.png',
    link: '',
};

const gbot4: ProjectType = {
    title: 'Gbot-4',
    type: 'Site web',
    imgPath: '/assets/images/projects/Gbot4.png',
    link: '',
};

const mecanicBuro: ProjectType = {
    title: 'Mecanic Buro',
    type: 'Site web',
    imgPath: '/assets/images/projects/MecanicBuro.png',
    link: '',
};

const blueprint: ProjectType = {
    title: 'BluePrint',
    type: 'Site web',
    imgPath: '/assets/images/projects/Blueprint.png',
    link: '',
};

const oldPortfolio: ProjectType = {
    title: 'Ancien Portfolio',
    type: 'Site web',
    imgPath: '/assets/images/projects/OldPortfolio.png',
    link: '',
};

export const projectList = [dinbbl, kcorp, jeanne, fmb, gbot4, mecanicBuro, blueprint, oldPortfolio];
