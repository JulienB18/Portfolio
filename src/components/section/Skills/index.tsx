import * as React from 'react';

import { useRouter } from 'next/router';

import GraySectionTitle from 'components/styleguide/GraySectionTitle';
import SectionTitle from 'components/styleguide/SectionTitle';
import SkillCard from 'components/styleguide/SkillCard';

import { frontEnd, backEnd, tools, others } from './skills';

const Skills = () => {
    const router = useRouter();
    return (
        <section className="skills">
            <div className="skills-title">
                <GraySectionTitle title="Aptitudes" />
            </div>
            <div className="skills-title">
                <SectionTitle title="🔍 Mes compétences" />
            </div>
            <div className="skills-container">
                <div className="skills-container-row">
                    <SkillCard
                        color={'185, 246, 156'}
                        imgPath={`.${router.basePath}/assets/images/skills/FrontEnd.png`}
                        title="Front - end"
                        skills={frontEnd}
                    />
                    <SkillCard
                        color={'156, 181, 246'}
                        imgPath={`.${router.basePath}/assets/images/skills/BackEnd.png`}
                        title="Back - end"
                        skills={backEnd}
                    />
                </div>
                <div className="skills-container-row">
                    <SkillCard
                        color={'245, 156, 246'}
                        imgPath={`.${router.basePath}/assets/images/skills/Tools.png`}
                        title="Outils"
                        skills={tools}
                    />
                    <SkillCard
                        color={'246, 156, 156'}
                        imgPath={`.${router.basePath}/assets/images/skills/Others.png`}
                        title="Autres"
                        skills={others}
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
