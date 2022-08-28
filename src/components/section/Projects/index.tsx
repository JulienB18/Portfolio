import * as React from 'react';

import { useRouter } from 'next/router';

import GraySectionTitle from 'components/styleguide/GraySectionTitle';
import ProjectCard from 'components/styleguide/ProjectCard';
import SectionTitle from 'components/styleguide/SectionTitle';
import DotGrid from 'components/styleguide/svg/DotGrid';
import { projectList, ProjectType } from 'data/Projects';

const Projects = () => {
    const router = useRouter();
    return (
        <section className="projects">
            <aside className="projects-aside">
                <div className="projects-aside-rectangle"></div>
                <div className="projects-aside-dot">
                    <DotGrid />
                </div>
            </aside>
            <div className="projects-container">
                <div className="classic-max-width">
                    <div className="projects-content">
                        <div className="projects-content-title">
                            <GraySectionTitle title="Portfolio" />
                        </div>
                        <div className="projects-content-title">
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
