export type ExperienceType = {
    title: string;
    secondTitle: string;
    date: string;
};

const g4bac5: ExperienceType = {
    title: 'Chef de Projet Système d’Information (RNCP Niveau 7, BAC +5)',
    secondTitle: 'Institut G4 - Lyon',
    date: '2020 - 2022',
};

const g4bac3: ExperienceType = {
    title: 'Concepteur développeur d’applications (RNCP Niveau 6, BAC +3)',
    secondTitle: 'Institut G4 - Lyon',
    date: '2019 - 2020',
};

const mmi: ExperienceType = {
    title: 'DUT Métiers du multimédia et de l’internet (BAC +2)',
    secondTitle: 'IUT de Blois - Université de Tours',
    date: '2017 - 2019',
};

const lycee: ExperienceType = {
    title: 'Bac STI2D SIN (Mention très bien)',
    secondTitle: 'Lycée Pierre Émile Martin - Bourges',
    date: '2014 - 2017',
};

const freelance: ExperienceType = {
    title: 'Freelance',
    secondTitle: 'Remote',
    date: '2022 -',
};

const lacour: ExperienceType = {
    title: 'Développeur FullStack (Alternance)',
    secondTitle: 'Lacour Concept - Bourges',
    date: '2019 - 2022',
};

const mecanic: ExperienceType = {
    title: 'Webmaster (Stage de 3 mois)',
    secondTitle: 'Mecanic Buro - Bourges',
    date: '2019',
};

const stage: ExperienceType = {
    title: 'Stage de découverte du développement web',
    secondTitle: 'Idweb - Bourges',
    date: '2014',
};

export const schoolExperience = [g4bac5, g4bac3, mmi, lycee];

export const proExperience = [freelance, lacour, mecanic, stage];
