import * as React from 'react';

import Link from 'next/link';

import { ProjectType } from 'data/Projects';

const ProjectCard = (props: ProjectType) => {
    return (
        <article
            className="Portfolio-projectcard"
            style={{
                background: `url(${props.imgPath})`,
            }}
        >
            <div className="Portfolio-projectcard-findout">
                <div>
                    <h4>{props.title}</h4>
                    <p>{props.type}</p>
                </div>
                {props.buttonText === 'Voir le site' ? (
                    <a href={props.link} target="_blank" rel="noopener noreferrer">
                        {props.buttonText}
                    </a>
                ) : (
                    <Link href={props.link}>{props.buttonText}</Link>
                )}
            </div>
        </article>
    );
};

export default ProjectCard;
