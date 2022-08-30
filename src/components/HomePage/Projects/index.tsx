import * as React from 'react';

import { useRouter } from 'next/router';

import GraySectionTitle from 'components/StyleGuide/GraySectionTitle';
import ProjectCard from 'components/StyleGuide/ProjectCard';
import SectionTitle from 'components/StyleGuide/SectionTitle';
import DotGrid from 'components/StyleGuide/svg/DotGrid';
import { projectList, ProjectType } from 'data/Projects';

type ProjectsProps = {
    forwaredRef: React.MutableRefObject<null>;
};

const Projects = (props: ProjectsProps) => {
    const router = useRouter();
    return (
        <section ref={props.forwaredRef} className="projects">
            <aside className="projects-aside">
                <div className="projects-aside-rectangle" data-aos="fade-left" data-aos-duration="1000"></div>
                <div className="projects-aside-dot">
                    <DotGrid />
                </div>
            </aside>
            <div className="projects-container">
                <div className="classic-max-width">
                    <div className="projects-content">
                        <div className="projects-content-title" data-aos="fade-right">
                            <GraySectionTitle title="Portfolio" />
                        </div>
                        <div className="projects-content-title" data-aos="fade-right">
                            <SectionTitle title="🖌️ Mes différents projets" />
                        </div>
                        <div className="projects-content-list">
                            {projectList?.map((x: ProjectType) => {
                                return (
                                    <ProjectCard
                                        key={x.title}
                                        title={x.title}
                                        type={x.type}
                                        imgPath={`.${router.basePath + x.imgPath}`}
                                        link={x.link}
                                        buttonText={x.buttonText}
                                    />
                                );
                            })}

                            <div className="projects-content-list-empty"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
