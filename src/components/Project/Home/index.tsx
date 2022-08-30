import React from 'react';

import { useRouter } from 'next/router';

import GraySectionTitle from 'components/StyleGuide/GraySectionTitle';
import SectionTitle from 'components/StyleGuide/SectionTitle';
import { ProjectDetailsType } from 'data/ProjectDetails';

type ProjectHomeProps = {
    projectDetails: ProjectDetailsType;
};

const Home = (props: ProjectHomeProps) => {
    const router = useRouter();

    return (
        <div className="classic-max-width">
            <section className="project-home">
                <div className="project-home-content" data-aos="fade-right">
                    <div className="project-home-content-graytitle">
                        <GraySectionTitle title="Projet" />
                    </div>
                    <div className="project-home-content-sectiontitle">
                        <SectionTitle title={props.projectDetails.mainTitle} />
                    </div>
                    <p className="project-home-content-description">{props.projectDetails.mainDescription}</p>
                </div>
                <div className="project-home-image" data-aos="fade-left">
                    <img
                        src={router.basePath + props.projectDetails.mainImgPath}
                        alt={props.projectDetails.mainTitle}
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;
