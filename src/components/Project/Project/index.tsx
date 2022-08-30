import React from 'react';

import { useRouter } from 'next/router';

import GraySectionTitle from 'components/StyleGuide/GraySectionTitle';
import { ProjectDetailsType, ProjectLinkType } from 'data/ProjectDetails';

type ProjectDetailsProps = {
    projectDetails: ProjectDetailsType;
};

const Project = (props: ProjectDetailsProps) => {
    const router = useRouter();

    return (
        <section className="project-item">
            <div className="classic-max-width">
                <div className="project-item-content">
                    <div className="project-item-content-links">
                        <GraySectionTitle title="Liens" />
                        <ul>
                            {props.projectDetails.linkArray?.map((x: ProjectLinkType) => {
                                return (
                                    <li key={x.title}>
                                        <a href={x.link} target="_blank" rel="noopener noreferrer">
                                            {x.title}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="project-item-content-explanation">
                        <div className="project-item-content-explanation-graytitle">
                            <GraySectionTitle title="Présentation du projet" />
                        </div>
                        <h4>{props.projectDetails.descriptionTitle}</h4>
                        <p className="project-item-content-explanation-date">{props.projectDetails.date}</p>
                        <p className="project-item-content-explanation-description">
                            {props.projectDetails.description}
                        </p>
                        <div className="project-item-content-explanation-image">
                            <img
                                src={router.basePath + props.projectDetails.descriptionImg}
                                alt={props.projectDetails.descriptionTitle}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;
