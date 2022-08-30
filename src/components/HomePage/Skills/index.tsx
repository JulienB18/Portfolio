import React from 'react';

import { useRouter } from 'next/router';

import GraySectionTitle from 'components/StyleGuide/GraySectionTitle';
import SectionTitle from 'components/StyleGuide/SectionTitle';
import SkillCard from 'components/StyleGuide/SkillCard';
import { frontEnd, backEnd, tools, others } from 'data/Skills';

type SkillsProps = {
    forwaredRef: React.MutableRefObject<null>;
};

const Skills = (props: SkillsProps) => {
    const router = useRouter();

    return (
        <div ref={props.forwaredRef} className="classic-max-width">
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
        </div>
    );
};

export default Skills;
